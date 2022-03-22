import {
  LoadPeopleAction,
  LoadPeopleFailureAction,
  LoadPeopleSuccessAction,
  PeopleActionsEnum,
  ResetPeopleAction,
  SearchPeopleAction,
} from './types';
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

export const loadPeopleFailure = (status: number, message: string): LoadPeopleFailureAction => ({
  type: PeopleActionsEnum.LOAD_PEOPLE_FAILURE,
  payload: {
    message,
    status
  },
});

export const searchPeople = (search: string): SearchPeopleAction => ({
  type: PeopleActionsEnum.SEARCH_PEOPLE,
  payload: search,
});

export const resetPeople = (): ResetPeopleAction => ({
  type: PeopleActionsEnum.RESET_PEOPLE,
});
