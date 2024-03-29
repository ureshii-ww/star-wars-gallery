import Person from '../../../models/person.model';
import { AppError } from '../../../models/app-error.type';
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
  SEARCH_PEOPLE = 'SEARCH_PEOPLE',
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
  payload: AppError;
}

export interface ResetPeopleAction {
  type: PeopleActionsEnum.RESET_PEOPLE;
}

export interface SearchPeopleAction {
  type: PeopleActionsEnum.SEARCH_PEOPLE;
  payload: string;
}

export type PeopleAction =
  | LoadPeopleAction
  | LoadPeopleSuccessAction
  | LoadPeopleFailureAction
  | ResetPeopleAction
  | SearchPeopleAction;
