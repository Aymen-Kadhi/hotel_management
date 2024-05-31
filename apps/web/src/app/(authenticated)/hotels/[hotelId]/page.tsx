'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Spin,
} from 'antd'
import { CheckOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HotelDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [hotel, setHotel] = useState<Model.Hotel | null>(null)
  const [rooms, setRooms] = useState<Model.Room[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedRoom, setSelectedRoom] = useState<Model.Room | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const hotelData = await Api.Hotel.findOne(params.hotelId, {
          includes: ['rooms', 'rooms.reservations'],
        })
        setHotel(hotelData)
        setRooms(hotelData.rooms || [])
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch hotel details', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchHotelDetails()
  }, [params.hotelId])

  const showModal = (room: Model.Room) => {
    setSelectedRoom(room)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleReserve = async (values: any) => {
    if (!userId || !selectedRoom) return

    try {
      await Api.Reservation.createOneByRoomId(selectedRoom.id, {
        checkInDate: values.checkInDate.format('YYYY-MM-DD'),
        checkOutDate: values.checkOutDate.format('YYYY-MM-DD'),
        status: 'reserved',
        userId: userId,
      })
      enqueueSnackbar('Reservation successful', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to reserve room', { variant: 'error' })
    }
  }

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>{hotel?.name}</Title>
      <Paragraph>{hotel?.description}</Paragraph>
      <Text strong>Amenities: </Text>
      <Paragraph>{hotel?.amenities}</Paragraph>

      <Title level={3}>Rooms</Title>
      <Row gutter={[16, 16]}>
        {rooms.map(room => (
          <Col xs={24} sm={12} md={8} lg={6} key={room.id}>
            <Card
              title={`Room ${room.roomNumber}`}
              extra={
                <Button
                  type="primary"
                  icon={<CalendarOutlined />}
                  onClick={() => showModal(room)}
                >
                  Reserve
                </Button>
              }
            >
              <p>Type: {room.type}</p>
              <p>Price: ${room.price}</p>
              <p>Status: {room.availabilityStatus}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Reserve Room"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleReserve}>
          <Form.Item
            name="checkInDate"
            label="Check-In Date"
            rules={[{ required: true, message: 'Please select check-in date' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="checkOutDate"
            label="Check-Out Date"
            rules={[
              { required: true, message: 'Please select check-out date' },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
              Reserve
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
