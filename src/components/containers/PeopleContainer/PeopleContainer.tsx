import usePeopleContainer from './usePeopleContainer';
import PersonCard from '../../UI/PersonCard/PersonCard';
import { Fragment } from 'react';

const PeopleContainer = () => {
  const { data, search, loading, triggerRef, next } = usePeopleContainer();

  return (
    <div>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <div>
            {data.map(person => (
              <PersonCard key={`person-card-${person.name}`} name={person.name} films={person.films} url={person.url} />
            ))}
          </div>
          <div>
            {next && !loading && <div ref={triggerRef} />}
            {next && <div>Loader...</div>}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PeopleContainer;
