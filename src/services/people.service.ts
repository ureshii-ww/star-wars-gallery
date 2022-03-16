import api from '../api';

const PEOPLE_PREFIX = 'people/';

const peopleService = {
  getAll: () => {
    return api.get(PEOPLE_PREFIX);
  },
  getOne: (id: string) => {
    return api.get(`${PEOPLE_PREFIX}${id}`);
  },
};

export default peopleService;
