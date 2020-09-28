import styled from 'styled-components'

export const Hr = styled.hr`
    position: absolute;
    top: 85%; 
    left: 10.5%;
    width: 19vw; 
    height: 4px;    
    background: #1abc9c;
    border-radius: 3px;
    margin: auto; 
    margin-bottom: 2px;
    transform: ${({ animation }) => (animation ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 1s ease-in-out; 

    @media screen and (max-width: 801px) {
        left: 14%;
    }

    @media screen and (max-width: 639px) {
        width: 30vw;
    }

    @media screen and (max-width: 509px) {
        top: 95%;
        left: 16%;
    }
`
