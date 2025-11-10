import React from 'react';

export function HomeBanner() {
  return (
    <div
      className="home-banner"
      style={{
        width: '100vw',
        height: '90vh',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        backgroundImage: 'url(/homepage-desktop-banner.jpg)',
        overflow: 'hidden',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{flex: 1}}>Hi</div>
      <div style={{flex: 1}}>Hi</div>
      <div
        style={{
          flex: 2,
          textAlign: 'center',
          // border: '2px solid white',
          padding: '20px',
          marginBottom: '0px',
        }}
      >
        <p
          className="welcome"
          style={{
            fontSize: '24px',
            letterSpacing: '2px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Welcome to
        </p>
        <h1
          className="intro-text"
          style={{
            fontSize: '45px',
            marginBottom: '36px',
            letterSpacing: '0.146vw',
            lineHeight: '1.3',
            fontFamily: 'Bodoni 72',
            color: 'white',
            marginTop: '1rem',
          }}
        >
          India&apos;s finest rug studio
        </h1>
      </div>
    </div>
  );
}
