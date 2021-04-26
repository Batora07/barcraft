import React from 'react';

import StyledHomePage from '../../elements/HomePage/StyledHomePage';

const HomePage = (props:any):JSX.Element => {
    return (
        <StyledHomePage 
            right={props.right}
        >
            <img
                alt="bg"
                className="homePage--image"
                src='./images/placeholderMainPagePhoto.jpg'
            />
            <h3 className="homePage--title">Test titre H3 Barcraft</h3>
            <div className="homePage--div">
                <p className="homePage--p">
                    {props.messageText}
                </p>
                <div className="homePage--divider"></div>
            </div>
            {props.children}
        </StyledHomePage>
    )
}

export default HomePage;