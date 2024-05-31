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
  Space,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function StoreManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [storeItems, setStoreItems] = useState<Model.StoreItem[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingItem, setEditingItem] = useState<Model.StoreItem | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    fetchStoreItems()
  }, [])

  const fetchStoreItems = async () => {
    try {
      const items = await Api.StoreItem.findMany()
      setStoreItems(items)
    } catch (error) {
      enqueueSnackbar('Failed to fetch store items', { variant: 'error' })
    }
  }

  const handleAdd = () => {
    setEditingItem(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleEdit = (item: Model.StoreItem) => {
    setEditingItem(item)
    form.setFieldsValue(item)
    setIsModalVisible(true)
  }

  const handleDelete = async (itemId: string) => {
    try {
      await Api.StoreItem.deleteOne(itemId)
      enqueueSnackbar('Store item deleted successfully', { variant: 'success' })
      fetchStoreItems()
    } catch (error) {
      enqueueSnackbar('Failed to delete store item', { variant: 'error' })
    }
  }

  const handleOk = async () => {
    try {
      const values = form.getFieldsValue()
      if (editingItem) {
        await Api.StoreItem.updateOne(editingItem.id, values)
        enqueueSnackbar('Store item updated successfully', {
          variant: 'success',
        })
      } else {
        await Api.StoreItem.createOne(values)
        enqueueSnackbar('Store item added successfully', { variant: 'success' })
      }
      fetchStoreItems()
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to save store item', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: Model.StoreItem) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Store Management</Title>
      <Paragraph>
        As a hotel manager, you can manage the inventory of the store to keep
        track of supplies and stock levels.
      </Paragraph>
      <Paragraph>
        View reports on store inventory to make informed decisions about
        restocking.
      </Paragraph>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        Add Store Item
      </Button>
      <Table dataSource={storeItems} columns={columns} rowKey="id" />
      <Modal
        title={editingItem ? 'Edit Store Item' : 'Add Store Item'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please input the quantity' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
