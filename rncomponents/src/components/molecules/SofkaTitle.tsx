import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';
import { styles } from '../../theme/AppTheme';
import SofkaText from '../atoms/SofkaText';

interface Props {
    title: string;
}


export const SofkaTitle = ({ title }: Props) => {

    const { top } = useSafeAreaInsets();

    const {
        theme: {colors},
      } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <SofkaText style={ {...styles.title, color: colors.text} }>{ title }</SofkaText>
        </View>
    );
};
