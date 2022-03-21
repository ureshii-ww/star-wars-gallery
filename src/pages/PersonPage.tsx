import React from 'react';
import PersonData from '../components/containers/PersonData/PersonData';
import { Link, useParams } from 'react-router-dom';
import RouteNames from '../routes/route-names.enum';

const PersonPage = () => {
  const {id} = useParams();
  const integerId = id ? parseInt(id) : 1;
  
  return (
    <div>
      {/*@TODO избавиться от key*/}
      <PersonData key={integerId} id={id} />
      {id && (
        <div>
          {integerId > 1 && <Link to={`${RouteNames.PERSON_BASE}/${integerId - 1}`}>←Prev person</Link>}
          <Link to={`${RouteNames.PERSON_BASE}/${integerId + 1}`}>Next person→</Link>
        </div>
      )}
    </div>
  );
};

export default PersonPage;