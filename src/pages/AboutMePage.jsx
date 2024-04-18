// About Me Page
// Must Include:
// recent photo/avatar of myself
// short bio about myself
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


export default function About() {
    const titleStyle = { 
        marginBottom: '30px', 
        marginLeft: '450px', 
        marginTop: '110px', 
        fontSize: '40px', 
        color: '#d94470',
        fontFamily: 'Pacifico, cursive',
     }

    const infoStack = {
        marginTop: '-280px',
        marginBottom: '20px',
        fontFamily: 'monospace',
        color: '#4a506d'
    }
    const imgStyle = {
        height: '400px',
        width: '400px',
        marginTop: '-80px',
        border: 'solid 5px #d94470',
        borderRadius: '100px'
    }

    return (
        <>

            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <h2 style={titleStyle}>About Me</h2>
                        <hr style={{ marginLeft: 450, width: 450 }}></hr>
                        <Image src="https://images2.imgbox.com/95/f2/jkPq8mhZ_o.jpg" style={imgStyle}></Image>
                    </Col>



                    <Col md={{ span: 8, offset: 4 }}>
                        <Stack direction="vertical" gap={2} style={infoStack}>
                            <p>Hello! My name is Leesa. I was born and raised in a small city in central Massachusetts about an hour outside of Boston, though I've called Eastern Pennsylvania 'home' since 2020.
                                I spent my childhood sketching away on loose-leaf computer paper and dreaming up fantastical stories about larger-than-life heroines
                                and great, sprawling fantasy realms (strange how I got into programming, I know). When I'm not pouring over work, I enjoy reading, writing, and playing video games.
                                <i>Sims 4</i>, <i>Stardew Valley</i>, <i>Animal Crossing</i>, and <i>A Little to The Left</i> are some of my favorite titles. I love the idea of traveling,
                                and hope to start visiting different countries in the next couple of years.
                            </p>
                            <p>
                                Currently, I work as a Unit Secretary in an Emergency Department. My job is to field calls,
                                faciliate communication between my emergency department providers and specialists,
                                sort through patient documents, faciliate patient transfers, and whatever else needs to be done for my providers and nurses.
                                My doc know that if they need to get a hold of someone fast, I'm their girl. I'm <i>very</i> annoying to specialists when they
                                don't answer in a timely fashion.
                            </p>
                            <p>
                                My job can be very challenging and rather thankless at times, but I enjoy helping my providers and nurses.
                                They work so hard and often deal with some really crummy situations and people, so, if I can make their job a little easier, I'm happy.
                                My job centers around computers and phones, so it's no surprise that I've grown curious about how the programs I use work. I've always been interested
                                in HTML and CSS, so it only made sense for me to further my knowledge.
                            </p>
                            <p>
                                At the time of writing this, I'm a little less than a month away from finishing my six month accelerated Programming course hosted through UCLA. It's been
                                incredibly challenging at times, and overwhelming at others, but overall incredibly rewarding whenever I figure out something I struggled with. I'm super grateful
                                for the opportunity, but I'm definitely eager to finish up and continue with my coding journey.
                            </p>
                            <p>
                                I like to think I'm a genuinely likeable person who's adaptable. I can be willful, and tend to take the leadership role when necessary. I'm not the kind of person
                                who enjoys being micromanaged or treated like a child, so if I'm treated that way, expect the same kind of energy in return. I like helping people, and I enjoy being
                                someone others can rely on, but don't expect me to be a pushover. Treat me with respect and I'll treat you the same. Who knows? If you manage to unlock my Tragic Backstory™,
                                you'll find I'm generally funny with a dash of chaos.
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Container></>
    )
}