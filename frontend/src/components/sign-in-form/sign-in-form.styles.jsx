import styled from 'styled-components'
import CustomButton from "../custom-button/custom-button.component";
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    width: 30%;
`

export const ErrorContainer = styled.p`
    width: 80%;
    line-height: 50px;
    background: rgba(255,0,0, 0.5);
    color: white;
    font-family: Montserrat;
    font-size: 14px;
    padding-left: 10px;
`

export const ButtonContainer = styled(CustomButton)`
    width: 80%;
    font-size: 20px;
    margin: 0 auto;
`

export const RegistrationContainer = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: black;
    margin-top: 15px;
    width: 10%;
    cursor: pointer;
    font-family: Montserrat;
    
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