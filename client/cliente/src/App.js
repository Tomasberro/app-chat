import socket from './components/Socket';
import './App.css';
import React, {useState} from 'react';
import Chat from '../src/components/chat.js';

function App() {
  const [userId, setUserId] = useState('');
  const [register, setRegister] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    if(userId !== '') {
    setRegister(true);
    }
  }
  return (
     <div className="App">
       { !register &&
        <form onSubmit={registerUser}>
          <label htmlFor="name">Introduzca su UserId:</label>
          <input value={userId} placeholder="Enter your userId" onChange={(e) => setUserId(e.target.value)} />
          <button >Ir al chat</button>
        </form>
      }
      { register &&
      <Chat userId={userId} />
      }
    </div>
  );
}

export default App;
