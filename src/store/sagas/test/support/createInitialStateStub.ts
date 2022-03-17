import { RootState } from '../../../index';

export default function createInitialStateStub(): RootState {
  return {
    people: {
      page: 1,
      search: '',
      loading: false,
      error: null,
      data: null,
    },
    person: {
      loading: false,
      data: null,
      error: null,
    },
  };
}