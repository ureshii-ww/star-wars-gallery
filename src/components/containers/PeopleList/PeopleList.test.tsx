import createInitialStateStub from '../../../tests/support/createInitialStateStub';
import { act } from '@testing-library/react';
import PeopleList from './PeopleList';
import '@testing-library/jest-dom';
import * as useInfiniteScrollModule from '../../../hooks/useInfiniteScroll';
import { loadPeople, resetPeople, searchPeople } from '../../../store/reducers/people/actions';
import { createPersonStub } from '../../../tests/support/createPersonStub';
import RouteNames from '../../../routes/route-names.enum';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../../../tests/support/render-with-router-and-redux';
import { mockCustomStore } from '../../../tests/support/mock-custom-store';
import { createCustomStateStub } from '../../../tests/support/create-custom-state-stub';

describe('PeopleList', () => {
  let mockUseInfiniteScroll: jest.SpyInstance<
    { triggerRef: (element: Element | null) => void; shouldLoad: boolean },
    []
  >;
  beforeEach(() => {
    mockUseInfiniteScroll = jest.spyOn(useInfiniteScrollModule, 'useInfiniteScroll');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initial render', () => {
    const stateStub = createInitialStateStub();
    const store = mockCustomStore(stateStub);
    mockUseInfiniteScroll.mockReturnValue({ triggerRef: jest.fn(), shouldLoad: false });
    const { getByTestId } = renderWithRouterAndRedux(<PeopleList />, store);

    expect(getByTestId('no-data-loader')).toBeVisible();
    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(resetPeople());
  });

  describe('with loaded data', () => {
    it('renders people data', () => {
      const stateStub = createCustomStateStub({
        people: {
          data: [createPersonStub(1), createPersonStub(2)],
        },
      });
      const store = mockCustomStore(stateStub);
      mockUseInfiniteScroll.mockReturnValue({ triggerRef: jest.fn(), shouldLoad: false });
      const { getAllByText, getByText } = renderWithRouterAndRedux(<PeopleList />, store);

      const detailsLinks = getAllByText('Details');
      stateStub.people?.data?.forEach(person => {
        expect(getByText(person.name)).toBeVisible();
        
        person.films.forEach(film => {
          expect(getByText(film)).toBeVisible();
        });
        
        const id = person.url.replace(/\D/g, '');
        const ifHaveHref = (element: HTMLElement) =>
          element.getAttribute('href') === `${RouteNames.PERSON_BASE}/${id}`;
        const index = detailsLinks.findIndex(ifHaveHref);
        
        expect(index).not.toBe(-1);
        expect(detailsLinks[index]).toBeVisible();
      });
    });

    it('renders search field and starts search', () => {
      const stateStub = createCustomStateStub({
        people: {
          data: [createPersonStub(1), createPersonStub(2)],
        },
      });
      const store = mockCustomStore(stateStub);
      mockUseInfiniteScroll.mockReturnValue({ triggerRef: jest.fn(), shouldLoad: false });
      const { getByPlaceholderText } = renderWithRouterAndRedux(<PeopleList />, store);

      const searchField = getByPlaceholderText('Поиск');
      expect(store.dispatch).toBeCalledWith(resetPeople());
      expect(searchField).toBeVisible();
      expect(searchField).toHaveValue('');
      act(() => {
        userEvent.type(searchField, 's');
      });
      expect(store.dispatch).toHaveBeenCalledWith(searchPeople('s'));
    });

    it('renders triggerRef element', () => {
      const stateStub = createCustomStateStub({
        people: {
          next: 'next',
          data: [createPersonStub(1), createPersonStub(2)],
        },
      });
      const store = mockCustomStore(stateStub);
      mockUseInfiniteScroll.mockReturnValue({ triggerRef: jest.fn(), shouldLoad: false });
      const { getByTestId } = renderWithRouterAndRedux(<PeopleList />, store);

      expect(getByTestId('ref-element')).toBeVisible();
    });

    it('renders data-loader element and starts loading', () => {
      const stateStub = createCustomStateStub({
        people: {
          next: 'next',
          data: [createPersonStub(1), createPersonStub(2)],
        },
      });
      const store = mockCustomStore(stateStub);
      mockUseInfiniteScroll.mockReturnValue({ triggerRef: jest.fn(), shouldLoad: true });
      const { getByTestId } = renderWithRouterAndRedux(<PeopleList />, store);

      expect(getByTestId('data-loader')).toBeVisible();
      expect(store.dispatch).toHaveBeenCalledWith(resetPeople());
      expect(store.dispatch).toHaveBeenCalledWith(loadPeople(2, ''));
    });
  });
});
