
import { useState } from 'react';
import './App.css';
import { MessageBoard} from './Message';
import { NavBar } from './NavBar';
import { test_messages, user_list } from './Example_Data';


function App() {
  const [visable_messages] = useState(test_messages)
  const [iterator, setIterator] = useState(0)
  const [current_user, setUser] = useState((user_list[iterator]))
  const [list_size] = useState(user_list.length)

  return (
    <div>
      <NavBar {...current_user} />
      <MessageBoard {...{ message_list: visable_messages, this_user: current_user }} />
      <div>
        <button onClick={() => {
          //console.log("valor:["+ user_list[Math.round(Math.random()*10 % 2)].nickname+"]");

          setIterator(iterator === list_size - 1 ? 0 : iterator + 1)
          setUser(user_list[iterator])

        }
        }>
          Mudar de utilizador
        </button>

      </div>
    </div>
  );
}

export default App;
