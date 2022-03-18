import { PeopleAction, PeopleActionsEnum, PeopleState } from './types';

export const initialState: PeopleState = {
  page: 1,
  search: '',
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
        page,
        search,
      };
    }
    
    case PeopleActionsEnum.LOAD_PEOPLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case PeopleActionsEnum.LOAD_PEOPLE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    
    default:
      return state;
  }
}
