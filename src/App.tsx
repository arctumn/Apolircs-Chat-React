
import React, { useState } from 'react';
import './App.css';
import { MessageBoard, User, Message } from './Message';
import { NavBar } from './NavBar';

const pedro:User = {
  nickname: "Pedro"
}
const carlos:User = {
  nickname: "Carlos"
}
const joao:User = {
  nickname: "Joao"
}
const first_test:Message = {
  from_user:pedro,
  private_message:false,
  message:"Hello World!"
}
const second:Message = {
  from_user:carlos,
  private_message:false,
  message:"Goodbye World!"
}
const third:Message = {
  from_user:carlos,
  private_message:true,
  to_user: joao,
  message:"Não curto do Pedro!"
}
const user_list: User[] =[pedro,carlos,joao]
function App() {
  const [visable_messages] = useState([first_test,second,third])
  const [iterator,setIterator] = useState(0) 
  const [current_user,setUser] = useState((user_list[iterator])) 
  const [list_size] = useState(user_list.length)

  return (
    <div>
      <NavBar {...current_user}/>
      <MessageBoard {...{message_list:visable_messages,this_user:current_user}} />
      <div className="NavBar">
        <button onClick={ () => {
          //console.log("valor:["+ user_list[Math.round(Math.random()*10 % 2)].nickname+"]");
          
          setIterator(iterator === list_size -1 ? 0 : iterator+1)
          setUser(user_list[iterator])
          
        }
          }>Mudar de utilizador</button>
        <p>{current_user.nickname}</p>
      </div>
    </div>
  );
}

export default App;
