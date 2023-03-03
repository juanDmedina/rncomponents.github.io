/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, View} from 'react-native';

import { SofkaMenuItem } from '../organisms/SofkaMenuItem';
import { SofkaTitle } from '../molecules/SofkaTitle';
import { styles } from '../../theme/AppTheme';
import { MenuItemsTemplate } from '../templates/MenuItemsTemplate';
import { SofkaItemSeparator } from '../atoms/SofkaItemSeparator';

const SofkaHomePage = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={MenuItemsTemplate}
        renderItem={({item}) => <SofkaMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <SofkaTitle title="Components" />}
        ItemSeparatorComponent={() => <SofkaItemSeparator />}
      />
    </View>
  );
};

export default SofkaHomePage;
