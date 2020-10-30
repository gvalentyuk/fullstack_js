import styled from 'styled-components'
import CustomButton from "../custom-button/custom-button.component";

export const ProfileItemContainer = styled.div`
    height: 50px;
    width: 110%;
    background: rgba(215, 215, 215, 0.7);
    display:flex;
    margin-bottom: 20px;
    justify-content: space-around;
    align-items: center;
`

export const ButtonContainer = styled(CustomButton)`
    width: 20%;
    height: 40px;
    align-items: center;
`