import React from 'react'

const Chats =() =>{
   return(
       <div className="chats">
        <div className="userChat">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X0K69PE2ZiLiq1rLjsQrQeB2mjF0U7gULQ&usqp=CAU"  />
         <div className="userChatInfo">
            <span>Jane</span><br></br>
           <p>Hello</p>
         </div>
      </div>

      <div className="userChat">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X0K69PE2ZiLiq1rLjsQrQeB2mjF0U7gULQ&usqp=CAU"  />
         <div className="userChatInfo">
            <span>Jane</span><br></br>
           <p>Hello</p>
         </div>
      </div>

      <div className="bot">
        <button>+</button>
        <span>Create new bot</span>
        </div>
     
    </div>

    
       
   )
}
export default Chats