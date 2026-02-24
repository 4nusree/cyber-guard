import React from 'react';
import MessageBubble from './MessageBubble';

const MessageList = ({ messages, currentUsername }) => {
  return (
    <div className="message-list-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {messages.map((msg, index) => (
        <MessageBubble 
          key={index} 
          message={msg} 
          isOwn={msg.username === currentUsername} 
        />
      ))}
    </div>
  );
};

export default MessageList;
