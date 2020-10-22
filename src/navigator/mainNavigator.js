import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings155199Navigator from '../features/Settings155199/navigator';
import Settings155165Navigator from '../features/Settings155165/navigator';
import Settings155148Navigator from '../features/Settings155148/navigator';
import Settings155131Navigator from '../features/Settings155131/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings155199: { screen: Settings155199Navigator },
Settings155165: { screen: Settings155165Navigator },
Settings155148: { screen: Settings155148Navigator },
Settings155131: { screen: Settings155131Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
