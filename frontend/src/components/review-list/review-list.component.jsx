import React from 'react'

import AddReviewForm from "../add-review-form/add-review-form.component";
import ReviewItem from "../review-item/review-item.component";
import {ReviewListHeaderContainer, ReviewListContainer, Reviews, ListContainer} from "./review-list.styles";

const ReviewList = ({reviews, user, id, isReviewed}) => {
    return (
        <ReviewListContainer>
            <ListContainer>
                <ReviewListHeaderContainer>Отзывы:</ReviewListHeaderContainer>
                <Reviews>
                    {
                        reviews.length ?
                            reviews.map(review => {
                                return (
                                    <ReviewItem key={review._id} review={review}/>
                                )
                            }) :
                            <p>Здест пока нет отзывов.</p>
                    }
                </Reviews>
            </ListContainer>
            {user && <AddReviewForm isReviewed={isReviewed} id={id}/>}
        </ReviewListContainer>
    )
}

export default ReviewList