import React from 'react';

const ChannelHeader = ({ channel }) => {
  if (!channel) return null;
  
  return (
    <div className="channel-header-container">
      <div className="channel-header-info">
        <span className="channel-header-hashtag">#</span>
        <h2 className="channel-header-name">{channel.name}</h2>
        <div className="channel-header-divider"></div>
        <p className="channel-header-description">{channel.description}</p>
      </div>
    </div>
  );
};

export default ChannelHeader;
