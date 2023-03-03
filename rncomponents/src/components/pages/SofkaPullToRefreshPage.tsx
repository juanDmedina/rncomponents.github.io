import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import {  } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaText from '../atoms/SofkaText';
import { styles } from '../../theme/AppTheme';

export const SofkaPullToRefreshPage = () => {

    const { top } = useSafeAreaInsets();

    const [ refreshing, setRefreshing] = useState(false);
    const [ data, setData] = useState<string>();

    const Data = ['This is the Data', 'This is a test', 'This is another'];

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            setData(Data[Math.floor(Math.random() * Data.length)]);
        }, 1500);
    };

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor="#5856D6"
                    colors={ ['white','red','orange'] }
                />
            }
        >
            <View style={ styles.globalMargin }>
                <SofkaHeader title="Pull to refresh" />

                {
                    data && <SofkaText>{data}</SofkaText>
                }


            </View>
        </ScrollView>
    );
};
