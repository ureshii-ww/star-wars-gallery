import {
  LoadPeopleAction,
  LoadPeopleFailureAction,
  LoadPeopleSuccessAction,
  PeopleActionsEnum,
} from './types';
import { AppError } from '../../../types/app-error.type';
import Person from '../../../models/person.model';
import DataList from '../../../models/data-list.model';

export const loadPeople = (page: number, search: string): LoadPeopleAction => ({
  type: PeopleActionsEnum.LOAD_PEOPLE,
  payload: {
    page,
    search,
  },
});

export const loadPeopleSuccess = (data: DataList<Person>): LoadPeopleSuccessAction => ({
  type: PeopleActionsEnum.LOAD_PEOPLE_SUCCESS,
  payload: data,
});

export const loadPeopleFailure = (error: AppError): LoadPeopleFailureAction => ({
  type: PeopleActionsEnum.LOAD_PEOPLE_FAILURE,
  payload: error,
});
