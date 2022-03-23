import Person from '../../models/person.model';

export const createPersonStub = (id: number): Person => {
  return {
    name: `NameStub${id}`,
    birth_year: `BirthYearStub${id}`,
    eye_color: `EyeColorStub${id}`,
    gender: `GenderStub${id}`,
    hair_color: `HairColorStub${id}`,
    height: `HeightStub${id}`,
    mass: `MassStub${id}`,
    skin_color: `SkinColorStub${id}`,
    homeworld: `HomeworldStub${id}`,
    films: [`${id}https://swapi.dev/api/films/1/`, `${id}https://swapi.dev/api/films/2/`],
    vehicles: [`${id}https://swapi.dev/api/vehicles/1/`, `${id}https://swapi.dev/api/vehicles/2/`],
    species: [`${id}https://swapi.dev/api/species/1/`, `${id}https://swapi.dev/api/species/2/`],
    starships: [`${id}https://swapi.dev/api/starships/1/`, `${id}https://swapi.dev/api/starships/2/`],
    url: `UrlStub${id}`,
  }
}