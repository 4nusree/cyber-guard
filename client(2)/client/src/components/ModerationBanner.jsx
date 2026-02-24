import React from 'react';

const ModerationBanner = ({ show }) => {
  if (!show) return null;
  return (
    <div className="moderation-banner">
      <span className="material-symbols-outlined">warning</span>
      <span>SECURITY_ALERT: Message blocked due to prohibited content. User reported.</span>
    </div>
  );
};

export default ModerationBanner;
