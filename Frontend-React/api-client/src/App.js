import { useState,useEffect } from 'react';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';
import PostList from './components/postList';

function App() {  
  const [posts, setPosts] = useState("")
  const BackedApi = "http://192.168.100.29:8000/api/"
  useEffect(() => {
        fetch(BackedApi)
        .then((response) => response.json())
         .then((data) => {
          
         setPosts(data);
        console.log(data);
        })
        .catch((error) => console.log(error));
    
  },[]) 
        
  return (posts.length>0 && <PostList posts={posts} />)
   
}

export default App;
