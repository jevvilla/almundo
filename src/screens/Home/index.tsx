import React from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

import * as routes from 'src/navigation/routes';
import {Hotel} from 'src/common/intefaces';
import {colors} from 'src/common/styles';
import logo from 'assets/images/logo.png';
import {HotelList} from './components';
import {styles} from './styles';

const Home: NavigationStackScreenComponent = props => {
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

Home.navigationOptions = {
  headerTitle: <Image source={logo} resizeMode="contain" style={styles.headerImage} />,
};

export default Home;
