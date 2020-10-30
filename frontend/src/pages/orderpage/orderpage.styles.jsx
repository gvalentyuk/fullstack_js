import styled from 'styled-components'

export const OrderPageContainer = styled.div`
    position: relative;
    
    span {
        font-family: Montserrat;
    }
`

export const OrderHeaderContainer = styled.h2`
    font-weight: 500;
    font-family: Montserrat;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 25px;
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

export const OrderUserContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid rgba(215, 215, 215, 0.7);
    
    h4 {
       font-family: Montserrat;
       font-weight: 400; 
    }
`

export const AddressContainer = styled.p`
     width: 60%;
     border-bottom: 2px solid rgba(215, 215, 215, 0.7);
    
    h4 {
       font-family: Montserrat;
       font-weight: 400; 
    }
`

export const ConfirmOrder = styled.div`
    position: absolute;
    top: 0;
    right: 30%;
    padding: 20px;
    border: 2px solid rgba(215, 215, 215, 0.7);
    
    p {
        border-bottom: 2px solid rgba(215, 215, 215, 0.7);
    }
    
    p span {
        font-family: Montserrat;
    }
`

export const OrderItems = styled.div`
    margin-bottom: 40px;
`