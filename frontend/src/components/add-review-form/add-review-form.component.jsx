import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {startCreateReviewAsync} from "../../redux/products/products.actions";
import {
    AddReviewFormContainer,
    InputContainer,
    FormContentContainer,
    ButtonContainer,
    SelectContainer,
    LinkContainer,
    LoginContainer
} from "./add-review-form.styles";

const AddReviewForm = ({id, isReviewed}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(1)

    const submitHandler = e => {
        e.preventDefault()
        dispatch(startCreateReviewAsync(id, {
            comment, rating
        }, user.token))
    }

    return (
        isReviewed ? null :
            <AddReviewFormContainer onSubmit={submitHandler}>
                {
                    isReviewed ?
                        <LoginContainer>Вы уже оставляли отзыв</LoginContainer>
                        :
                        !user.name ?
                            <LoginContainer><LinkContainer to={'/login'}>Войдите</LinkContainer> чтобы оставить
                                отзыв.</LoginContainer>
                            :
                            <FormContentContainer>
                                <h4>Оставьте отзыв:</h4>
                                <SelectContainer onChange={e => setRating(e.target.value)}>
                                    <option value="1">1-Ужасно</option>
                                    <option value="2">2-Низкое качество</option>
                                    <option value="3">3-Пойдет</option>
                                    <option value="4">4-Хорошо</option>
                                    <option value="5">5-Отлично</option>
                                </SelectContainer>
                                <InputContainer
                                    label={'Введите сообщение отзыва'}
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                />
                                <ButtonContainer>Отправить</ButtonContainer>
                            </FormContentContainer>
                }
            </AddReviewFormContainer>

    )
}

export default AddReviewForm