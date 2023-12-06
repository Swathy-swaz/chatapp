import React from 'react'
import Navbar from './Navbar'
import UserSec from './UserSec'
import Chats from './Chats'

const Sidebar =() =>{
   return(
        
       <div className="sidebar">
        <Navbar/> 
        <UserSec/>
        <Chats/>
        </div>
      
   );
};
export default Sidebar