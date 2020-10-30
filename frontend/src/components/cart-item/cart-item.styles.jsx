import styled from 'styled-components'

export const CartItemContainer = styled.div`
    width: 70%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(215, 215, 215, 0.7); 
    
    p i {
        cursor: pointer;
        
        &:hover{
            color: rgba(100, 100, 100, 0.7); 
        }
    }
`

export const ImageContainer = styled.div`
    width: 20%;
    
    & img {
        width: 100%;   
    }
`