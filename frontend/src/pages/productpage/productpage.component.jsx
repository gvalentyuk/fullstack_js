import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {startFetchingProductAsync} from "../../redux/products/products.actions";
import {startToAddCartAsync} from "../../redux/cart/cart.actions";
import ReviewList from "../../components/review-list/review-list.component";
import Rating from "../../components/rating/rating.component";
import LoaderBackdrop from "../../components/loader/loader.component";
import {
    LinkContainer, ProductContainer, ImageContainer, ProductPageContainer,
    InformationContainer, OptionsContainer, ButtonContainer
} from './productpage.styles'

const ProductPage = ({match, history}) => {
    const dispatch = useDispatch()

    const {product, productLoading} = useSelector(state => state.products)
    const {cart} = useSelector(state => state.cart)
    const {user} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(startFetchingProductAsync(match.params.id))
    }, [dispatch, match.params.id])

    const inCart = cart.some(item => item._id === product._id)
    const isReviewed = product.reviews.some(item => item.user === user.id)

    if (productLoading) {
        return <LoaderBackdrop/>
    }

    return (
        <ProductPageContainer>
            <LinkContainer to={'/'}>Вернуться назад</LinkContainer>
            <ProductContainer>
                <ImageContainer>
                    <img src={product.image} alt={product.name}/>
                </ImageContainer>
                <InformationContainer>
                    <h3>{product.name}</h3>
                    <Rating value={product.rating}/>
                    <p>Количество отзывов: {product.numReviews} </p>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </InformationContainer>
                <OptionsContainer>
                    <p>${product.price}</p>
                    <p>{product.countInStock > 0 ? 'В наличии' : 'Отсутствует'}</p>
                    {
                        !user.name? <p>Войдите чтобы добавить в корзину.</p>:
                        inCart ?
                            <ButtonContainer inverted
                                             onClick={() => history.push('/cart')}
                            >В КОРЗИНЕ >></ButtonContainer>
                            :
                            <ButtonContainer
                                onClick={() => dispatch(startToAddCartAsync(product, user.token))}
                            >ДОБАВИТЬ В КОРЗИНУ</ButtonContainer>
                    }
                </OptionsContainer>
            </ProductContainer>
            <ReviewList isReviewed={isReviewed} id={product._id} reviews={product.reviews} user={user}/>
        </ProductPageContainer>
    )
}

export default ProductPage