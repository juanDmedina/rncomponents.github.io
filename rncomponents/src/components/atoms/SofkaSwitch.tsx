import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const SofkaSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: 'red', true: '#56D65C'}}
      thumbColor={Platform.OS === 'android' ? 'blue' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
