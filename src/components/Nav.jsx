// Bringing in the required import from 'react-router-dom'
function Nav() {
  const linkStyle = {
    textDecoration: 'none',
    padding: '10px',
    fontSize: '24px',
    marginTop: '90px',
    fontFamily: 'monospace',
    color: '#a2d5fd',
    fontWeight: 'bold'

  };

  const bgBar = {
    height: '150px',
    backgroundColor: '#BD95B3',
    fontFamily: 'monospace',
    marginTop: '-136px',
    borderBottom: 'solid 4px #d94470'
  }

  const linkDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '70px',
    
  }
  return (
    <nav style={bgBar}>
      <section 
      >
        <div style={linkDiv}>
          <a href="/About" style={linkStyle}>Home ♡ </a>
        
          <a href="/Contact" style={linkStyle}>Contact Me ♡ </a>
        
          <a href="/Portfolio" style={linkStyle}>Portfolio ♡ </a>
        
          <a href="/Resume" style={linkStyle}>Resume</a>
        </div>
      </section>
    </nav>
  );
}

export default Nav;