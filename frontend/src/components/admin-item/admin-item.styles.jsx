import styled from 'styled-components'

export const AdminItemContainer = styled.div`
    width: 60%;
    margin-bottom: 5px;
    background-color: rgba(215, 215, 215, 0.7);
    display: flex;
    justify-content: space-around;
`

export const ImageContainer = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    
    img {
        width: 100%;
    }
`

export const ItemNameContainer = styled.p`
    font-size: 14px;
    margin-left: 40px;
    width: 20%;
    
    i {
        margin-left: 30%;
        cursor: pointer;
        
        &:hover {
            color: rgba(50, 50, 50, 0.9);
        }
    }
`
