import React, { FC } from 'react';
import usePersonData from './usePersonData';
import PersonInfo from '../../UI/PersonInfo/PersonInfo';
import PersonDataCard from '../../UI/PersonDataCard/PersonDataCard';

interface PersonDataProps {
  id: string | undefined;
}

const PersonData: FC<PersonDataProps> = ({ id }) => {
  const { data, loading, error } = usePersonData(id);

  return (
    <div>
      {data && !loading && !error && (
        <div>
          <h1>{data.name}</h1>
          <PersonInfo
            birth_year={data.birth_year}
            eye_color={data.eye_color}
            gender={data.gender}
            hair_color={data.hair_color}
            height={data.height}
            mass={data.mass}
          />
          <PersonDataCard title="Species" dataArray={data.species} />
          <PersonDataCard title="Homeworld:" data={data.homeworld} />
          <PersonDataCard title="Films:" dataArray={data.films} />
          <PersonDataCard title="Starships:" dataArray={data.starships} />
          <PersonDataCard title="Vehicles" dataArray={data.vehicles} />
        </div>
      )}
      {((!data && !error) || loading) && <div>Loading...</div>}
      {!loading && error?.status === 404 && <div>Person with such id doesn't exist</div>}
    </div>
  );
};

export default PersonData;
