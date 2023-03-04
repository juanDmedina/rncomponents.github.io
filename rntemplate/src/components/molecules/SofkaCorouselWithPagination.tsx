import React from 'react';
import SofkaCarousel from '../atoms/SofkaCarousel';
import {ICarousel} from '../../interfaces/ICarousel';
import SofkaCarouselPagination from '../atoms/SofkaCarouselPagination';

const SofkaCorouselWithPagination = (
  {data, renderItem, sliderWidth, itemWidth, onSnapToItem, pagination}: ICarousel,
) => {
  return (
    <>
      <SofkaCarousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={onSnapToItem}
      />
      <SofkaCarouselPagination
        dotsLength={pagination.dotsLength}
        activeDotIndex={pagination.activeDotIndex}
        containerStyle={pagination.containerStyle}
        dotStyle={pagination.dotStyle}
        inactiveDotOpacity={pagination.inactiveDotOpacity}
        inactiveDotScale={pagination.inactiveDotScale}
      />
    </>
  );
};

export default SofkaCorouselWithPagination;
