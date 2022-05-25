import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { scale } from '../../utils/sizeScale';

interface IProps {
  indent: number
}

const IndentView = ({ indent} : IProps): ReactElement => {

  return (
    <View style={{ height: scale(indent) }} />
  );
};

export default IndentView;
