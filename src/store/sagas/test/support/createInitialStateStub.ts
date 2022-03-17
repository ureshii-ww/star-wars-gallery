import { RootState } from '../../../index';

export default function createInitialStateStub(): RootState {
  return {
    people: {
      page: 1,
      search: '',
      loading: false,
      error: null,
      data: null
    }
  }
}