import styled, {css} from 'styled-components';

const StyledHeader = styled.div`
    z-index: 1000;
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #5f9ea0;
    color: #fff;
    position: fixed;
    top: 0;
    /* padding: 0 1.5rem; */

    h3 {
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

export default StyledHeader;