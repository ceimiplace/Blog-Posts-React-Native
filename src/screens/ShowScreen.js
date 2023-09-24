import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';
export default ShowScreen = ({ navigation }) => {
  const { blogPosts } = useContext(BlogContext);
  const blogId = navigation.getParam("blogId");
  const blog = blogPosts.find((elem) => elem.id === blogId);
  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
      <Text>{blog.id}</Text>

    </View>
  );
};
ShowScreen.navigationOptions = ({navigation}) =>{
  return {
    headerRight:()=> <TouchableOpacity onPress={()=>navigation.navigate("Edit",{id:navigation.getParam("blogId")})}>
       <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity>
    
  }
}