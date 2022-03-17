import api from '../api';
import Person from '../models/person.model';

const PERSON_PREFIX = 'people';

const personService = {
  getOne: (id: string) => {
    return api.get<Person>(`${PERSON_PREFIX}/${id}`);
  },
}

export default personService;