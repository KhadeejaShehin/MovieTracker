import React from 'react';



function Navigation() {
  const navbarStyle = {
    height: '80px',
    margin: '-10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    transition: '0.3s',
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={{ fontSize: '2rem' }}>MovieMate</h1>
      <ul style={navLinksStyle}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#register" style={linkStyle}>Add Movie/TV Show</a></li>
        <li><a href="#details" style={linkStyle}>Display Details</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;





