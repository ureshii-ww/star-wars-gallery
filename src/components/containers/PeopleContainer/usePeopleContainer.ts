import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { useEffect } from 'react';
import { loadPeople, resetPeople } from '../../../store/reducers/people/actions';
import { peopleStateSelector } from '../../../store/selectors/people.selectors';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

const usePeopleContainer = () => {
  const dispatch = useAppDispatch();
  const { page, search, data, loading, next } = useAppSelector(peopleStateSelector);
  const { triggerRef, shouldLoad } = useInfiniteScroll();

  useEffect(() => {
    dispatch(resetPeople());
  }, []);

  useEffect(() => {
    if (shouldLoad && next) {
      dispatch(loadPeople(page + 1, search));
    }
  }, [shouldLoad]);

  return { search, data, loading, triggerRef, next };
};

export default usePeopleContainer;