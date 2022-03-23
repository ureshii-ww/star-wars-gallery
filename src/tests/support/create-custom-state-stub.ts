import { RootState } from '../../store';
import { PeopleState } from '../../store/reducers/people/types';
import { PersonState } from '../../store/reducers/person/types';

type RootStatePartial = {
  people: Partial<PeopleState>,
  person: Partial<PersonState>
}
type createCustomStateStubParams = Partial<RootStatePartial>

export const createCustomStateStub = (params: createCustomStateStubParams): RootState => {
  return {
    people: {
      page: params?.people?.page ?? 1,
      search: params?.people?.search ?? '',
      count: params?.people?.count ?? 0,
      next: params?.people?.next ?? null,
      previous: params?.people?.previous ?? null,
      loading: params?.people?.loading ?? false,
      error: params?.people?.error ?? null,
      data: params?.people?.data ?? null,
    },
    person: {
      loading: params?.person?.loading ?? false,
      data: params?.person?.data ?? null,
      error: params?.person?.error ?? null,
      id: params?.person?.id ?? null
    }
  }
}