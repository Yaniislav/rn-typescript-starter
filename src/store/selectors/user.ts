import { RootState } from 'store';

export const userNameSelector = (state: RootState): string =>
  `${state.user.firstName} ${state.user.lastName}`;
