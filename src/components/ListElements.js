import React from 'react'
import CardElements from './CardElements'
import {Link} from 'react-router-dom'
const ListElements = ({element,isLogin}) => {
    // el element lina est un tab objet
  return (
    <div style={{display:'flex', justifyContent:"space-around" , flexWrap:"wrap"}} >
   
   {!isLogin? <Link to='/'  >"you did good"</Link> :<> {
        element.map((e)=> <CardElements user={e}  />)
    }</>}
   
   
     
    </div>
  )
}

export default ListElements
