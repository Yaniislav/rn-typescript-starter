import {
  useQuery,
  useMutation,
  QueryConfig,
  QueryResult,
  MutationConfig,
  MutationResultPair,
} from 'react-query';
import { useDispatch } from 'react-redux';
import { didUpdateTokensAction } from 'store/actions';
import { get, makeRequestWithBody } from './api';

export const useApiQuery = <TResult, TError = any>(
  endpoint: string,
  query: Record<string, string>,
  queryConfig?: QueryConfig<TResult>,
): QueryResult<TResult, TError> => {
  const dispatch = useDispatch();

  return useQuery<TResult, TError>(
    endpoint,
    async () => {
      const { result, tokens } = await get(endpoint, query);

      if (tokens) {
        dispatch(didUpdateTokensAction(tokens));
      }

      return result;
    },
    queryConfig,
  );
};

export const useApiMutation = <TResult, TVariables, TError = any>(
  method: 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body: Record<string, string>,
  config: MutationConfig<TResult>,
): MutationResultPair<TResult, TError, TVariables, any> => {
  const dispatch = useDispatch();

  return useMutation<TResult, TError, TVariables>(async () => {
    const { result, tokens } = await makeRequestWithBody(
      endpoint,
      body,
      method,
    );

    if (tokens) {
      dispatch(didUpdateTokensAction(tokens));
    }

    return result;
  }, config);
};
