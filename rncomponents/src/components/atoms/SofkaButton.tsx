import React from 'react';
import {Text, Button} from '@ui-kitten/components';

import { IButton } from '../../interfaces/IButton';


const SofkaButton = ({title, OnPress, color, accessoryLeft, accessoryRight, style, size, status}: IButton) => {

  return (
    <Button
    onPress={OnPress}
    activeOpacity={0.8}
    accessoryLeft={accessoryLeft}
    accessoryRight={accessoryRight}
    style={style}
    size={size}
    status={status}
    >
    <Text
      style={{
        color,
        textAlign: 'center',
        fontSize: 22,
      }}>
      {title}
    </Text>
  </Button>
  );
};

export default SofkaButton;
