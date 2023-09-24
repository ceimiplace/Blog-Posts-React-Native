import React, { useReducer } from "react";
import blogReducer from "../reducers/blogReducer";
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  function addBlog(title, content) {
    dispatch({
      type: "add_blog",
      payload: { title, content, id: Math.floor(Math.random() * 99999999) },
    });
  }
  function removeBlogs() {
    dispatch("remove_blogs");
  }
  function changeBlog(title,content,id){
    dispatch({type:"change_blog",payload:{title,content,id}})
  }
  return (
    <BlogContext.Provider value={{ blogPosts, addBlog, removeBlogs,changeBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
