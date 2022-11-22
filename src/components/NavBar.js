import React from 'react'

const NavBar = ({logout,isLogin}) => {
  console.log(isLogin,"islogin")
  return (
    <div>
      <h1>home</h1>
      <button  onClick={()=>logout()}  >{isLogin?"logout":"login"}</button>
    </div>
  )
}

export default NavBar
