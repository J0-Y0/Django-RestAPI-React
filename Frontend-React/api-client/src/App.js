import { useState } from 'react';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [posts, setPosts] = useState(null)
  const BackedApi = "http://127.0.0.1:8000/api/"
  fetch(BackedApi)
        .then((response) => response.json())
        .then((data) => {
          // setPosts(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    


  return (<h1>BOA</h1>)
   
}

export default App;
