// src/components/ChatRoom.js
import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, limit, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase';
import ChatMessage from './ChatMessage';

const ChatRoom = ({ user }) => {
  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'), limit(25));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (user) {
      const { uid, photoURL } = user;
      const messagesRef = collection(firestore, 'messages');
      
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL
      });

      setFormValue('');
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <main className="flex-1 overflow-auto p-2 bg-white border rounded-lg">
        {messages.map(msg => <ChatMessage key={msg.id} message={msg} user={user} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage} className="flex items-center mt-4 space-x-2">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          🕊️
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
