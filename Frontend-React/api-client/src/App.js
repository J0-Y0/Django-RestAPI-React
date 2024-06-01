import { useState,useEffect } from 'react';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';
import PostList from './components/postList';

function App() {
  const [posts, setPosts] = useState(null)
  const BackedApi = "http://10.101.14.200:8002/api/"
  useEffect(() => {
        fetch(BackedApi)
        .then((response) => response.json())
         .then((data) => {
          
         setPosts(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    
  },[]) 
        
  return (posts && <PostList posts={posts} />)
   
}

export default App;
