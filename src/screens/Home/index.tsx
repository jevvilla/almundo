import React from 'react';
import {View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import {HotelList} from './components';
import * as routes from '../../navigation/routes';
import {styles} from './styles';

interface Props {
  navigation: NavigationStackProp;
}

type Fun = () => void;

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

  const navigateToDetails: Fun = () => {
    const {navigation} = props;

    navigation.navigate(routes.DETAILS);
  };

  return (
    <View style={styles.container}>
      <HotelList onCardPress={navigateToDetails} data={hotels} />
    </View>
  );
};

export default Home;
