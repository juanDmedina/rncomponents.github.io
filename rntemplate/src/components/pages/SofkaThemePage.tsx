import React, {useContext} from 'react';
import {View} from 'react-native';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaButton from '../atoms/SofkaButton';
import {ThemeContext} from '../../context/themeContext';
import {styles} from '../../theme/AppTheme';

export const SofkaThemePage = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <SofkaHeader title="Theme" />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <SofkaButton
          title="Light"
          color="#5856D6"
          OnPress={setLightTheme}
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
          title="Dark"
          color="#5856D6"
          OnPress={setDarkTheme}
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
  );
};
