import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {IIcon} from '../../interfaces/IIcon';

const SofkaIcon = ({name, color = '#5856D6', size = 25}: IIcon) => {
  return <Icon name={name} color={color} size={size} />;
};

export default SofkaIcon;
