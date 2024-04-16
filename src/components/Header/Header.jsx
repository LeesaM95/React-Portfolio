import React from 'react';
import Nav from '../Nav';


const Header = (props) => {
    const {currentTab, handleTabChange} = props;

    return (
        <header>
            <div>
                <div>
                    <h1>Leesa Gonzalez's <span>Portfolio</span></h1>
                </div>
            </div>
            <Nav>
                currentTab={currentTab}
                handleTabChange={handleTabChange}
            </Nav>
        </header>
    )
}

module.exports = Header;