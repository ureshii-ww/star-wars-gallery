import React, { FC } from 'react';

interface PersonDataCardProps {
  title: string;
  data?: string;
  dataArray?: string[];
}

const PersonDataCard: FC<PersonDataCardProps> = (props) => {
  const {title, data, dataArray} = props;
  
  return (
    <section>
      <h2>{title}</h2>
      {data && <a href={data}>{data}</a>}
      {dataArray?.map(link =>
        <a key={link} href={link}>{link}</a>,
      )}
    </section>
  );
};

export default PersonDataCard;