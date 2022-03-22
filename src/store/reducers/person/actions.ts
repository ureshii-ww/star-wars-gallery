import {
  LoadPersonAction,
  LoadPersonFailureAction,
  LoadPersonSuccessAction,
  PersonActionsEnum,
} from './types';
import Person from '../../../models/person.model';

export const loadPerson = (id: string): LoadPersonAction => ({
  type: PersonActionsEnum.LOAD_PERSON,
  payload: {
    id,
  },
});

export const loadPersonSuccess = (person: Person): LoadPersonSuccessAction => ({
  type: PersonActionsEnum.LOAD_PERSON_SUCCESS,
  payload: person,
});

export const loadPersonFailure = (status: number, message: string): LoadPersonFailureAction => ({
  type: PersonActionsEnum.LOAD_PERSON_FAILURE,
  payload: {
    status,
    message
  },
});
