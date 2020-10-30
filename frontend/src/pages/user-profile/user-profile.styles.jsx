import styled from 'styled-components'

export const UserProfilePage = styled.div`
    width:100%;
`

export const ProfileHeaderContainer = styled.h2`
    font-weight: 500;
    font-family: Montserrat;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 25px;
`

export const InformationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const UserContainer = styled.div`
    border-right: 2px solid rgba(215, 215, 215, 0.7);
`

export const UserInformationContainer = styled.div`
    padding-right: 15px;
    
    h4 {
        font-size: 20px;
    }

    p {
        background: rgba(215, 215, 215, 0.7);
        padding: 5px;
        margin: 0;
        letter-spacing: 1px; 
    }
`

export const OrdersContainer = styled.div`
    margin-left: 50px;
`