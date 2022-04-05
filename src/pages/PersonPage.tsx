import React from 'react';
import PersonData from '../components/containers/PersonData/PersonData';
import { Link, useParams } from 'react-router-dom';
import RouteNames from '../routes/route-names.enum';

const PersonPage = () => {
  const {id} = useParams();
  const integerId = id ? parseInt(id) : 1;
  
  return (
    <div className="max-w-screen-sm min-h-personPage mx-auto p-8 bg-zinc-600">
      {id && (
        <div className="mb-6 flex justify-between">
          {integerId > 1 && <Link className="text-lg text-neutral-100 hover:underline" to={`${RouteNames.PERSON_BASE}/${integerId - 1}`}>←Prev person</Link>}
          <Link className="text-lg text-neutral-100 hover:underline" to={`${RouteNames.PERSON_BASE}/${integerId + 1}`}>Next person→</Link>
        </div>
      )}
      <PersonData id={id} />
    </div>
  );
};

export default PersonPage;