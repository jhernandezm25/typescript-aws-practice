export function getResponse(statusCode: number, message: string, data: any) {
    return {
      statusCode,
      message,
      data,
    };
  }

export interface response {
    statusCode: number,
    message: string,
    data: any
}