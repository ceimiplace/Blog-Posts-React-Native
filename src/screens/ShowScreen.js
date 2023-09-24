import React, { useContext } from "react";
import { View, Text } from "react-native";
import BlogContext from "../context/BlogContext";
export default ShowScreen = ({ navigation }) => {
  const { blogPosts } = useContext(BlogContext);
  const blogId = navigation.getParam("blogId");
  const blog = blogPosts.find((elem) => elem.id === blogId);
  return (
    <View>
      <Text>{blog.title}</Text>
    </View>
  );
};
