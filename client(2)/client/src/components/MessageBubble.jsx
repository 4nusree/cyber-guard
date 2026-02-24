import React from 'react';

const MessageBubble = ({ message, isOwn }) => {
  const avatarUrl = isOwn 
    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuALW5S9os6tt5O5Ay6k-jDGDUYQcGmtz6dzL_oR1O8Ej7XAorYqYVH2i4D4CfYVplzpQygN0sQisNVMXb80abkHjEonMB0ILIB4xHLxgsridSxfZ-4y2ByHX_DS-Nsprx1bLAnUr6QmGJciwt-bRlXyxLUacFOtjyIArl3ibemg9d9dTSLRsj1_3GGyNDQvwXRujcWBmxcDbYI33ocsivSjjIZNhfl3SS11oTYx608kWAyUYR3XSEPx0E5325Hx4oicsmSKctBgUgo"
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuBOZk-tMva-SBvhz1LKsDCP9eDHtZcDQVEPN--mGl5Tj4-IPBwOCWzM-BtkUSaJOaupU-SntlM9N4S3CKkQXMzE-uk6H_A-XglW1P6WC_yoq2SpRYgoVGDoX1VjwfoYVOhaQkz4LRVu4XxMdF0uYNrk_VAxFH77MvoaOV_6M8uIZPnRIvER33LD3ajMgE6O3N9b7gIYi7TEudmxus59MA5lIdq1VdeJ9WIR0lYCiPTvR5ELGDSm68J0dCN1x6BNuvPYtWFu5NSuQEY";

  return (
    <div className={`message-wrapper ${isOwn ? 'own' : 'other'}`}>
      <div className="avatar-container">
        <div className="avatar">
          <img src={avatarUrl} alt="User Avatar" />
        </div>
      </div>
      <div className="message-bubble">
        {!isOwn && <div className="corner-bracket top-right"></div>}
        {!isOwn && <div className="corner-bracket bottom-right"></div>}
        <div className="message-meta">
          <span className="meta-username">{isOwn ? 'You (Admin)' : message.username}</span>
          <span className="meta-time">{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</span>
        </div>
        <p className="message-text">
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
