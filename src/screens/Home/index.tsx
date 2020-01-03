import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import * as routes from '../../../src/navigation/routes';
import {Hotel} from '../../../src/common/intefaces';
import {colors} from '../../../src/common/styles';
import {HotelList} from './components';
import {styles} from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const Home: React.FC<Props> = props => {
  const [hotels, setHotels] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      setFetching(true);
      const request = await fetch('http://192.168.1.63:3000/hotels');
      const result = await request.json();
      setHotels(result);
    } catch (err) {
      // TODO: implement catch error component
    } finally {
      setFetching(false);
    }
  };

  const navigateToDetails = (hotel: Hotel) => {
    const {navigation} = props;

    navigation.navigate(routes.DETAILS, {hotel});
  };

  return (
    <View style={styles.container}>
      {fetching && <ActivityIndicator color={colors.primary} size="small" />}
      <HotelList onCardPress={navigateToDetails} data={hotels} />
    </View>
  );
};

export default Home;
