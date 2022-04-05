import React, { FC } from 'react';
import { styles } from './styles';

export interface PersonDataCardProps {
  title: string;
  data?: string;
  dataArray?: string[];
}

const PersonDataCard: FC<PersonDataCardProps> = props => {
  const { title, data, dataArray } = props;

  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.title}>{title}</h2>
      {data && <a className={styles.link} href={data}>{data}</a>}
      {dataArray && dataArray.length > 0 && (
        <div className={styles.linksList}>
          {dataArray.map(link => (
            <a className={styles.link} key={link} href={link}>
              {link}
            </a>
          ))}
        </div>
      )}
      {dataArray?.length === 0 && <div>No data</div>}
      {!data && !dataArray && <div>No data</div>}
    </section>
  );
};

export default PersonDataCard;
