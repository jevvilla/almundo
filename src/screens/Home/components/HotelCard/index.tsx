import React from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Hotel} from 'src/common/intefaces';
import {colors} from 'src/common/styles';
import * as strings from 'src/common/strings';
import {styles} from './styles';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  hotel: Hotel;
}

const HotelCard: React.FC<Props> = ({onPress, style, hotel}) => {
  const {images, name, price, stars} = hotel;

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.5} onPress={onPress}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: images[0],
        }}
      />
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.priceTitle}>{strings.PRICE_PER_NIGHT}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            {Array(...Array(stars)).map((_, index) => (
              <Icon key={index} name="star" size={22} color={colors.yellow} />
            ))}
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>{`ARS ${price}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
