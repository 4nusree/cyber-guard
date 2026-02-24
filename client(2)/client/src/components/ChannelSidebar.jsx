import React from 'react';
import ChannelItem from './ChannelItem';

const ChannelSidebar = ({ channels, activeChannel, onChannelSelect }) => {
  return (
    <aside className="channel-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">CHANNELS</span>
      </div>
      <div className="channel-list">
        {channels.map((channel) => (
          <ChannelItem
            key={channel.id}
            channel={channel}
            isActive={activeChannel === channel.id}
            onClick={onChannelSelect}
          />
        ))}
      </div>
    </aside>
  );
};

export default ChannelSidebar;
