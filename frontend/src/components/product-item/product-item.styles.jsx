import styled from 'styled-components'
import { Link } from "react-router-dom";

export const ProductItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 25%;
    border: 2px solid rgba(215, 215, 215, 0.7);
    margin: 0 70px 30px 0;
`

export const ProductImgContainer = styled.div`
    width: 100%;
    height: 190px;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & img {
        width: 80%;
        height: 90%;
    }
`

export const ProductLinkContainer = styled(Link)`
    text-decoration: none;
    margin: 20px 0;
    font-weight: 400;
    height: 40px;
    font-family: Montserrat;
    color: black;
    
    &:hover {
        text-decoration: underline;
    }
`

export const ProductInfContainer = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;

    & p {
        margin: 0;
        
        &:last-of-type{
            margin-top: 15px;
        }
    }

`