import React from 'react';



function Home() {

  const containerStyle = {
    padding: '4rem',
    marginTop:'-1.0rem',
    marginLeft:'-10rem',
    marginRight:'-10rem',
    color: '#000000',
    textAlign: 'center',
    backgroundImage: 'url("https://i.pinimg.com/736x/b8/3c/74/b83c74447fa290e487209a953e0bd6e7.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 80px)',
    
  };

  return (
    <div id="home" style={containerStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to MovieMate </h1>
      <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
        Manage all your movies and TV shows in one place. <br />
        Use the navigation bar above to add new content or view your collection!
      </p>
    </div>

    
  )
}

export default Home;


