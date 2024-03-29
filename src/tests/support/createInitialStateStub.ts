import { RootState } from '../../store';

export default function createInitialStateStub(): RootState {
  return {
    people: {
      page: 1,
      search: '',
      count: 0,
      next: null,
      previous: null,
      loading: false,
      error: null,
      data: null,
    },
    person: {
      loading: false,
      data: null,
      error: null,
      id: null
    },
  };
}