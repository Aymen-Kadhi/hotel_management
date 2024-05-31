'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { BarChartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ReportsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [reservations, setReservations] = useState<Model.Reservation[]>([])
  const [serviceConsumptions, setServiceConsumptions] = useState<
    Model.ServiceConsumption[]
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsData = await Api.Reservation.findMany({
          includes: ['user', 'room'],
        })
        const serviceConsumptionsData = await Api.ServiceConsumption.findMany({
          includes: ['reservation'],
        })
        setReservations(reservationsData)
        setServiceConsumptions(serviceConsumptionsData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Hotel Management Reports</Title>
      <Paragraph>
        Analyze booking trends, occupancy rates, and service consumption to
        optimize hotel operations.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title={
              <>
                <BarChartOutlined /> Room Reservations
              </>
            }
            bordered={false}
          >
            {reservations.length === 0 ? (
              <Text>No reservations found</Text>
            ) : (
              reservations?.map(reservation => (
                <Card
                  key={reservation.id}
                  type="inner"
                  title={`Reservation for Room ${reservation.room?.roomNumber}`}
                >
                  <Text>
                    Check-in Date:{' '}
                    {dayjs(reservation.checkInDate).format('YYYY-MM-DD')}
                  </Text>
                  <br />
                  <Text>
                    Check-out Date:{' '}
                    {dayjs(reservation.checkOutDate).format('YYYY-MM-DD')}
                  </Text>
                  <br />
                  <Text>Status: {reservation.status}</Text>
                  <br />
                  <Text>Guest: {reservation.user?.name}</Text>
                </Card>
              ))
            )}
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title={
              <>
                <ShoppingCartOutlined /> Service Consumption
              </>
            }
            bordered={false}
          >
            {serviceConsumptions.length === 0 ? (
              <Text>No service consumptions found</Text>
            ) : (
              serviceConsumptions?.map(service => (
                <Card
                  key={service.id}
                  type="inner"
                  title={`Service: ${service.serviceName}`}
                >
                  <Text>Cost: ${service.cost}</Text>
                  <br />
                  <Text>Reservation ID: {service.reservationId}</Text>
                  <br />
                  <Text>
                    Date: {dayjs(service.dateCreated).format('YYYY-MM-DD')}
                  </Text>
                </Card>
              ))
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
