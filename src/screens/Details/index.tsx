import React from 'react';
import {View, Text} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';

import {IconButton, Map} from 'src/common/components';
import {colors} from 'src/common/styles';
import {getHotelDetails} from 'src/api';
import {Carousel} from './components';
import {styles} from './styles';

interface Details {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  country: string;
  city: string;
}

const Details: NavigationStackScreenComponent = ({navigation}) => {
  const [details, setDetails] = React.useState<Details>();
  const {images, _id, name, stars} = navigation.state.params?.hotel;
  let location = {latitude: 0, longitude: 0};
  let country = '';
  let city = '';

  React.useEffect(() => {
    setNavigationParams();
    fetchHotelDetails();
  }, []);

  const fetchHotelDetails = async () => {
    try {
      const data = await getHotelDetails(_id);
      setDetails(data);
    } catch (error) {
      // TODO: implement catch error component
    }
  };

  const setNavigationParams = () => {
    navigation.setParams({
      name,
    });
  };

  if (details) {
    location = details.location;
    country = details.country;
    city = details.city;
  }

  return (
    <View style={styles.container}>
      <View>
        <Carousel images={images} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.row}>
          {Array(...Array(stars)).map((_, index) => (
            <Icon key={index} name="star" size={22} color={colors.yellow} />
          ))}
        </View>
        <View style={styles.row}>
          <Icon name="enviroment" size={22} color={colors.red} />
          <Text style={styles.location}>{`${city}, ${country}`}</Text>
        </View>
        <Map location={location} />
      </View>
    </View>
  );
};

Details.navigationOptions = ({navigation}) => {
  const name = navigation.getParam('name');

  return {
    headerTitle: name,
    headerLeft: (
      <IconButton
        name="arrowleft"
        color={colors.primary}
        size={24}
        onPress={() => navigation.goBack()}
      />
    ),
  };
};

export default Details;
