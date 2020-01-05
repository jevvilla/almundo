import {StyleSheet} from 'react-native';

import {colors, sizes} from 'src/common/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  infoContainer: {
    paddingHorizontal: sizes.base * 2,
  },
  title: {
    fontSize: sizes.h4,
    color: colors.black,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    paddingBottom: sizes.base,
  },
  location: {
    fontSize: sizes.h5,
    color: colors.black,
    paddingLeft: sizes.base,
  },
});
