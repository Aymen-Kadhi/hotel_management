export namespace HolidayApplicationEvent {
  export namespace HolidayCreated {
    export const key = 'holiday.application.holiday.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
