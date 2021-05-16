import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledTitleHeader from '../../../elements/Common/StyledTitleHeader';
import { Constante } from '../../../../api/Helpers/Constante';

const TitleHeader = (props:any):JSX.Element => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        console.log("click title header");       
    };

    return (
        <StyledTitleHeader
            onClick={handleChange}
        >            
            <FontAwesome className="header--TitleIcon" name="titleIcon" size="5x" />   
            <div id="header--TitleName">
                <h3>{Constante.APP_TITLE}</h3>
            </div>         
        </StyledTitleHeader>
    )
};

export default TitleHeader;