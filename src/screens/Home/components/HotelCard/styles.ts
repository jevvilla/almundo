import {StyleSheet} from 'react-native';

import {colors, sizes, shadow} from '../../../../common/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingBottom: sizes.base * 2,
    width: '90%',
    ...shadow(),
  },
  thumbnail: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: sizes.base * 2,
  },
  body: {
    paddingHorizontal: sizes.base * 2,
  },
  title: {
    fontSize: sizes.h5,
    color: colors.black,
    fontWeight: '600',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: sizes.h5,
    color: colors.yellow,
    fontWeight: '600',
  },
  priceTitle: {
    fontSize: sizes.small,
  },
});
