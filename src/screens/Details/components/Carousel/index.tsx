import React from 'react';
import {Dimensions, FlatList, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

interface Props {
  images: [string];
}

const Carousel: React.FC<Props> = ({images}) => {
  const renderItem = ({item}: {item: any}) => (
    <Image source={{uri: item.source}} resizeMode="contain" style={{width, height: height / 3}} />
  );

  const keyExtractor = (item: any) => item.source;

  const prepareImagesForCarousel = (pictures: [string]) => {
    return pictures.map((image, index) => ({id: index, source: image}));
  };

  return (
    <>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={prepareImagesForCarousel(images)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default Carousel;
