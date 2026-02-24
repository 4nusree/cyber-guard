import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import CommunityLayout from '../components/CommunityLayout';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import ChannelSidebar from '../components/ChannelSidebar';
import ChannelHeader from '../components/ChannelHeader';
import { encryptMessage, decryptMessage } from '../utils/encryption';
import { containsBadWords } from '../utils/badWordsFilter';
import '../styles/community.css';

const initialChannels = [
  { id: "general", name: "general", description: "General cybersecurity discussion" },
  { id: "web-security", name: "web-security", description: "Web vulnerabilities & OWASP" },
  { id: "networking", name: "networking", description: "Network security & protocols" },
  { id: "reverse-engineering", name: "reverse-engineering", description: "Binary analysis & malware" },
  { id: "ctf", name: "ctf-discussions", description: "Capture The Flag challenges" }
];

const Community = () => {
  const [location] = useLocation();
  const isAdminView = location.startsWith('/admin') || document.referrer.includes('/admin');
  const [channels] = useState(initialChannels);
  const [activeChannel, setActiveChannel] = useState("general");
  const [messages, setMessages] = useState({
    general: [
      {
        username: "Node_Alpha_7",
        text: encryptMessage("Payload successfully deployed on subnet 10.0.8.x. Data extraction initiated. Expecting initial packets within 200ms."),
        timestamp: Date.now() - 120000
      },
      {
        username: "Ghost_Sector",
        text: encryptMessage("Firewall detected. Switching to polymorphic signatures. Bypassing in 3... 2... 1... Access granted."),
        timestamp: Date.now() - 60000
      }
    ],
    "web-security": [],
    "networking": [],
    "reverse-engineering": [],
    "ctf": []
  });
  const [reportedUsers, setReportedUsers] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const currentUsername = "OPERATIVE_01";
  const messageAreaRef = useRef(null);

  const handleSendMessage = (text) => {
    if (containsBadWords(text)) {
      console.warn(`FLAGGED_USER: ${currentUsername} attempted to send restricted content.`);
      setReportedUsers(prev => [...prev, currentUsername]);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
      return;
    }

    const encryptedText = encryptMessage(text);
    const newMessage = {
      username: currentUsername,
      text: encryptedText,
      timestamp: Date.now()
    };

    setMessages(prev => ({
      ...prev,
      [activeChannel]: [...prev[activeChannel], newMessage]
    }));
  };

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages, activeChannel]);

  const currentChannelMessages = messages[activeChannel] || [];
  const decryptedMessages = currentChannelMessages.map(msg => ({
    ...msg,
    text: decryptMessage(msg.text)
  }));

  const activeChannelData = channels.find(c => c.id === activeChannel);

  const matrixContent = "010111010101010101001010101010101011101010101010101010101010101010111010101010101010101010101010101110101010101010101010101010101011101010101010101010101010101010111010101010101010101010101010101110101010101010101010101010101011101010101010101010101010101010111010101010";

  const content = (
    <div className="community-main-layout">
      <ChannelSidebar 
        channels={channels} 
        activeChannel={activeChannel} 
        onChannelSelect={setActiveChannel} 
      />
      
      <div className="channel-content">
        <ChannelHeader channel={activeChannelData} />
        
        {showBanner && (
          <div className="moderation-alert">
            <i className="material-icons">report_problem</i>
            SECURITY_ALERT: RESTRICTED_CONTENT_DETECTED
          </div>
        )}
        
        <div className="message-area-container" ref={messageAreaRef}>
          <MessageList messages={decryptedMessages} currentUsername={currentUsername} />
        </div>
        
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );

  return (
    <>
      <div className="hex-bg"></div>
      <div className="matrix-text">
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i}>{matrixContent}</p>
        ))}
      </div>
      <div className="scanline-overlay"></div>
      
      {isAdminView ? (
        <div className="admin-container">
          <div className="scanline"></div>
          <AdminSidebar />
          <div className="admin-main">
            <AdminHeader />
            <div className="admin-section">
              <CommunityLayout>
                {content}
              </CommunityLayout>
            </div>
          </div>
        </div>
      ) : (
        <CommunityLayout>
          {content}
        </CommunityLayout>
      )}
    </>
  );
};

export default Community;
