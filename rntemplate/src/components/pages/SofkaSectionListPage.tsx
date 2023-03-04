/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SectionList, Text, View} from 'react-native';
import { styles } from '../../theme/AppTheme';
import SofkaHeader from '../organisms/SofkaHeader';
import SofkaText from '../atoms/SofkaText';
import { SofkaItemSeparator } from '../atoms/SofkaItemSeparator';
import { ISectionList } from '../../interfaces/ISectionList';

const casas: ISectionList[] = [
  {
    casa: 'The Flintstones',
    data: [
      'Pebbles Flintstone',
      'Fred Flintstone',
      'Schleprock',
      'Loyal Order of Water Buffaloes',
      'Bamm-Bamm Rubble',
      'Prince Barbaruba',
      'The Great Gazoo',
      'Mr. Slate',
      'Barney Rubble',
      'Captain Caveman',
      'Crusher',
      'Miss Strongstone',
      'Doozy',
      'Stoney Mahoney',
      'Flappy',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Aaron Stack',
      'Anita Blake',
      'Bart Rozum',
      'Captain America',
      'Cornelius',
      'Cypher',
      'Dagger',
      'Doctor Strange',
      'Deadpool',
      'Dragon Man',
      'Elektra',
      'Falcon',
      'Gravity',
      'Hulk',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Monkey D. Luffy',
      'Edward Elric',
      'Naruto Uzumaki',
      'Johan',
      'Goku',
      'Spike Spiegel',
      'Sailor Moon',
      'Shinji Ikari',
      'Himura Kenshin',
      'Roronoa Zoro',
      'Jotaro Kujo',
      'Saitama',
      'Kenshin',
      'Arsene Lupin III',
    ],
  },
];

export const SofkaSectionListPage = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <SofkaHeader title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <SofkaText>{'Total All: ' + casas.length}</SofkaText>
          </View>
        )}
        renderItem={({item}) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <SofkaText>{section.casa}</SofkaText>
          </View>
        )}
        renderSectionFooter={({section}) => (
            <SofkaText>{'Total: ' + section.data.length}</SofkaText>
        )}
        SectionSeparatorComponent={() => <SofkaItemSeparator />}
        ItemSeparatorComponent={() => <SofkaItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
