import { PeopleAction, PeopleActionsEnum, PeopleState } from './types';

export const initialState: PeopleState = {
  page: 1,
  search: '',
  count: 0,
  next: null,
  previous: null,
  loading: false,
  error: null,
  data: null,
};

export default function peopleReducer(state = initialState, action: PeopleAction) {
  switch (action.type) {
    case PeopleActionsEnum.LOAD_PEOPLE: {
      const { page, search } = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
        page,
        search,
      };
    }

    case PeopleActionsEnum.LOAD_PEOPLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        data: state.data ? [...state.data, ...action.payload.results] : action.payload.results,
      };
    }

    case PeopleActionsEnum.LOAD_PEOPLE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case PeopleActionsEnum.SEARCH_PEOPLE: {
      return {
        ...state,
        search: action.payload,
        data: null,
      };
    }

    case PeopleActionsEnum.RESET_PEOPLE:
      return initialState;

    default:
      return state;
  }
}
