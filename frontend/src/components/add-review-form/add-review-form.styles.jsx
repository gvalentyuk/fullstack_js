import styled from 'styled-components'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from 'react-router-dom'

export const AddReviewFormContainer = styled.form`
    width: 30%;
    border: 2px solid  rgba(215, 215, 215, 0.7);
    margin-bottom: 20px;
    margin-right: 5vw;
    display: flex;
    justify-content: center;
    height: auto;
`

export const FormContentContainer = styled.div`
    width: 80%;
`

export const InputContainer = styled(FormInput)`
    margin: 15px 0;
    font-size: 14px;
    width: 100%;
`

export const SelectContainer = styled.select`
    margin: 15px 0;
    width: 100%;
    height: 20px;
    font-family: Montserrat;
`

export const ButtonContainer = styled(CustomButton)`
    margin: 0 auto;
    margin-bottom: 20px;
`

export const LoginContainer = styled.p`
    height: 100px;
    margin-top: 40px;
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
    color: rgba(215, 215, 215, 0.7);
    transition: 0.2s;
    
    &:hover{
        color: black;
    }
`