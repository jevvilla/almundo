import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {styles} from './styles';

interface Props {
  location: {
    longitude: number;
    latitude: number;
  };
}

const Map: React.FC<Props> = ({location}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          longitude: location.longitude,
          latitude: location.latitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.01,
        }}
        loadingEnabled={true}
        pitchEnabled={false}
        showsIndoors={false}
        showsPointsOfInterest={false}
        showsTraffic={false}
        toolbarEnabled={false}>
        <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} />
      </MapView>
    </View>
  );
};

export default Map;
