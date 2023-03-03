import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ILoading } from '../../interfaces/ILoading';


const SofkaLoading = ({size = 25, color}: ILoading) => {
  return (
    <ActivityIndicator size={size} color={color} />
  );
};

export default SofkaLoading;
