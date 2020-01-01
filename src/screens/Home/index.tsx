import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import * as routes from '../../navigation/routes';

interface Props {
  navigation: NavigationStackProp;
}

type Fun = () => void;

const Home: React.FC<Props> = props => {
  const navigateToDetails: Fun = () => {
    const {navigation} = props;

    navigation.navigate(routes.DETAILS);
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={navigateToDetails}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
