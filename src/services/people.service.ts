import api from '../api';
import Person from '../models/person.model';
import DataList from '../models/data-list.model';

const PEOPLE_PREFIX = 'people/';

const peopleService = {
  getAll: (page: number, search: string) => {
    return api.get<DataList<Person>>(`${PEOPLE_PREFIX}?page=${page}&search=${search}`);
  },
  getOne: (id: string) => {
    return api.get<Person>(`${PEOPLE_PREFIX}${id}`);
  },
};

export default peopleService;
