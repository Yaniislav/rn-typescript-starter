import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { IConfigState } from 'interfaces/config';

export const configSelector = (state: RootState): IConfigState => state.config;
