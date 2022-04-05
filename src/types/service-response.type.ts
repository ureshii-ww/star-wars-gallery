export type ServiceResponse<T extends (...args: any) => any> = Awaited<
  ReturnType<T extends (...args: any) => infer R ? R : any>
>;