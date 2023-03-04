import { StyleProp, ViewStyle } from 'react-native';

export interface ICarousel {
    data : any[];
    renderItem: (item: any) => JSX.Element;
    sliderWidth: number;
    itemWidth: number;
    onSnapToItem: (index: number) => void;
    pagination : IPaginationCarousel;
  }

  export interface IPaginationCarousel{
    dotsLength: number;
    activeDotIndex: number;
    containerStyle: StyleProp<ViewStyle>;
    dotStyle:  StyleProp<ViewStyle>;
    inactiveDotOpacity: number;
    inactiveDotScale: number;
}
