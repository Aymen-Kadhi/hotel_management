export namespace StoreItemApplicationEvent {
  export namespace StoreItemCreated {
    export const key = 'storeItem.application.storeItem.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
