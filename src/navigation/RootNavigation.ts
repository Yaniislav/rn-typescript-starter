import React from 'react';
import {
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

// functions below may be used in sagas or other non-component places

export const navigate = (route: string, params: ParamListBase): void => {
  navigationRef.current?.navigate(route, params);
};
