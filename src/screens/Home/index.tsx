import React from 'react';
import {View, ActivityIndicator, TextInput} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import FastImage from 'react-native-fast-image';
import debounce from 'lodash.debounce';

import * as routes from 'src/navigation/routes';
import * as strings from 'src/common/strings';
import {getHotels} from 'src/api';
import {Hotel} from 'src/common/intefaces';
import {colors} from 'src/common/styles';
import logo from 'assets/images/logo.png';
import {HotelList} from './components';
import {styles} from './styles';

let searchText: string = '';

const Home: NavigationStackScreenComponent = props => {
  const [hotels, setHotels] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);

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

  const onChangeTextInputHandler = debounce((value: string) => {
    searchText = value;
    searchHotel(searchText);
  }, 300);

  const searchHotel = (value: string) => {
    const filteredhotels = hotels.filter((hotel: Hotel) => {
      return hotel.name.toLowerCase().includes(value);
    });

    setSearchResult(filteredhotels);
  };

  const navigateToDetails = (hotel: Hotel) => {
    const {navigation} = props;

    navigation.navigate(routes.DETAILS, {hotel});
  };

  return (
    <View style={styles.container}>
      {fetching && <ActivityIndicator color={colors.primary} size="small" />}
      {!fetching && (
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={strings.SEARCH_PLACEHOLDER}
            onChangeText={onChangeTextInputHandler}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      )}
      <HotelList onCardPress={navigateToDetails} data={searchText ? searchResult : hotels} />
    </View>
  );
};

Home.navigationOptions = {
  headerTitle: <FastImage source={logo} resizeMode="contain" style={styles.headerImage} />,
};

export default Home;
