import React from 'react';
import {Text, Button} from '@ui-kitten/components';

import { IButton } from '../../interfaces/IButton';


const SofkaWithoutBorderButton = ({title, OnPress, color, accessoryLeft, accessoryRight, style}: IButton) => {

  return (
    <Button
    onPress={OnPress}
    activeOpacity={0.8}
    accessoryLeft={accessoryLeft}
    accessoryRight={accessoryRight}
    style={style}>
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

export default SofkaWithoutBorderButton;
