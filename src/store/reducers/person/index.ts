import { PersonAction, PersonActionsEnum, PersonState } from './types';

export const initialState: PersonState = {
  loading: false,
  data: null,
  error: null,
  id: null,
};

export default function personReducer(state = initialState, action: PersonAction) {
  switch (action.type) {
    case PersonActionsEnum.LOAD_PERSON: {
      return {
        ...state,
        loading: true,
        id: action.payload.id
      };
    }

    case PersonActionsEnum.LOAD_PERSON_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case PersonActionsEnum.LOAD_PERSON_FAILURE: {
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
