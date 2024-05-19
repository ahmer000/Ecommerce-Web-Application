import React, { useState } from 'react'
import MyContext from './myContext';

function myState(props) {
   const [mode,setMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('Dark');
      document.body.style.backgroundColor ="rgb(17,24,39)";
    }
    else{
      document.body.style.backgroundColor='white'
    }
   }
  return (
    <MyContext.Provider value={{mode,toggleMode}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default myState