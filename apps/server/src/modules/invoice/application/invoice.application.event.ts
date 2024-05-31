export namespace InvoiceApplicationEvent {
  export namespace InvoiceCreated {
    export const key = 'invoice.application.invoice.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
