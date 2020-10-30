import styled from 'styled-components'
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";

export const ProductPageContainer = styled.div`
    width: 100%;
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
    display: inline-block;
    color: black;
    font-size: 18px;
    margin-bottom: 40px;
    
    &:hover {
        text-decoration: underline;
    }
`

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

export const ImageContainer = styled.div`
    width: 40%;
    height: 400px;
    margin-right: 25px;
    
    & img {
        width: 100%;
    }
`

export const InformationContainer = styled.div`
    width: 280px;
    margin-right: 25px;
    
    & h3 {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 18px;
    }
    
    & p:nth-of-type(2) {
        padding: 15px 0;
        width: 90%;
        border-top: 2px solid rgba(215, 215, 215, 0.7);
        border-bottom: 2px solid rgba(215, 215, 215, 0.7);
    }
    
    & p:last-of-type {
        font-weight: 400;
        font-family: Montserrat;
    } 
`

export const OptionsContainer = styled.div`
    height: 180px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(215, 215, 215, 0.7);
    
    & p:first-of-type {
        width: 100%;
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(215, 215, 215, 0.7);
    }
`

export const ButtonContainer = styled(CustomButton)`
    width: 90%;
`