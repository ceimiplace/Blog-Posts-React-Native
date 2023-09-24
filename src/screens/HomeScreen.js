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
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { blogId: item.id })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="add something" onPress={() => addBlog("hi there")} />
    </View>
  );
};
export default HomeScreen;
