
const Portfolio = () => {

    const h4Style = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '30px',
        padding: '20px',
        color: '#d94470',
        marginLeft: '45px',
        
    }

    const h2Style = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '70px',
        textAlign: 'center',
        padding: '20px',
        color: '#4a506d',
        marginBottom: '50px'

    }

    const sectionStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

    const folioStyles = {
        marginBottom: '100px',
        maxHeight: '350px',
        maxWidth: '375px',
        margin: '20px',

    }

    const imgStyles = {
        width: '375px', 
        height:'350px',
        border: 'solid 3px #4a506d', 
        borderRadius: '25px',
    }

    return (
        <div>
            <div>
                <div>
                    <h2 style={h2Style}>Portfolio</h2>
                    <h5 style={{fontFamily: 'monospace', fontSize: '25px', textAlign: 'center', marginBottom: '60px', marginTop: '-40px', color: '#d94470', fontWeight: 'bold' }}>Click the image to be sent to the repo!</h5>
                <section style={sectionStyles}>
                    
                        <h4 style={h4Style}>SVG Logo-Maker</h4>
                        

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/SVG-Logo-Maker"><img src="https://images2.imgbox.com/38/7d/RDqalfGx_o.jpg" style={imgStyles}></img></a>
                    </div>

                   
                        <h4 style={h4Style}>E-Commerce Back-End</h4>

                     <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/e-commerce-back-end-app"><img src="https://images2.imgbox.com/1f/fd/OknoY4LD_o.jpg" style={imgStyles}></img></a>
                    </div>

                    
                        <h4 style={h4Style}>Note Taker</h4>

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/Note-Taker-App"><img src="https://images2.imgbox.com/fb/d1/mLQBQXCm_o.jpg" style={imgStyles}></img></a>
                    </div>
                </section>

                <section style={sectionStyles}>
                         <h4 style={h4Style}>PWA Text Editor</h4>
                     
                    <div style={folioStyles}>   
                        <a href="https://github.com/LeesaM95/PWA-Text-Editor"><img src="https://images2.imgbox.com/de/1e/6iH575Hm_o.jpg" style={imgStyles}></img></a>
                    </div>

                    

                        <h4 style={h4Style}>README Generator</h4>

                    <div style={folioStyles}>   
                        <a href="https://github.com/LeesaM95/09-Professional-README-Generator"><img src="https://images2.imgbox.com/13/9f/n8pDVANg_o.jpg" style={imgStyles}></img></a>
                    </div>
                    
                    
                        <h4 style={h4Style}>Peace for Pandas</h4>

                    <div style={folioStyles}>    
                        <a href="https://github.com/LeesaM95/Peace-for-Pandas"><img src="https://images2.imgbox.com/75/d6/14qsoBrt_o.jpg" style={imgStyles}></img></a>
                    </div>
                </section>

                </div>
            </div>
        </div>
    )
}
export default Portfolio;