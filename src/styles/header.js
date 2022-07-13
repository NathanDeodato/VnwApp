import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 12vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #0F2260;
`

export const VnwNav = styled.img`
    width: 5vw;
    height: 3.5vw;

    position: relative;
    left: -5%;

    &:hover {
        cursor: pointer;

        width: 5.5vw;
        height: 4vw;
    }
`

export const Nav = styled.nav`
    width: 38%;

    margin-right: 20%;
`

export const Ul = styled.ul`
    width: 100%;

    display: flex;
    justify-content: space-around;
`

export const Li = styled.li`
    color: #fff;
    font-weight: 400;
    list-style-type: none;

    &:hover {
        cursor: pointer;
        
        font-weight: bold;
    }
`
