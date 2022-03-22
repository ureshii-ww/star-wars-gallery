import Person from '../../models/person.model';

export const personStub: Person = {
  name: 'NameStub',
  birth_year: 'BirthYearStub',
  eye_color: 'EyeColorStub',
  gender: 'GenderStub',
  hair_color: 'HairColorStub',
  height: 'HeightStub',
  mass: 'MassStub',
  skin_color: 'SkinColorStub',
  homeworld: 'HomeworldStub',
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/'],
  vehicles: ['https://swapi.dev/api/vehicles/1/', 'https://swapi.dev/api/vehicles/2/'],
  species: ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/'],
  starships: ['https://swapi.dev/api/starships/1/', 'https://swapi.dev/api/starships/2/'],
  url: 'UrlStub',
}