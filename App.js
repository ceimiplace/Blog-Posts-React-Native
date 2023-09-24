import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
