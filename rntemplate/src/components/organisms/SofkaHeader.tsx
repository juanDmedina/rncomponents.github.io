import React, {useContext} from 'react';
import {View} from 'react-native';
import {SofkaTitle} from '../molecules/SofkaTitle';
import SofkaWithoutBorderButton from '../atoms/SofkaWithoutBorderButton';
import SofkaIcon from '../atoms/SofkaIcon';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/themeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface Props {
  title: string;
}

const SofkaHeader = ({title}: Props) => {
  const MemoizedNestedComponent = React.useCallback(
    () => <SofkaIcon name="arrow-back-outline" />,
    [],
  );

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const navigation = useNavigation<any>();

  const {top} = useSafeAreaInsets();

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{}}>
        <SofkaWithoutBorderButton
          title=""
          OnPress={() => navigation.pop()}
          color="white"
          accessoryLeft={MemoizedNestedComponent}
          style={{
            width: 30,
            height: 50,
            marginHorizontal: 5,
            marginTop: top + 20,
            backgroundColor: colors.background,
            borderColor: colors.background,
          }}
        />
      </View>
      <View style={{ flex: 1}}>
        <SofkaTitle title={title} />
      </View>
    </View>
  );
};

export default SofkaHeader;
