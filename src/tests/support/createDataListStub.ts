import DataList from '../../models/data-list.model';

export default function createDataListStub(results: any): DataList<any> {
  return {
    count: 100,
    next: '',
    previous: null,
    results
  }
}