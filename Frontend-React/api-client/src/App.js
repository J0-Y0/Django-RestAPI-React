import { useState, useEffect } from 'react';
import './App.css';
import PostList from './components/postList';
import axiosInstance from './axios';
function App() {
  const [posts, setPosts] = useState("")





  useEffect( () => {
    try {

      async function fetchData() {
        // You can await here
        const response = await axiosInstance.get("posts/",);
        setPosts(response.data) 

      }
     fetchData();
          
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.error("Error ;login :", error.message);
    }
  }
    
    
    
    , [])

  return (posts.length > 0 && <PostList posts={posts} />)

}

export default App;
