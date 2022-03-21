import { renderHook } from '@testing-library/react-hooks';
import useInfiniteScroll from '../useInfiniteScroll';
import { act } from 'react-dom/test-utils';

describe('useInfiniteScroll', () => {
  beforeAll(() => {
    class IntersectionObserverStub {
      observe() {}

      disconnect() {}

      takeRecords() {}
    }

    jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, { virtual: true });
    window.IntersectionObserver = jest.requireMock('intersection-observer-mock');
    jest.spyOn(IntersectionObserver.prototype, 'observe').mockImplementation(() => {});
    jest.spyOn(IntersectionObserver.prototype, 'disconnect').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('starts observing if the ref element exists', () => {
    const { result } = renderHook(() => useInfiniteScroll());
    const element = document.createElement('div');
    act(() => {
      result.current.triggerRef(element);
    });
    expect(window.IntersectionObserver.prototype.observe).toBeCalledWith(element);
  });

  it(`doesn't start observing if the ref element doesn't exists`, () => {
    const { result } = renderHook(() => useInfiniteScroll());
    act(() => {
      result.current.triggerRef(null);
    });
    expect(window.IntersectionObserver.prototype.observe).not.toBeCalled();
  });

  it(`returns shouldLoad as false when the ref element isn't intersected`, () => {
    jest.spyOn(IntersectionObserver.prototype, 'takeRecords').mockReturnValue([
      {
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRect: {} as DOMRectReadOnly,
        isIntersecting: false,
        intersectionRatio: 0.5,
        rootBounds: null,
        target: {} as Element,
        time: 1,
      },
    ]);
    
    const { result } = renderHook(() => useInfiniteScroll());
    const element = document.createElement('div');
    act(() => {
      result.current.triggerRef(element);
    });
    expect(result.current.shouldLoad).toBe(false);
  });

  it(`returns shouldLoad as false when the ref element isn't intersected`, () => {
    jest.spyOn(IntersectionObserver.prototype, 'takeRecords').mockReturnValue([
      {
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRect: {} as DOMRectReadOnly,
        isIntersecting: true,
        intersectionRatio: 0.5,
        rootBounds: null,
        target: {} as Element,
        time: 1,
      },
    ]);

    const { result } = renderHook(() => useInfiniteScroll());
    const element = document.createElement('div');
    act(() => {
      result.current.triggerRef(element);
    });
    expect(result.current.shouldLoad).toBe(true);
  });

  it('disconnects an observer after unmounting', () => {
    const { result } = renderHook(() => useInfiniteScroll());
    const element = document.createElement('div');
    act(() => {
      result.current.triggerRef(element);
    });
    expect(window.IntersectionObserver.prototype.disconnect).toBeCalledTimes(1);
  });
});
