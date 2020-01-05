import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import FastImage from 'react-native-fast-image';

import * as routes from 'src/navigation/routes';
import {getHotels} from 'src/api';
import {Hotel} from 'src/common/intefaces';
import {colors} from 'src/common/styles';
import logo from 'assets/images/logo.png';
import {HotelList} from './components';
import {styles} from './styles';

const Home: NavigationStackScreenComponent = props => {
  const [hotels, setHotels] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    setFetching(true);
    try {
      const data = await getHotels();
      setHotels(data);
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
  headerTitle: <FastImage source={logo} resizeMode="contain" style={styles.headerImage} />,
};

export default Home;
