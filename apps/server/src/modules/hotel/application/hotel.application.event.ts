export namespace HotelApplicationEvent {
  export namespace HotelCreated {
    export const key = 'hotel.application.hotel.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
