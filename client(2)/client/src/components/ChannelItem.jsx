import React from 'react';

const ChannelItem = ({ channel, isActive, onClick }) => {
  return (
    <div
      className={`channel-item ${isActive ? 'active' : ''}`}
      onClick={() => onClick(channel.id)}
      data-testid={`channel-item-${channel.id}`}
    >
      <span className="channel-hashtag">#</span>
      <span className="channel-name">{channel.name}</span>
    </div>
  );
};

export default ChannelItem;
