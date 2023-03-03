import prompt from 'react-native-prompt-android';
import {useState} from 'react';
import {IPrompt} from '../interfaces/IPrompt';

export const usePrompt = ({
  title,
  message,
  cancelText,
  okText,
  type = 'secure-text',
  cancelable = false,
  defaultValue = 'test',
  placeholder = 'placeholder',
}: IPrompt) => {
  const [value, setValue] = useState('');

  const showPrompt = () => {
    prompt(
      title,
      message,
      [
        {
          text: cancelText,
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: okText,
          onPress: text => setValue(text),
        },
      ],
      {
        type,
        cancelable,
        defaultValue,
        placeholder,
      },
    );
  };

  return {value, setValue, showPrompt};
};
