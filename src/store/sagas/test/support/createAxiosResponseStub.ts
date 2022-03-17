import { AxiosResponse } from 'axios';

export default function createAxiosResponseStub(data: any): AxiosResponse {
  return {
    data,
    config: {},
    status: 200,
    statusText: 'OK',
    headers: {},
  };
}