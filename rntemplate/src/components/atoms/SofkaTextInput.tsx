import { Input } from '@ui-kitten/components';
import React from 'react';
import { ITextInput } from '../../interfaces/ITextInput';




const SofkaTextInput = ({textStyle, placeholder, autoCorrect, autoCapitalize = 'none', onChangeText, keyboardType, keyboardAppearance = 'default', style, autoComplete}:ITextInput ) => {
  return (
    <Input
    style = {style}
    textStyle = {textStyle}
    placeholder = {placeholder}
    autoCorrect = {autoCorrect}
    autoCapitalize = {autoCapitalize}
    onChangeText={onChangeText}
    keyboardType= {keyboardType}
    keyboardAppearance = {keyboardAppearance}
    autoComplete={autoComplete}
    />
  );
};

export default SofkaTextInput;
