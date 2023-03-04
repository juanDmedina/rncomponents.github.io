/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import { SofkaFadeInImage } from '../atoms/SofkaFadeInImage';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaLoading from '../atoms/SofkaLoading';
import SofkaText from '../atoms/SofkaText';

export const SofkaFlatListPage = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <SofkaFadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <SofkaHeader title="Flatlist" />
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <SofkaText style={{fontSize:15}}>Dummy List</SofkaText>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SofkaLoading size={25} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};
