import Person from '../../../models/person.model';
import { AppError } from '../../../types/app-error.type';

export interface PersonState {
  loading: boolean;
  data: Person | null;
  error: AppError | null;
}

export enum PersonActionsEnum {
  LOAD_PERSON = 'LOAD_PERSON',
  LOAD_PERSON_SUCCESS = 'LOAD_PERSON_SUCCESS',
  LOAD_PERSON_FAILURE = 'LOAD_PERSON_FAILURE',
}

export interface LoadPersonAction {
  type: PersonActionsEnum.LOAD_PERSON;
  payload: {
    id: string;
  };
}

export interface LoadPersonSuccessAction {
  type: PersonActionsEnum.LOAD_PERSON_SUCCESS;
  payload: Person;
}

export interface LoadPersonFailureAction {
  type: PersonActionsEnum.LOAD_PERSON_FAILURE;
  payload: AppError | string;
}

export type PersonAction = LoadPersonAction | LoadPersonSuccessAction | LoadPersonFailureAction;