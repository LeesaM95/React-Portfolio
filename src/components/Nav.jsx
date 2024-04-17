// Bringing in the required import from 'react-router-dom'
 function Nav() {
  const linkStyle = {style: 'none', padding: '5px'};

  return (
    <nav className="main-header-menu">
      <section style={{
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'rows',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: '100px',
        marginTop: '10px'
      }}
      >
        <div style={linkStyle}>
            <a href="/About">Home</a>
        </div>
        <div style={linkStyle}>
            <a href="/Contact">Contact Me</a>
        </div>
        <div style={linkStyle}>
            <a href="/Portfolio">Portfolio</a>
        </div>
        <div style={linkStyle}>
            <a href="/Resume">Resume</a>
        </div>
      </section>
    </nav>
  );
}

export default Nav;