import React, { FC } from 'react';
import Person from '../../../models/person.model';

export type PersonInfoProps = Pick<
  Person,
  'birth_year' | 'gender' | 'height' | 'mass' | 'eye_color' | 'hair_color' | 'skin_color'
>;

const PersonInfo: FC<PersonInfoProps> = props => {
  return (
    <section>
      <h2>Info:</h2>
      <div>
        {Object.keys(props).map(key => {
          if (key !== 'children') {
            const value = props[key as keyof typeof props];
            return (
              <div key={`person-info-${key}`}>
                <h3>{key.replace('_', ' ')}</h3>
                <p>{value}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default PersonInfo;
