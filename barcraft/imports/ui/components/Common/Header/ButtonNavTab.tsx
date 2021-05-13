import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledButtonNavTab from '../../../elements/Common/StyledButtonNavTab';

const ButtonNavTab = (props:any):JSX.Element => {
    const [state, setState] = React.useState<any>({
       tabOpen: false
    });

    const { tabOpen } = state;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        console.log("click nav tab = " + state.tabOpen);
        setState(
            prevState => (
                {                   
                    tabOpen: !state.tabOpen
                }
            )
        );
    };

    return (
        <StyledButtonNavTab>
            <FontAwesome 
                className="header--TabButton" 
                name="bars" 
                size="2x" 
                onClick={handleChange}
            /> 
        </StyledButtonNavTab>
    )
};

export default ButtonNavTab;