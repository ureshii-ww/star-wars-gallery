import React, { FC } from 'react';
import usePersonData from './usePersonData';
import PersonInfo from '../../UI/PersonInfo/PersonInfo';
import PersonDataCard from '../../UI/PersonDataCard/PersonDataCard';

interface PersonDataProps {
  id: string | undefined;
}

const PersonData: FC<PersonDataProps> = ({id}) => {
  const { data } = usePersonData(id);

  return (
    <div>
      {data ? (
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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PersonData;