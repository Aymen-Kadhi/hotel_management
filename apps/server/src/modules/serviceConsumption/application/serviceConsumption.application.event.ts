export namespace ServiceConsumptionApplicationEvent {
  export namespace ServiceConsumptionCreated {
    export const key =
      'serviceConsumption.application.serviceConsumption.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
