import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <footer className="footer-area">
      <form className="input-container" onSubmit={handleSubmit}>
        <div className="input-prompt">
          <span>&gt;</span>
          <span className="cursor-blink"></span>
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="TYPE MESSAGE HERE..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="input-message"
        />
        <button type="submit" className="send-button" data-testid="button-send">
          <i className="material-icons">send</i>
        </button>
      </form>
      <div className="footer-stats">
        <div className="tech-info">
          <span>Enc: AES-256-GCM</span>
          <span>Status: SECURE</span>
          <span>Protocol: SSH-7</span>
        </div>
        <div className="terminal-version">
          TERMINAL v4.0.2 // STABLE_REL
        </div>
      </div>
    </footer>
  );
};

export default MessageInput;
