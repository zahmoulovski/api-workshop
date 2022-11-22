import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import ListElements from './components/ListElements';
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
function App() {



  //partie state 
  const[element,setElement]=useState([])
//khater tt simple nreder njib les data mikl api awel ma trender el compot
useEffect(()=>{
axios.get('http://jsonplaceholder.typicode.com/users')
.then((res)=>{
  setElement(res.data)
})
.catch((err)=>{
  console.log(err)
})


},[])

console.log('element',element)

//partie login logout 
const [isLogin,setIsLogin]=useState(false)

const logout=()=>{
  setIsLogin(!isLogin)
}

  return (
    <div className="App">
    <h1>les api </h1>
    <NavBar   logout={logout}   isLogin={isLogin}/>
    <Routes>
    <Route  path='/userList' element={<ListElements  element={element}  isLogin={isLogin}/>}   />
    <Route path='/home page' element={<Home/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
