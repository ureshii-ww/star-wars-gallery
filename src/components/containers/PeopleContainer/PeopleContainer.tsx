import usePeopleContainer from './usePeopleContainer';

const PeopleContainer = () => {
  const {data, loading, page, search} = usePeopleContainer();
  
  return (
    <div>
      {loading ?
        <div>
          Loading...
        </div>
        :
        <div>
          People Container
        </div>}
    </div>
  );
};

export default PeopleContainer;