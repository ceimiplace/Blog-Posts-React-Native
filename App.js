import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen";
import CreateScreen from "./src/screens/CreateScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Edit: EditScreen,
    Create:CreateScreen
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
