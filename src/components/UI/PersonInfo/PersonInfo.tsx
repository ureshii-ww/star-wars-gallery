import React, { FC } from 'react';
import Person from '../../../models/person.model';

type PersonInfoProps = Pick<Person, 'birth_year' | 'gender' | 'height' | 'mass' | 'eye_color' | 'hair_color'>

const PersonInfo: FC<PersonInfoProps> = (props) => {
  const {birth_year, gender, eye_color, hair_color, height, mass} = props;
  
  return (
    <section>
      <h2>Info:</h2>
      <div>
        <div>
          <h3>Birth year:</h3>
          <p>{birth_year}</p>
        </div>
        <div>
          <h3>Gender:</h3>
          <p>{gender}</p>
        </div>
        <div>
          <h3>Height:</h3>
          <p>{height}</p>
        </div>
        <div>
          <h3>Mass:</h3>
          <p>{mass}</p>
        </div>
        <div>
          <h3>Eye color:</h3>
          <p>{eye_color}</p>
        </div>
        <div>
          <h3>Hair color:</h3>
          <p>{hair_color}</p>
        </div>
      </div>
    </section>
  );
};

export default PersonInfo;