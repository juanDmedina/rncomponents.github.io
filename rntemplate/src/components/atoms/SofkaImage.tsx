import React from 'react';
import { IImage } from '../../interfaces/IImage';
import { Image } from 'react-native';

const SofkaImage = ({source, style}: IImage) => {
  return (
    <Image source={source} style={style} />
  );
};

export default SofkaImage;
