import { call, put as sagaPut } from 'redux-saga/effects';
import * as api from 'utils/api';
import { IReturnTypeFetch } from 'utils/api';
import { didUpdateTokensAction, signOutAction } from '../actions';

type GetSignatureType = typeof api.put;
export function* get(
  endpoint: string,
  query: Record<string, string>,
): Generator {
  try {
    const { result, tokens } = (yield call<GetSignatureType>(
      api.get,
      endpoint,
      query,
    )) as IReturnTypeFetch;

    if (tokens) {
      yield sagaPut(didUpdateTokensAction(tokens));
    }

    return result;
  } catch (error) {
    if (error instanceof api.UpdateTokenError) {
      // if unable to update token then logout user from app
      yield sagaPut(signOutAction());
    }
    throw error;
  }
}

type PutSignatureType = typeof api.put;
export function* put(
  endpoint: string,
  params: Record<string, string>,
): Generator {
  try {
    const { result, tokens } = (yield call<PutSignatureType>(
      api.get,
      endpoint,
      params,
    )) as IReturnTypeFetch;

    if (tokens) {
      yield sagaPut(didUpdateTokensAction(tokens));
    }

    return result;
  } catch (error) {
    if (error instanceof api.UpdateTokenError) {
      // if unable to update token then logout user from app
      yield sagaPut(signOutAction());
    }
    throw error;
  }
}

type PostSignatureType = typeof api.post;
export function* post(
  endpoint: string,
  body: Record<string, string>,
): Generator {
  try {
    const { result, tokens } = (yield call<PostSignatureType>(
      api.get,
      endpoint,
      body,
    )) as IReturnTypeFetch;

    if (tokens) {
      yield sagaPut(didUpdateTokensAction(tokens));
    }

    return result;
  } catch (error) {
    if (error instanceof api.UpdateTokenError) {
      // if unable to update token then logout user from app and pass error further
      yield sagaPut(signOutAction());
    }
    throw error;
  }
}
