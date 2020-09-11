import { refreshTokenEndpoint } from 'constants/endpoints';

const API_URL = '';

interface ITokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface IReturnTypeFetch {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any;
  tokens?: ITokens;
}

const tokens: ITokens = {};

export class UpdateTokenError extends Error {
  name = 'Failed token update';
  message = 'End of the session';
}

const fetchAsync = async (
  url: RequestInfo,
  requestOptions?: RequestInit,
): Promise<IReturnTypeFetch> => {
  // await response of fetch call
  const headers = {
    ...requestOptions?.headers,
    token: tokens.accessToken || '',
  };

  let response = await fetch(url, { ...requestOptions, headers });

  const result: IReturnTypeFetch = {};

  if (response && response.status === 403) {
    headers.token = tokens.refreshToken || '';
    const tokenResponse = await fetch(refreshTokenEndpoint, { headers });
    if (!tokenResponse.ok) {
      throw new UpdateTokenError();
    }

    const tokensData = await response.json();
    tokens.accessToken = tokensData.accessToken;
    tokens.refreshToken = tokensData.refreshToken;

    headers.token = tokens.accessToken || '';
    response = await fetch(url, { ...requestOptions, headers });
    result.tokens = tokens;
  }
  // only proceed once promise is resolved
  result.result = await response.json();

  return result;
};

export const makeRequestWithBody = async (
  endpoint: string,
  body: Record<string, string>,
  method: string,
): Promise<IReturnTypeFetch> => {
  const url = `${API_URL}/${endpoint}`;

  const data = await fetchAsync(url, { method, body });

  return data;
};

export const setAuthToken = (token: string): void => {
  tokens.accessToken = token;
};

export const resetAuthToken = (): void => {
  tokens.accessToken = undefined;
};

export const setRefreshToken = (token: string): void => {
  tokens.refreshToken = token;
};

export const resetRefreshToken = (): void => {
  tokens.refreshToken = undefined;
};

export const get = async (
  endpoint: string,
  query: Record<string, string>,
): Promise<IReturnTypeFetch> => {
  let url = `${API_URL}/${endpoint}`;

  if (query) {
    const entries = Object.entries(query);

    url += entries.reduce((acc: string, [key, val]: Array<string>) => {
      return `${acc}&${encodeURI(key)}=${encodeURI(val)}`;
    }, '?');
  }

  const data = await fetchAsync(url);

  return data;
};

export const post = async (
  endpoint: string,
  body: Record<string, string>,
): Promise<IReturnTypeFetch> => {
  return makeRequestWithBody(endpoint, body, 'POST');
};

export const put = async (
  endpoint: string,
  body: Record<string, string>,
): Promise<IReturnTypeFetch> => {
  return makeRequestWithBody(endpoint, body, 'PUT');
};
