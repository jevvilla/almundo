import React from 'react';
import {View} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

import {IconButton, Map} from 'src/common/components';
import {colors} from 'src/common/styles';
import {Carousel} from './components';
import {styles} from './styles';

interface Details {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

const Details: NavigationStackScreenComponent = ({navigation}) => {
  const [details, setDetails] = React.useState<Details>();
  const {images, id, name} = navigation.state.params?.hotel;
  let location = {latitude: 0, longitude: 0};

  React.useEffect(() => {
    setNavigationParams();
    fetchHotelDetails();
  }, []);

  const fetchHotelDetails = async () => {
    const request = await fetch(`http://192.168.1.63:3000/details/${id}`);
    const data = await request.json();
    setDetails(data);
  };

  const setNavigationParams = () => {
    navigation.setParams({
      name,
    });
  };

  if (details) {
    location = details.location;
  }

  return (
    <View style={styles.container}>
      <View>
        <Carousel images={images} />
      </View>
      <Map location={location} />
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
