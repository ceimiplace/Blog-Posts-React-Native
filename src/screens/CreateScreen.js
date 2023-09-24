import React, { useContext, useState } from "react";
import {View,Text, TextInput,StyleSheet, Button} from "react-native"
import BlogContext from "../context/BlogContext";
const CreateScreen = () =>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("")
    const {addBlog} = useContext(BlogContext)
    return <View>
        <View>
            <Text>Please enter title:</Text>
            <TextInput style={styles.textInput} onChangeText={e=>setTitle(e)} value={title}/>
        </View>
        <View>
            <Text>Please enter content:</Text>
            <TextInput style={styles.textInput} onChangeText={e=>setContent(e)} value={content}/>
        </View>
        <Button title="Submit" onPress={()=>addBlog(title,content)}/>
    </View>
}
export default CreateScreen;
const styles= StyleSheet.create({
    textInput:{
        width:"70%",
        borderWidth:1,
        borderColor:"grey"
    }
})
