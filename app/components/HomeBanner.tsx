import React from 'react';

export function HomeBanner() {
  return (
    <div
      className="home-banner"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <img
        src="/homepage-desktop-banner.jpg"
        alt="Homepage Banner"
        className="w-full h-auto"
        style={{
          display: 'block',
        }}
      />
    </div>
  );
}
