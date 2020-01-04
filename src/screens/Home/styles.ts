import {StyleSheet} from 'react-native';

import {colors} from '../../common/styles';

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
});
