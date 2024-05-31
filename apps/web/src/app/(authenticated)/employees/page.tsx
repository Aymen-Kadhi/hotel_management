'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Space,
  Row,
  Col,
} from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EmployeeManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [employees, setEmployees] = useState<Model.Employee[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState<Model.Employee | null>(
    null,
  )
  const [form] = Form.useForm()

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const employeesFound = await Api.Employee.findMany({
          includes: ['holidays', 'performanceReports'],
        })
        setEmployees(employeesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch employees', { variant: 'error' })
      }
    }
    fetchEmployees()
  }, [])

  const handleEdit = (employee: Model.Employee) => {
    setEditingEmployee(employee)
    form.setFieldsValue({
      ...employee,
      holidays: employee.holidays?.map(holiday => ({
        ...holiday,
        startDate: dayjs(holiday.startDate),
        endDate: dayjs(holiday.endDate),
      })),
    })
    setIsModalVisible(true)
  }

  const handleDelete = async (employeeId: string) => {
    try {
      await Api.Employee.deleteOne(employeeId)
      setEmployees(employees.filter(employee => employee.id !== employeeId))
      enqueueSnackbar('Employee deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete employee', { variant: 'error' })
    }
  }

  const handleAdd = () => {
    setEditingEmployee(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleSave = async (values: any) => {
    try {
      if (editingEmployee) {
        const updatedEmployee = await Api.Employee.updateOne(
          editingEmployee.id,
          values,
        )
        setEmployees(
          employees.map(employee =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee,
          ),
        )
        enqueueSnackbar('Employee updated successfully', { variant: 'success' })
      } else {
        const newEmployee = await Api.Employee.createOne(values)
        setEmployees([...employees, newEmployee])
        enqueueSnackbar('Employee added successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to save employee', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      render: (salary: number) => `$${salary}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: Model.Employee) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Employee Management</Title>
          <Text>
            Manage employee information, holidays, salaries, and performance
            reports.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            style={{ marginBottom: 20 }}
          >
            Add Employee
          </Button>
          <Table dataSource={employees} columns={columns} rowKey="id" />
        </Col>
      </Row>
      <Modal
        title={editingEmployee ? 'Edit Employee' : 'Add Employee'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter the email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please enter the phone' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="position"
            label="Position"
            rules={[{ required: true, message: 'Please enter the position' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="salary"
            label="Salary"
            rules={[{ required: true, message: 'Please enter the salary' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
