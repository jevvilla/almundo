export const sizes = {
  // global sizes
  base: 8,
  font: 14,
  small: 12,
  h1: 26,
  h2: 24,
  h3: 22,
  h4: 20,
  h5: 18,
};

export const colors = {
  red: 'rgb(255,100,100)',
  primary: 'rgb(253, 77, 18)',
  yellow: 'rgb(251, 173, 18)',
  black: '#323643',
  white: '#FFFFFF',
  background: 'rgb(249, 249, 254)',
};

export const shadow = () => {
  return {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.13,
    shadowRadius: 3.62,
    elevation: 2,
  };
};

export const defaultHeader = {
  borderBottomWidth: 0,
  elevation: 0,
  height: 64,
  backgroundColor: colors.background,
};

export const hearderTitle = {
  color: colors.primary,
  fontSize: sizes.h3,
};
