import React, {useRef} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import SofkaButton from '../atoms/SofkaButton';
import SofkaImage from '../atoms/SofkaImage';
import SofkaHeader from '../organisms/SofkaHeader';
import {ThemeContext} from '../../context/themeContext';
import {useContext} from 'react';

export const SofkaAnimationsPage = () => {
  const {opacity, position, fadeIn, fadeOut} = useAnimation();

  const pan = useRef(new Animated.ValueXY()).current;

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  const stylesAmimations = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: '#5856D6',
      opacity: 0.5,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <>
      <SofkaHeader title="Animations" />
      <View style={stylesAmimations.container}>
        <Animated.View
          style={{
            ...stylesAmimations.purpleBox,
            opacity,
            marginBottom: 20,
            transform: [
              {
                translateY: position,
              },
            ],
          }}
        />

        <View style={{marginBottom: 5, flexDirection: 'row'}}>
          <SofkaButton
            title="FadeIn"
            color="#5856D6"
            OnPress={() => {
              fadeIn(2000);
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
          />
          <SofkaButton
            title="FadeOut"
            color="#5856D6"
            OnPress={fadeOut}
            style={{
              width: 150,
              height: 50,
              marginHorizontal: 5,
              marginVertical: 5,
              borderRadius: 20,
              borderColor: colors.border,
              backgroundColor: '#5856D6',
            }}
          />
        </View>
      </View>
      <View style={stylesAmimations.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), stylesAmimations.purpleBox]}>
          <SofkaImage
            source={require('../../assets/slide.png')}
            style={{width: 50, height: 50}}
          />
        </Animated.View>
      </View>
    </>
  );
};
