import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../app/screens/HomeScreen"
import Detail from "../app/screens/DetailScreen"
import NewBlock from "../app/screens/NewBlockScreen"

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#dbdbdb",
        elevation: 0,
      }
    }
  },
  NewBlock: {
    screen: NewBlock,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#dbdbdb",
        elevation: 0,
      }
    }
  }
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);