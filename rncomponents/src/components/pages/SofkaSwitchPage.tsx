import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SofkaSwitch} from '../atoms/SofkaSwitch';
import {useForm} from '../../hooks/useForm';
import SofkaHeader from '../organisms/SofkaHeader';
import {styles} from '../../theme/AppTheme';
import SofkaText from '../atoms/SofkaText';

export const SofkaSwitchPage = () => {
  const {form, onChange} = useForm({
    isActive: true,
    isEnable: false,
  });

  const {isActive, isEnable} = form;

  return (
    <View style={{marginHorizontal: 20}}>
      <SofkaHeader title="Switches" />

      <View style={stylesSwitch.switchRow}>
        <SofkaText style={stylesSwitch.switchText}>isActive</SofkaText>
        <SofkaSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={stylesSwitch.switchRow}>
        <SofkaText style={stylesSwitch.switchText}>isEnable</SofkaText>
        <SofkaSwitch
          isOn={isEnable}
          onChange={value => onChange(value, 'isEnable')}
        />
      </View>

      <SofkaText style={[stylesSwitch.jsonViewText, styles.colorPrimary]}>
        IsActive: {String(form.isActive)}
      </SofkaText>
      <SofkaText style={[stylesSwitch.jsonViewText, styles.colorPrimary]}>
        IsisEnabled: {String(form.isEnable)}
      </SofkaText>
    </View>
  );
};

const stylesSwitch = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
    fontStyle: 'italic',
  },
  jsonViewText: {
    fontSize: 15,
  },
});
