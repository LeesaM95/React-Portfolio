import React from 'react';
import Nav from '../Nav';


const Header = (props) => {
    const {currentTab, handleTabChange} = props;

    return (
        <header style={{height: 300, }}>
           
            <Nav>
                currentTab={currentTab}
                handleTabChange={handleTabChange}
            </Nav>
        </header>
    )
}

export default Header;