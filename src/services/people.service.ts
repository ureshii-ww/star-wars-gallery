import api from '../api';
import Person from '../models/person.model';

const PEOPLE_PREFIX = 'people/';

const peopleService = {
  getAll: () => {
    return api.get<Person[]>(PEOPLE_PREFIX);
  },
  getOne: (id: string) => {
    return api.get<Person>(`${PEOPLE_PREFIX}${id}`);
  },
};

export default peopleService;
