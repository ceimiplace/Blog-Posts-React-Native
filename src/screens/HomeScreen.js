import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import BlogContext from "../context/BlogContext";
const HomeScreen = ({ navigation }) => {
  const { blogPosts, addBlog } = useContext(BlogContext);
  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Show")}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default HomeScreen;
