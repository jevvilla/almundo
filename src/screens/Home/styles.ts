import {StyleSheet} from 'react-native';

import {colors, sizes} from 'src/common/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 150,
    height: 150,
  },
  searchSection: {
    paddingHorizontal: sizes.base * 2,
    paddingBottom: sizes.base * 2,
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: sizes.base,
    borderRadius: sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
