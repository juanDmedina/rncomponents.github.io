import { ImageStyle, StyleProp } from 'react-native';
import { ImageSourcePropType } from 'react-native';

export interface IImage{
    source: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
}
