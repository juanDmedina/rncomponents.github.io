import React from 'react';
import Carousel from 'react-native-snap-carousel';

interface Props{
    data : any[];
    renderItem: (item: any) => JSX.Element;
    sliderWidth: number;
    itemWidth: number;
    onSnapToItem: (index: number) => void;
}

const SofkaCarousel = ({data, renderItem, sliderWidth, itemWidth, onSnapToItem}: Props) => {
  return (
    <Carousel
    data={data}
    renderItem={({item}) => renderItem(item)}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    onSnapToItem={index => onSnapToItem(index)}
  />

  );
};

export default SofkaCarousel;
