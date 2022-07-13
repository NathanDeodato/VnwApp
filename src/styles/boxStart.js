import styled from "styled-components";

export const BoxStart = styled.div`
    width: 100%;
    height: 85vh;

    display: flex;
    flex-direction: column;

    background-color: #0F2260;
    /* background: transparent url('src\assets\backgroundBoxStart.png') 0% 0% no-repeat padding-box; */
`

export const StartTitleBox = styled.div`
    width: 100%;

    display: flex;

    margin-left: 10%;
`

export const StartTitle = styled.h1`
    width: 90%;

    display: flex;
    align-items: center;
    
    position: relative;
    margin-left: 2%;

    color: #FFAC2D;
    font-size: 3em;
`
export const TitleColor = styled.p`
    display: flex;

    position: relative;
    margin-top: 3%;

    color: #FF611E;
    font-size: 3em;
`

export const WindowVnw = styled.div`
    width: 45%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    margin-top: 2%;
    margin-left: 10%;

    background-color: #fff;
    border-radius: 20px;
`

export const Win = styled.div`
    width: 10%;

    display: flex;
    justify-content: space-around;

    margin-top: 5%;
    margin-left: 3%;
`

export const Circle = styled.div`
    width: 1.8vw;
    height: 1.8vh;
    
    shape-outside: circle();
    clip-path: circle();

    background-color: #00145D;

    &:hover {
        cursor: pointer;
    }
`

export const HrWin = styled.hr`
    width: 85%;
    height: 0.6vh;

    position: relative;

    margin-top: 3%;
    margin-left: 3%;

    background-color: #00145D;
    border: none;
    border-radius: 20px;
`

export const TitleWin = styled.h2`
    position: relative;
    
    margin-top: 2%;
    margin-left: 3%;
    
    font-size: 2.8em;
    color: #00145D;
`

export const TextWin = styled.p`
    position: relative;

    margin-top: -5%;
    margin-left: 3%;

    font-size: 1.5em;
`

export const TextStart = styled.a`
    margin-top: 1%;
    margin-left: 10%;
    
    color: #FED5B2;
    font-size: 1.4em;
`
