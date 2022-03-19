import usePeopleContainer from './usePeopleContainer';
import PersonCard from '../../UI/PersonCard/PersonCard';

const PeopleContainer = () => {
  const { data, loading, page, search } = usePeopleContainer();

  return (
    <div>
      {loading || !data ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map(person => (
            <PersonCard name={person.name} films={person.films} url={person.url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleContainer;
