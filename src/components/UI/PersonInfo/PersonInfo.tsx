import React, { FC } from 'react';
import Person from '../../../models/person.model';
import { styles } from './styles';

export type PersonInfoProps = Pick<
  Person,
  'birth_year' | 'gender' | 'height' | 'mass' | 'eye_color' | 'hair_color' | 'skin_color'
>;

const PersonInfo: FC<PersonInfoProps> = props => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.sectionsGrid}>
        {Object.keys(props).map(key => {
          if (key !== 'children') {
            const value = props[key as keyof typeof props];
            return (
              <div key={`person-info-${key}`}>
                <h3 className={styles.sectionTitle}>{key.replace('_', ' ')}</h3>
                <p className={styles.sectionValue}>{value}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default PersonInfo;
