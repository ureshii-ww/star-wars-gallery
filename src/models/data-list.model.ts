export default interface DataList<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}