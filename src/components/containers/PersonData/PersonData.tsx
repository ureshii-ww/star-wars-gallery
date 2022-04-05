import React, { FC } from 'react';
import usePersonData from './usePersonData';
import PersonInfo from '../../UI/PersonInfo/PersonInfo';
import PersonDataCard from '../../UI/PersonDataCard/PersonDataCard';
import { styles } from './styles';

interface PersonDataProps {
  id: string | undefined;
}

const PersonData: FC<PersonDataProps> = ({ id }) => {
  const { data, loading, error } = usePersonData(id);

  return (
    <div>
      {data && !error && (
        <div>
          <h1 className={styles.name}>{data.name}</h1>
          <PersonInfo
            birth_year={data.birth_year}
            eye_color={data.eye_color}
            gender={data.gender}
            hair_color={data.hair_color}
            height={data.height}
            mass={data.mass}
            skin_color={data.skin_color}
          />
          <div className={styles.dataCards}>
            <PersonDataCard title="Species" dataArray={data.species} />
            <PersonDataCard title="Homeworld:" data={data.homeworld} />
            <PersonDataCard title="Films:" dataArray={data.films} />
            <PersonDataCard title="Starships:" dataArray={data.starships} />
            <PersonDataCard title="Vehicles" dataArray={data.vehicles} />
          </div>
        </div>
      )}
      {!loading && error?.status === 404 && (
        <div className={styles.noPerson}>Person with such id doesn't exist</div>
      )}
    </div>
  );
};

export default PersonData;
