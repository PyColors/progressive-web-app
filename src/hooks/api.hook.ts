import { ThunkCreator } from 'easy-peasy';
import { useCallback } from 'react';

export const useFetch = (fetch: ThunkCreator<void, any>): (() => void) => {
  const fetchCallback = useCallback(() => {
    fetch();
  }, [fetch]);

  return fetchCallback;
};

export const useFetchByParam = (fetchById: ThunkCreator<any, any>): ((param: any) => void) => {
  const fetchCallback = useCallback(
    param => {
      fetchById(param);
    },
    [fetchById],
  );

  return fetchCallback;
};
