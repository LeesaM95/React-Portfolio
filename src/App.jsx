import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import Nav from '../src/components/Nav';

function App() {
    const nameStyle = {fontSize: '40px', 
                    fontFamily: 'Pacifico, cursive',
                    paddingTop: '40px',
                    paddingLeft: '50px',
                    marginTop: '40px',
                    color: '#4a506d',
                    letterSpacing: '1px',
                    wordSpacing: '5px',
                    }

    const spanStyle = {
                fontSize: '32px',
                fontStyle: 'italic',
                color: '#4a506d'
                

    }

    const bgStyle = {
        backgroundImage: 'linear-gradient(90deg, #edc2f5, #fcb4d2, #CAE0F1)',
        padding: '20px'
    }

    return (
        <>
        <header>
            <h2 style={nameStyle}>  Leesa Gonzalez's <span style={spanStyle}>Portfolio</span></h2>
        </header>
        <Nav />
        <main style={bgStyle}>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default App;