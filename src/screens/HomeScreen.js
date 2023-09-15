import React, { useContext } from "react";
import { View, Text } from "react-native";
import BlogContext from "../context/BlogContext";
const HomeScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
export default HomeScreen;
