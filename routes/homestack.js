//Libs
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//Screens
import Login from '../Screens/Login';
import Register1 from '../Screens/Register1';
import Register2 from '../Screens/Register2'

const screens={
  Login: {
    screen: Login,
  },
  Register1:{
    screen: Register1,
  },
  Register2:{
    screen: Register2,
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);