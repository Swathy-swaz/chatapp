import React from 'react'
import Delete from "../images/delete.png";
import Back from "../images/back.png";
import Messages from "./Messages"
import Input from "./Input"

const Chat =() =>{
   return(
       <div className="chat">
        
        <div className="chatInfo">
            <div className="imagef">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X0K69PE2ZiLiq1rLjsQrQeB2mjF0U7gULQ&usqp=CAU"  />

            </div>
         
            <span>Jane</span>
            <div className="chatIcons">
                <img src={Back} alt="" />Back
                <img src={Delete} alt="" />Delete
                
            </div>
         
        </div>
        <Messages/>
        <Input/>
        </div>
        
        
   )
}
export default Chat