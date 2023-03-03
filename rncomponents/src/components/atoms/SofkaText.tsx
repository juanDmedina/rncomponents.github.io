import React from 'react';
import { StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Text} from '@ui-kitten/components';
type Props = {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
};
const   SofkaText = ({style, ...props}: Props) => {
  return (
    <Text style={StyleSheet.flatten([style])} {...props}>
      {props.children}
    </Text>
  );
};

export default SofkaText;
