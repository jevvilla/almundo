import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Details, Home} from '../screens';
import {defaultHeader, hearderTitle, sizes} from '../common/styles';
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
    defaultNavigationOptions: {
      headerStyle: defaultHeader,
      headerTitleStyle: hearderTitle,
      headerLeftContainerStyle: {marginLeft: sizes.base},
    },
  },
);

export default createAppContainer(Navigator);
