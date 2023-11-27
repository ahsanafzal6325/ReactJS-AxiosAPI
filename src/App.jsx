import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [myData , setData] = useState([]);

  const MyApi = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  }

  useEffect(()=>{
    MyApi();
  },[]);

  return (
   <>
   <h2>Use of Axios</h2>
   <div className='grid'>
   {myData.slice(0,12).map((post) => {
    const {id,title,body} = post;
    return(
      <div className='card' key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    ); 
   })}
   </div>
   </>
  )
}

export default App




