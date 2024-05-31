'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [hotels, setHotels] = useState<Model.Hotel[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotelsFound = await Api.Hotel.findMany()
        setHotels(hotelsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch hotels', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchHotels()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Title level={2} style={{ textAlign: 'center' }}>
        Available Hotels
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        As a guest, you can view a list of available hotels so that you can
        choose where to stay.
      </Paragraph>
      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {hotels?.map(hotel => (
            <Col key={hotel.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={hotel.name}
                bordered={false}
                hoverable
                onClick={() => router.push(`/hotels/${hotel.id}`)}
              >
                <Paragraph>{hotel.address}</Paragraph>
                <Paragraph>{hotel.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
