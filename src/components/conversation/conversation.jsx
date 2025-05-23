import React from 'react';
import './conversation.css';

// Example data
const chatList = Array(10).fill({
  name: 'Rahul',
  userId: 'XXXXXXXX980',
  avatar: '/path/to/avatar.jpg', // Replace with actual avatar path or use a placeholder
});

export const Conversations = () => (
  <div className="sidebar-chats">
    {chatList.map((chat, idx) => (
      <div className="chat-item" key={idx}>
        <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
        <div>
          <div className="chat-name">{chat.name}</div>
          <div className="chat-id">{chat.userId}</div>
        </div>
      </div>
    ))}
  </div>
);
