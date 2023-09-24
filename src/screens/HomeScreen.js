import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import BlogContext from "../context/BlogContext";
import {Ionicons} from "@expo/vector-icons";
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
    </View>
  );
};
export default HomeScreen;
HomeScreen.navigationOptions = ({navigation}) =>{
  return {
    headerLeft: ()=><TouchableOpacity onPress={()=>navigation.navigate("Create")}>
      <Ionicons name="add" size={20}/>
    </TouchableOpacity>
  }
}
