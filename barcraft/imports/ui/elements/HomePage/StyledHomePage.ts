import styled, {css} from 'styled-components';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.homePage.color.grey};

    ${props => props.right && css `
        width: 100%;
        height: 100%;
    `}

    .homePage--image {
        width: 25rem;
        height: 25rem;
        margin-bottom: 2.8rem;
    }

    .homePage--title {
        font-size: 3.2rem;
        margin-bottom: 1.8rem;
        color: ${({theme}) => theme.homePage.color.darkGrey};
        font-weight: 300;
    }

    .homePage--div {
        margin-bottom: 3rem;
        width: 42rem;
    }

    .homePage--p {
        text-align: center;
        color: ${({theme}) => theme.homePage.color.mediumGrey};
        font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 3.4rem;
    }

    .homePage--divider {
        width: 100%;
        height: 0.2rem;
        background: ${({theme}) => theme.homePage.color.lightGrey};
        margin-bottom: 0.1 rem;
    }
`;

export default StyledHomePage;