import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { personStateSelector } from '../../../store/selectors/person.selectors';
import { useEffect } from 'react';
import { loadPerson } from '../../../store/reducers/person/actions';

const usePersonData = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(personStateSelector);

  useEffect(() => {
    if (id) {
      dispatch(loadPerson(id));
    }
  }, [id]);

  return {
    data,
    loading,
    error,
  };
};

export default usePersonData;
