import usePeopleList from './usePeopleList';
import PersonCard from '../../UI/PersonCard/PersonCard';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { styles } from './styles';

const PeopleList = () => {
  const { data, search, loading, triggerRef, next, handleSearch } = usePeopleList();

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {!data ? (
        <div className={styles.mainLoaderContainer} data-testid="no-data-loader">
          <Icon className={styles.mainLoader} icon="lucide:loader-2" />
        </div>
      ) : (
        <Fragment>
          <div className={data.length > 0 ? styles.cardsList : styles.cardsListEmpty}>
            {data.length > 0 ? (
              data.map(person => (
                <PersonCard
                  key={`person-card-${person.name}`}
                  name={person.name}
                  films={person.films}
                  url={person.url}
                />
              ))
            ) : (
              <div className={styles.noPeople}>There're no people for your request</div>
            )}
          </div>
          <div>
            {next && !loading && <div data-testid="ref-element" ref={triggerRef} />}
            {next && (
              <div className={styles.peopleLoaderContainer} data-testid="data-loader">
                <Icon className={styles.peopleLoaderSpinner} icon="lucide:loader-2" />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PeopleList;
