import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../../context/themeContext';
import {IMenu} from '../../interfaces/IMenu';
import SofkaText from '../atoms/SofkaText';
import SofkaIcon from '../atoms/SofkaIcon';

interface Props {
  menuItem: IMenu;
}

export const SofkaMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<any>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <SofkaIcon name={menuItem.icon}/>
        <SofkaText style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </SofkaText>

        <View style={{flex: 1}} />
        <SofkaIcon
          name="chevron-forward-outline"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
