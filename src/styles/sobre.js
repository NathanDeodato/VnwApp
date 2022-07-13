import styled from "styled-components";

export const Sobre = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    margin-top: 5%;
`

export const LogoBox = styled.div`
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SobreBox = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VnwLogo = styled.img`
    width: 22vw;
    height: 32vh;

    &:hover {
        cursor: pointer;

        width: 22.5vw;
        height: 32.5vh;
    }
`

export const SobreTitle = styled.h2`
    color: #0F2260;
    font-size: 2.5em;
`

export const SobreText = styled.p`
    width: 80%;

    font-size: 1.1em;
    font-weight: 500;
`
