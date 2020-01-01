import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Details, Home} from '../screens';
import * as routes from './routes';

const Navigator = createStackNavigator(
  {
    [routes.HOME]: {
      screen: Home,
    },
    [routes.DETAILS]: {
      screen: Details,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(Navigator);
