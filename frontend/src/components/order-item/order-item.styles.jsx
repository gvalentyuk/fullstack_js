import styled from 'styled-components'

export const CartItemContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(215, 215, 215, 0.7); 

`

export const ImageContainer = styled.div`
    width: 15%;
    
    & img {
        width: 100%;   
    }
`

export const InfContainer = styled.p`
    font-size: 15px;
    font-weight: 400;
`