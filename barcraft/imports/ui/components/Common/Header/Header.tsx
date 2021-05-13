import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledHeader from '../../../elements/Common/StyledHeader';
import ButtonNavTab from './ButtonNavTab';
import TitleHeader from './TitleHeader';

const Header = (props:any):JSX.Element => {
    return (
        <StyledHeader>
            <TitleHeader />
            <ButtonNavTab />
        </StyledHeader>
    )
};

export default Header;