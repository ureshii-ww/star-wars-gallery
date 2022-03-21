import React, { FC } from 'react';
import Person from '../../../models/person.model';
import { Link } from 'react-router-dom';
import RouteNames from '../../../routes/route-names.enum';

type PersonCardProps = Pick<Person, 'name' | 'films' | 'url'>;

const PersonCard: FC<PersonCardProps> = ({ name, films, url, ...rest }) => {
  const id = url.replace(/\D/g,'');
  
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h1>Films:</h1>
        <div data-testid="films-list">
          {!films || films.length > 0
            ? films.map(film => (
                <a key={`card-film-${film}`} href={film}>
                  {film}
                </a>
              ))
            : 'No Films'}
        </div>
      </div>
      <div>
        <Link to={`${RouteNames.PERSON_BASE}/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default PersonCard;
