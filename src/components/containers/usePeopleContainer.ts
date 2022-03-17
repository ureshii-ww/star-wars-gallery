import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { useEffect } from 'react';
import { loadPeople } from '../../store/reducers/people/actions';

const usePeopleContainer = () => {
  const dispatch = useAppDispatch();
  const {page, search, data, loading} = useAppSelector(state => state.people);
  useEffect(() => {
    dispatch(loadPeople(page, search));
  },[])
  
  return {page, search, data, loading}
}

export default usePeopleContainer;