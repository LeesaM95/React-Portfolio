// Bringing in the required import from 'react-router-dom'
export default function Nav() {
  const linkStyle = {border: '1pc black', padding: '5px'};

  return (
    <nav className="main-header-menu">
      <section style={{
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'rows',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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