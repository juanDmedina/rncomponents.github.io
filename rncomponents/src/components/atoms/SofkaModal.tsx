import React, {useContext} from 'react';
import {Modal, View} from 'react-native';
import SofkaText from './SofkaText';
import SofkaButton from './SofkaButton';
import {ThemeContext} from '../../context/themeContext';

type ModalType = 'none' | 'slide' | 'fade' | undefined;

interface Props {
  visible: boolean;
  transparent: boolean;
  animationType: ModalType;
  OnPress: () => void;
}

const SofkaModal = ({visible, transparent, animationType, OnPress}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5,
          }}>
          <SofkaText style={{fontSize: 20, fontWeight: 'bold'}}>
            Modal
          </SofkaText>
          <SofkaText
            style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
            Modal's Body
          </SofkaText>
          <SofkaButton
            title="Close"
            color="#5856D6"
            OnPress={OnPress}
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
    </Modal>
  );
};

export default SofkaModal;
