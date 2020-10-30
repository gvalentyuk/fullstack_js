import React from 'react'

import { ItemContainer, RatingContainer } from "./review-item.styles";

const ReviewItem = ({review}) => {
    let date = new Date(review.createdAt).toLocaleString().split(',')[0]
    return (
        <ItemContainer>
           <h4>{review.name} <span>{date}</span></h4>
            <RatingContainer value={review.rating}/>
           <p>{review.comment}</p>
        </ItemContainer>
    )
}

export default ReviewItem