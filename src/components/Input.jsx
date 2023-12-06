import React from 'react'
import Send from "../images/send.png"
const Input =() =>{
   return(
       <div className="input">
        <input type="text" placeholder=' Messages..' />
        <div className="send">
            
            <button>
            <img src={Send} alt="" />
            </button>
        </div>
       </div>
       
   )
}
export default Input