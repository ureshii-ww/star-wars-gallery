import React from 'react';
import { useParams } from 'react-router-dom';

const PersonPage = () => {
  const {id} = useParams()
  
  return (
    <div>
      {id}
    </div>
  );
};

export default PersonPage;