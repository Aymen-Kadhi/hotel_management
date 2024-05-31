export namespace PerformanceReportApplicationEvent {
  export namespace PerformanceReportCreated {
    export const key = 'performanceReport.application.performanceReport.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
