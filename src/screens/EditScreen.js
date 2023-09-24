import React,{useState,useContext} from "react";
import { Text,View,StyleSheet,TextInput,Button } from "react-native";
import BlogContext from "../context/BlogContext";
const EditScreen = ({navigation}) =>{
   
    const { blogPosts,changeBlog } = useContext(BlogContext);
    const blogId = navigation.getParam("id");
    const blog = blogPosts.find((elem) => elem.id === blogId);
    const [title,setTitle] = useState(blog.title);
    const [content,setContent] = useState(blog.content)
    return <View>
    <View>
        <Text>Please enter title:</Text>
        <TextInput style={styles.textInput} onChangeText={e=>setTitle(e)} value={title}/>
    </View>
    <View>
        <Text>Please enter content:</Text>
        <TextInput style={styles.textInput} onChangeText={e=>setContent(e)} value={content}/>
    </View>
    <Button title="Submit" onPress={()=>changeBlog(title,content,blogId)}/>
</View>


}
export default EditScreen;
const styles= StyleSheet.create({
    textInput:{
        width:"70%",
        borderWidth:1,
        borderColor:"grey"
    }
})