import Person from '../../../models/person.model';
import { AppError } from '../../../types/app-error';
import { Action } from 'redux';

export interface PeopleState {
  page: number;
  search: string;
  loading: boolean;
  error: AppError | null;
  data: Person[] | null;
}

export enum PeopleActionsEnum {
  LOAD_PEOPLE = 'LOAD_PEOPLE',
  LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS',
  LOAD_PEOPLE_FAILURE = 'LOAD_PEOPLE_FAILURE',
}

export interface LoadPeopleAction extends Action{
  type: PeopleActionsEnum.LOAD_PEOPLE;
  payload: Pick<PeopleState, 'page' | 'search'>;
}

export interface LoadPeopleSuccessAction {
  type: PeopleActionsEnum.LOAD_PEOPLE_SUCCESS;
  payload: Person[];
}

export interface LoadPeopleFailureAction {
  type: PeopleActionsEnum.LOAD_PEOPLE_FAILURE;
  payload: AppError;
}

export type PeopleAction = LoadPeopleAction | LoadPeopleSuccessAction | LoadPeopleFailureAction;
