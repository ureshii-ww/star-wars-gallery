import React, { FC } from 'react';

export interface PersonDataCardProps {
  title: string;
  data?: string;
  dataArray?: string[];
}

const PersonDataCard: FC<PersonDataCardProps> = props => {
  const { title, data, dataArray } = props;

  return (
    <section>
      <h2>{title}</h2>
      {data && <a href={data}>{data}</a>}
      {dataArray &&
        dataArray.length > 0 &&
        dataArray.map(link => (
          <a key={link} href={link}>
            {link}
          </a>
        ))}
      {dataArray?.length === 0 && <div>No data</div>}
      {!data && !dataArray && <div>No data</div>}
    </section>
  );
};

export default PersonDataCard;
