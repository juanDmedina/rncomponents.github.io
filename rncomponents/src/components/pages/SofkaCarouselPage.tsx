import {StackScreenProps} from '@react-navigation/stack';
import React, {useState, useRef, useContext} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/themeContext';
import SofkaImage from '../atoms/SofkaImage';
import SofkaText from '../atoms/SofkaText';
import SofkaIcon from '../atoms/SofkaIcon';
import SofkaButton from '../atoms/SofkaButton';
import SofkaCorouselWithPagination from '../molecules/SofkaCorouselWithPagination';
import SofkaHeader from '../organisms/SofkaHeader';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Title 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Title 2',
    desc: 'Sequi quaerat magnam consequatur voluptas tempore assumenda aperiam unde illum molestiae voluptatum pariatur dolorem at vero',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Title 3',
    desc: 'consectetur asperiores amet id, fugiat cumque.',
    img: require('../../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SofkaCarouselPage = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn, fadeOut} = useAnimation();
  const isVisible = useRef(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <>
        <SofkaImage
          source={item.img}
          style={{
            width: 200,
            height: 250,
            resizeMode: 'center',
          }}
        />

        <SofkaText
          style={{
            ...styles.title,
            color: colors.primary,
          }}>
          {item.title}
        </SofkaText>

        <SofkaText
          style={{
            ...styles.subTitle,
            color: colors.text,
            justifyContent: 'center',
          }}>
          {item.desc}
        </SofkaText>
      </>
    );
  };

  const activeButton = (index: number) => {
    setActiveIndex(index);
    if (index === 2) {
      isVisible.current = true;
      fadeIn();
    }
    if (isVisible.current && index !== 2) {
      fadeOut();
    }
  };
  return (
    <>
      <SofkaHeader title="Corousel" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 20,
        }}>
        <SofkaCorouselWithPagination
          data={items}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={activeButton}
          pagination={{
            dotsLength: items.length,
            activeDotIndex: activeIndex,
            containerStyle: {backgroundColor: colors.background},
            dotStyle: {
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: colors.primary,
            },
            inactiveDotOpacity: 0.4,
            inactiveDotScale: 0.6,
          }}
        />

        <Animated.View
          style={{
            opacity,
          }}>
          <SofkaButton
            title="Go Home"
            color="#5856D6"
            OnPress={() => {
              if (isVisible.current) {
                navigation.replace('SofkaHomePage');
              }
            }}
            style={{
              width: 150,
              height: 50,
              marginHorizontal: 5,
              marginVertical: 5,
              borderRadius: 20,
              borderColor: colors.border,
              backgroundColor: '#5856D6',
            }}
            accessoryRight={
              <SofkaIcon
                name="chevron-forward-outline"
                color="white"
                size={15}
              />
            }
          />
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
