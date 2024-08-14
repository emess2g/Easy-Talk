// src/App.js
import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom';
import SignInButton from './components/SignInButton';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <SignInButton user={user} setUser={setUser} />
      {user && <ChatRoom user={user} />}
    </div>
  );
};

export default App;