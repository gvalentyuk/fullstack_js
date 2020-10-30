import styled from 'styled-components'
import CustomButton from "../../components/custom-button/custom-button.component";

export const CartContainer = styled.div`
    margin-bottom: 50px;
`

export const BasketHeaderContainer = styled.h2`
    font-weight: 500;
    font-family: Montserrat;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 25px;
`

export const TotalPriceContainer = styled.div`
    margin-top: 5vh;
    width: 70%;
    display: flex;
   justify-content: space-between;
    
    
    & p {
        text-align: right;
        font-size: 20px;
        font-family: Montserrat;
    }
`

export const EmptyCartContainer = styled.p`
        margin-top: 50px;
        width: 70%;
        text-align: left;
        font-size: 20px;
        font-family: Montserrat;
`

export const ButtonContainer = styled(CustomButton)`
    width: 40%;
`