import React from 'react';
import {View, Text} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import {Carousel} from './components';
import {Hotel} from '../../common/intefaces';
import {styles} from './styles';

interface Props {
  navigation: NavigationStackProp<Hotel>;
}

const Details: React.FC<Props> = ({navigation}) => {
  const {images} = navigation.state.params?.hotel;

  return (
    <View style={styles.container}>
      <Carousel images={images} />
    </View>
  );
};

export default Details;
