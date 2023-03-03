/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaCard from '../atoms/SofkaCard';
import {StyleSheet, Text} from 'react-native';
import SofkaText from '../atoms/SofkaText';
import SofkaButton from '../atoms/SofkaButton';
import {ThemeContext} from '../../context/themeContext';
import {View} from 'react-native';

const SofkaCardPage = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const stylesCard = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: 300,
      height: 260,
      margin: 2,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
    footerColor: {
      borderColor: colors.border,
      backgroundColor: '#5856D6',
    },
  });
  const Header = () => (
    <>
      <SofkaText category="h6">Maldives</SofkaText>
      <SofkaText category="s1">By Wikipedia</SofkaText>
    </>
  );

  const Footer = () => (
    <>
      <SofkaButton
        title="CANCEL"
        style={stylesCard.footerControl}
        size="small"
        status="basic"
        OnPress={() => {}}
      />
      <SofkaButton
        title="ACCEPT"
        style={[stylesCard.footerControl, stylesCard.footerColor]}
        size="small"
        status="basic"
        OnPress={() => {}}
        color="#5856D6"
      />
    </>
  );

  const Body = (
    <Text>
      The Maldives, officially the Republic of Maldives, is a small country in
      South Asia, located in the Arabian Sea of the Indian Ocean. It lies
      southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the
      Asian continent
    </Text>
  );

  return (
    <>
      <SofkaHeader title="Card" />
      <View style={stylesCard.topContainer}>
        <SofkaCard
          children={Body}
          style={stylesCard.card}
          header={Header}
          footer={Footer}
        />
      </View>
    </>
  );
};
export default SofkaCardPage;
