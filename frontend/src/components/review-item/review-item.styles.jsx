import styled from 'styled-components'
import Rating from "../rating/rating.component";

export const ItemContainer = styled.div`
    width: 100%;
    border: 2px solid  rgba(215, 215, 215, 0.7);
    border-right: none;
    border-left: none;
    margin-top: 5px;
    
    h4 {
        display: flex;
        justify-content: space-between;
        
        span {
            margin-right: 30px;
            font-weight: 400;
            font-size: 14px;
        }
    }
    
    p {
        word-wrap: break-word;
        font-family: Montserrat;
    }
`

export const RatingContainer = styled(Rating)`
    padding-left: 20px;
    border: 3px solid gray;
`