import {
  LoadPersonAction,
  LoadPersonFailureAction,
  LoadPersonSuccessAction,
  PersonActionsEnum,
} from './types';
import Person from '../../../models/person.model';
import { AppError } from '../../../types/app-error.type';

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

export const loadPersonFailure = (error: AppError): LoadPersonFailureAction => ({
  type: PersonActionsEnum.LOAD_PERSON_FAILURE,
  payload: error,
});
