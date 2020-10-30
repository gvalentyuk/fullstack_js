import React from 'react'
import Rating from "../rating/rating.component";

import { ProductItemContainer, ProductImgContainer, ProductInfContainer, ProductLinkContainer } from "./product-item.styles";

const ProductItem = ({item: {image, name, price, rating, numReviews, _id}}) => {
    return (
        <ProductItemContainer>
            <ProductImgContainer>
                <img src={image} alt={name}/>
            </ProductImgContainer>
            <ProductInfContainer>
                <ProductLinkContainer to={`/product/${_id}`}>{name}</ProductLinkContainer>
                <Rating value={rating} text={`${numReviews} отзывов`}/>
                <p>$ {price}</p>
            </ProductInfContainer>
        </ProductItemContainer>
    )
}

export default ProductItem