'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, List, Row, Col, Card, Spin } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function InvoicePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(true)
  const [reservations, setReservations] = useState<Model.Reservation[]>([])

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: ['reservations', 'reservations.serviceConsumptions'],
      })
        .then(user => {
          setReservations(user.reservations || [])
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch reservations', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const generateInvoice = async (reservationId: string) => {
    try {
      const reservation = reservations.find(res => res.id === reservationId)
      if (reservation) {
        const totalAmount =
          reservation.serviceConsumptions?.reduce(
            (sum, service) => sum + service.cost,
            0,
          ) || 0
        const issueDate = dayjs().format('YYYY-MM-DD')
        await Api.Invoice.createOneByReservationId(reservationId, {
          totalAmount,
          issueDate,
        })
        enqueueSnackbar('Invoice generated successfully', {
          variant: 'success',
        })
      }
    } catch (error) {
      enqueueSnackbar('Failed to generate invoice', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Generate Invoice</Title>
          <Text>
            As a guest, you can generate an invoice for the services consumed in
            the hotel to keep a record of your expenses.
          </Text>
          {loading ? (
            <Spin
              size="large"
              style={{ display: 'block', marginTop: '20px' }}
            />
          ) : (
            <List
              itemLayout="vertical"
              size="large"
              dataSource={reservations}
              renderItem={reservation => (
                <Card key={reservation.id} style={{ marginTop: '20px' }}>
                  <List.Item>
                    <List.Item.Meta
                      title={`Reservation from ${dayjs(reservation.checkInDate).format('YYYY-MM-DD')} to ${dayjs(reservation.checkOutDate).format('YYYY-MM-DD')}`}
                      description={`Status: ${reservation.status}`}
                    />
                    <List
                      dataSource={reservation.serviceConsumptions}
                      renderItem={service => (
                        <List.Item>
                          <Text>
                            {service.serviceName}: ${service.cost}
                          </Text>
                        </List.Item>
                      )}
                    />
                    <Button
                      type="primary"
                      icon={<FileTextOutlined />}
                      onClick={() => generateInvoice(reservation.id)}
                      style={{ marginTop: '10px' }}
                    >
                      Generate Invoice
                    </Button>
                  </List.Item>
                </Card>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
