 
import React from "react"

export const Header = () => {
  let custumCss ="two"; 
  const isLoggedIn = true;
  let greeting = isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>
  const items = ["car ","bus","bike","fly"];
  return (
  <>
    <div>
        <h1 className="one">SMP TRAVELS</h1>
        <p className={custumCss} style={{fontSize :"30px" }}>ENJOY HOLIDAYS WITH US</p>
    </div>
     {greeting}
     <ul>
      {items.map((x , index) => (<li key = {index}>{x}</li>))}
     </ul>
  </>
  )
  
}
 