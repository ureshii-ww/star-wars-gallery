import Person from '../../../models/person.model';
import { AppError } from '../../../types/app-error.type';
import DataList from '../../../models/data-list.model';

export interface PeopleState {
  page: number;
  search: string;
  count: number;
  next: string | null;
  previous: string | null;
  loading: boolean;
  error: AppError | null;
  data: Person[] | null;
}

export enum PeopleActionsEnum {
  LOAD_PEOPLE = 'LOAD_PEOPLE',
  LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS',
  LOAD_PEOPLE_FAILURE = 'LOAD_PEOPLE_FAILURE',
  RESET_PEOPLE = 'RESET_PEOPLE',
}

export interface LoadPeopleAction {
  type: PeopleActionsEnum.LOAD_PEOPLE;
  payload: Pick<PeopleState, 'page' | 'search'>;
}

export interface LoadPeopleSuccessAction {
  type: PeopleActionsEnum.LOAD_PEOPLE_SUCCESS;
  payload: DataList<Person>;
}

export interface LoadPeopleFailureAction {
  type: PeopleActionsEnum.LOAD_PEOPLE_FAILURE;
  payload: AppError | string;
}

export interface ResetPeopleAction {
  type: PeopleActionsEnum.RESET_PEOPLE;
}

export type PeopleAction =
  | LoadPeopleAction
  | LoadPeopleSuccessAction
  | LoadPeopleFailureAction
  | ResetPeopleAction;
