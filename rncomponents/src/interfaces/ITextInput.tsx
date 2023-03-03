import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';

type inputType = 'none' | 'sentences' | 'words' | 'characters' | undefined

type keyboardAppearanceType = 'light' | 'dark' | 'default' | undefined

type autoCompleteType = 'birthdate-day'
| 'birthdate-full'
| 'birthdate-month'
| 'birthdate-year'
| 'cc-csc'
| 'cc-exp'
| 'cc-exp-day'
| 'cc-exp-month'
| 'cc-exp-year'
| 'cc-number'
| 'email'
| 'gender'
| 'name'
| 'name-family'
| 'name-given'
| 'name-middle'
| 'name-middle-initial'
| 'name-prefix'
| 'name-suffix'
| 'password'
| 'password-new'
| 'postal-address'
| 'postal-address-country'
| 'postal-address-extended'
| 'postal-address-extended-postal-code'
| 'postal-address-locality'
| 'postal-address-region'
| 'postal-code'
| 'street-address'
| 'sms-otp'
| 'tel'
| 'tel-country-code'
| 'tel-national'
| 'tel-device'
| 'username'
| 'username-new'
| 'off'
| undefined

export interface ITextInput {
    style : StyleProp<TextStyle>;
    textStyle? : StyleProp<TextStyle>;
    placeholder: string;
    autoCorrect?: boolean;
    autoCapitalize?: inputType;
    onChangeText: (text: string) => void
    keyboardType?: KeyboardTypeOptions | undefined;
    keyboardAppearance? : keyboardAppearanceType;
    autoComplete?: autoCompleteType;
}
