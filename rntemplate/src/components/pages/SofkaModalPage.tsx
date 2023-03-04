import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaButton from '../atoms/SofkaButton';
import {styles} from '../../theme/AppTheme';
import {ThemeContext} from '../../context/themeContext';
import SofkaModal from '../atoms/SofkaModal';

export const SofkaModalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, justifyContent: 'center', alignItems: 'center'}}>
      <SofkaHeader title="Modal" />

      <SofkaButton
        title="Open Modal"
        color="#5856D6"
        OnPress={() => {
          setIsVisible(true);
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

        <SofkaModal
          animationType="fade"
          visible={isVisible}
          transparent={true}
          OnPress={() => {
            setIsVisible(false);
          }}
        />
    </View>
  );
};
