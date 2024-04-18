
const Portfolio = () => {

    const h4Style = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '30px',
        padding: '20px',
        color: '#d94470',
        marginLeft: '50px'
    }

    const h2Style = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '45px',
        textAlign: 'center',
        padding: '20px',
        color: '#4a506d'

    }

    const sectionOneStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }

    const sectionTwoStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

    const folioStyles = {
        height: '400px',
        maxWidth: '475px',

    }

    return (
        <div>
            <div>
                <div>
                    <h2 style={h2Style}>Portfolio</h2>
                <section style={sectionOneStyle}>
                    
                        <h4 style={h4Style}>SVG Logo-Maker</h4>

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/SVG-Logo-Maker" />
                    </div>

                   
                        <h4 style={h4Style}>Employee Tracker</h4>

                     <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/Employee-Tracker" />
                    </div>

                    
                        <h4 style={h4Style}>Note Taker</h4>

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/Note-Taker-App" />
                    </div>
                </section>

                <section style={sectionTwoStyle}>
                         <h4 style={h4Style}>PWA Text Editor</h4>
                     
                    <div style={folioStyles}>   
                        <a href="https://github.com/LeesaM95/PWA-Text-Editor" />
                    </div>

                    

                        <h4 style={h4Style}>README Generator</h4>

                    <div style={folioStyles}>   
                        <a href="https://github.com/LeesaM95/09-Professional-README-Generator" />
                    </div>
                    
                    
                        <h4 style={h4Style}>Peace for Pandas</h4>

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/Peace-for-Pandas"><img></img></a>
                    </div>
                </section>

                </div>
            </div>
        </div>
    )
}
export default Portfolio;