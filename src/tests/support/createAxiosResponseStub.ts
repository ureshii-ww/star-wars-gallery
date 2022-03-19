import { AxiosResponse } from 'axios';

export default function createAxiosResponseStub<T>(data: T): AxiosResponse<T> {
  return {
    data,
    config: {},
    status: 200,
    statusText: 'OK',
    headers: {},
  };
}