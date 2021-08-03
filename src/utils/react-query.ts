import {
  useQuery,
  useMutation,
  UseMutationResult,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  UseMutationOptions,
} from 'react-query';
import { useDispatch } from 'react-redux';
import { didUpdateTokensAction } from 'store/actions';
import { get, ITokens, makeRequestWithBody } from './api';

interface IResultWithTokens<T> {
  result: T;
  tokens?: ITokens;
}

interface IGetQueryParams<TResult> {
  endpoint: string;
  query?: Record<string, any>;
  fetchFunction?: () => Promise<IResultWithTokens<TResult>>;
}

export const useApiQuery = <TResult, TError = any>(
  queryKey: QueryKey,
  { endpoint, query, fetchFunction }: IGetQueryParams<TResult>,
  queryConfig?: UseQueryOptions<TResult, TError, TResult>,
): UseQueryResult<TResult, TError> => {
  const dispatch = useDispatch();

  return useQuery<TResult, TError>(
    queryKey,
    async () => {
      const { result, tokens } = !fetchFunction
        ? await get(endpoint, query)
        : await fetchFunction();

      if (tokens) {
        dispatch(didUpdateTokensAction(tokens));
      }

      return result;
    },
    queryConfig,
  );
};

interface IMutationParams<TResult> {
  endpoint: string;
  body?: Record<string, any>;
  mutateFunction?: () => Promise<IResultWithTokens<TResult>>;
  method: 'POST' | 'PUT' | 'DELETE';
}

export const useApiMutation = <TResult, TVariables, TError = any>(
  params: IMutationParams<TResult>,
  config: UseMutationOptions<TResult, TError, TVariables>,
): UseMutationResult<TResult, TError, TVariables, any> => {
  const dispatch = useDispatch();

  const { endpoint, body = {}, mutateFunction, method } = params;

  return useMutation<TResult, TError, TVariables>(async () => {
    const { result, tokens } = !mutateFunction
      ? await makeRequestWithBody(endpoint, body, method)
      : await mutateFunction();

    if (tokens) {
      dispatch(didUpdateTokensAction(tokens));
    }

    return result;
  }, config);
};
