import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import SofkaHeader from '../organisms/SofkaHeader';
import {styles} from '../../theme/AppTheme';
import SofkaButton from '../atoms/SofkaButton';
import {ThemeContext} from '../../context/themeContext';
import {showAlert} from '../atoms/SofkaAlert';
import SofkaText from '../atoms/SofkaText';
import {usePrompt} from '../../hooks/usePrompt';
import {IPrompt} from '../../interfaces/IPrompt';

const initialState: IPrompt = {
  title: 'Enter Password',
  message: 'Enter your password',
  cancelText: 'Cancel',
  okText: 'OK',
};

export const SofkaAlertsPage = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {value, showPrompt} = usePrompt(initialState);

  return (
    <View style={styles.globalMargin}>
      <SofkaHeader title="Alerts" />

      <SofkaButton
        title="Show Alert"
        color="#5856D6"
        OnPress={() => {
          showAlert({
            title: 'Alerts Tittle',
            message: 'Alert Messages',
            cancelText: 'Cancel',
            okText: 'Ok',
          });
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

      <View style={{height: 10}} />

      <SofkaButton
        title="Show Prompt"
        color="#5856D6"
        OnPress={showPrompt}
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

      {value && (
        <SofkaText style={[stylesAlerts.promptText, styles.colorPrimary]}>
          Password: {value}
        </SofkaText>
      )}
    </View>
  );
};

const stylesAlerts = StyleSheet.create({
  promptText: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});
