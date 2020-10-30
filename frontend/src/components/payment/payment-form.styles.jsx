import styled from 'styled-components'
import CustomButton from "../custom-button/custom-button.component";

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
    
    form {
        display: flex;
        flex-direction: column;
    }
`

export const PaymentMethodContainer = styled.h2`
    font-weight: 400;
    font-family: Oswald;
    font-size: 23px;
    letter-spacing: 2px;
    margin-bottom: 25px;
`

export const CheckboxContainer = styled.div`
   margin: 5px 0;
   
   input: {
    padding-right: 5px;
   }
`
export const ButtonContainer = styled(CustomButton)`
    margin-top: 20px;
    width: 40%;
`