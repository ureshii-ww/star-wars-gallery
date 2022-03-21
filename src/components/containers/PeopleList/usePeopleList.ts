import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { ChangeEvent, useEffect } from 'react';
import { loadPeople, resetPeople, searchPeople } from '../../../store/reducers/people/actions';
import { peopleStateSelector } from '../../../store/selectors/people.selectors';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

const usePeopleList = () => {
  const dispatch = useAppDispatch();
  const { page, search, data, loading, next } = useAppSelector(peopleStateSelector);
  const { triggerRef, shouldLoad } = useInfiniteScroll();
  
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchPeople(e.target.value));
  }

  useEffect(() => {
    dispatch(resetPeople());
  }, []);

  useEffect(() => {
    if (shouldLoad && next) {
      dispatch(loadPeople(page + 1, search));
    }
  }, [shouldLoad]);

  return { search, data, loading, triggerRef, next, handleSearch };
};

export default usePeopleList;