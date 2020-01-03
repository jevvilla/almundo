import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {Hotel} from '../../../../common/intefaces';
import HotelCard from '../HotelCard';
import {styles} from './styles';

interface Props {
  onCardPress: (hotel: Hotel) => void;
  data: Hotel[];
}

const HotelList: React.FC<Props> = ({onCardPress, data}) => {
  const keyExtractor = (item: Hotel) => item.id;

  const renderItem = ({item}: {item: Hotel}) => {
    return <HotelCard onPress={() => onCardPress(item)} style={styles.card} hotel={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.flatlist}
      ListFooterComponent={<SafeAreaView forceInset={{bottom: 'always'}} />}
    />
  );
};

export default HotelList;
