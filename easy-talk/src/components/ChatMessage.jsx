// src/components/ChatMessage.js
import React from 'react';

const ChatMessage = ({ message, user }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';

  return (
    <div className={`flex items-start space-x-3 p-3 ${messageClass} rounded-lg my-2`}>
      <img
        src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
