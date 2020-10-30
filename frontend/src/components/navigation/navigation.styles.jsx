import styled from 'styled-components'
import { Link } from "react-router-dom";

export const AsideContainer = styled.aside`
    width: 220px;
    position:fixed;
    left:0;
    height:100vh;
    box-shadow: 0 0 0 5px black;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const NameContainer = styled(Link)`
    font-size: 25px;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${({isdark, theme}) =>isdark?theme.dark.onBackgroundAlt: theme.light.onBackgroundAlt};
    text-decoration: underline;
    border-bottom: 2px solid black;
    margin: 50px 0 70px 0;
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 10px 0;  
    
    & .fas {
        margin-right: 10px;
    }
    
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: black;
        transition: width .3s;
    }
    
    &:hover::after {
        width: 100%;
        transition: width .3s;
    }
`

export const AdminContainer = styled(Link)`
    position: absolute;
    bottom: 70px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 10px 0;
    
     & .fas {
        margin-right: 10px;
    }
    
     &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: black;
        transition: width .3s;
    }
    
    &:hover::after {
        width: 100%;
        transition: width .3s;
    }
`