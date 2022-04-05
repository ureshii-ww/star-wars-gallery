import React, { FC } from 'react';
import Person from '../../../models/person.model';
import { Link } from 'react-router-dom';
import RouteNames from '../../../routes/route-names.enum';
import { styles } from './styles';

type PersonCardProps = Pick<Person, 'name' | 'films' | 'url'>;

const PersonCard: FC<PersonCardProps> = ({ name, films, url, ...rest }) => {
  const id = url.replace(/\D/g,'');
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.data}>
        <div className={styles.name}>
          <h1>{name}</h1>
        </div>
        <div>
          <h1 className={styles.sectionTitle}>Films:</h1>
          <div className={styles.linksList} data-testid="films-list">
            {!films || films.length > 0
              ? films.map(film => (
                <a className={styles.dataLink} key={`card-film-${film}`} href={film}>
                  {film}
                </a>
              ))
              : 'No Films'}
          </div>
        </div>
      </div>
      <div>
        <Link className={styles.detailsLink} to={`${RouteNames.PERSON_BASE}/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default PersonCard;
