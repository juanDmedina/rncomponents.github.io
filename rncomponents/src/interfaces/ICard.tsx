import {RenderProp} from '@ui-kitten/components/devsupport';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';

export interface ICard {
  children: JSX.Element | JSX.Element[]
  style: StyleProp<ViewStyle>;
  header?: RenderProp<ViewProps>;
  footer?: RenderProp<ViewProps>;
}
