import {Alert} from 'react-native';
import {IAlert} from '../../interfaces/IAlert';

export const showAlert = ({
  title,
  message = '',
  cancelText,
  okText,
}: IAlert) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: () => {},
        style: 'destructive',
      },
      {text: okText, onPress: () => {}},
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    },
  );
};
