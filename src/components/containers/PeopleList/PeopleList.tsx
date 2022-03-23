import usePeopleList from './usePeopleList';
import PersonCard from '../../UI/PersonCard/PersonCard';
import { Fragment } from 'react';

const PeopleList = () => {
  const { data, search, loading, triggerRef, next, handleSearch } = usePeopleList();

  return (
    <div>
      <div>
        <input type="text" placeholder="Поиск" value={search} onChange={handleSearch} />
      </div>
      {!data ? (
        <div data-testid="no-data-loader">Loading...</div>
      ) : (
        <Fragment>
          <div>
            {data.length > 0
              ? data.map(person => (
                  <PersonCard
                    key={`person-card-${person.name}`}
                    name={person.name}
                    films={person.films}
                    url={person.url}
                  />
                ))
              : `There're no people for your request`}
          </div>
          <div>
            {next && !loading && <div data-testid="ref-element" ref={triggerRef} />}
            {next && <div data-testid="data-loader">Loader...</div>}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PeopleList;
