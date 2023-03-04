import {RenderProp} from '@ui-kitten/components/devsupport';
import {TransformsStyle} from 'react-native';
import {StyleProp} from 'react-native';
import {ShadowStyleIOS} from 'react-native';
import {FlexStyle} from 'react-native';
import {ColorValue, ImageProps} from 'react-native';

export interface IButton {
  title: string;
  OnPress: () => void;
  color?: ColorValue;
  accessoryLeft?: RenderProp<Partial<ImageProps>> | undefined;
  accessoryRight?: RenderProp<Partial<ImageProps>> | undefined;
  style: StyleProp<ButtonStyle>;
  size?: string;
  status?: string;
}

export interface ButtonStyle
  extends FlexStyle,
    ShadowStyleIOS,
    TransformsStyle {
  width?: number | undefined;
  height?: number | undefined;
  marginHorizontal?: number | undefined;
  marginTop?: number | undefined;
  marginVertical?: number | undefined;
  borderRadius?: number | undefined;
  borderColor?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  borderBottomLeftRadius?: number | undefined;
  borderBottomRightRadius?: number | undefined;
  opacity?: number | undefined;
}
