import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom'

import { startCreateProductAsync } from "../../redux/products/products.actions";
import {
    ButtonContainer,
    Form,
    FormContainer
} from "./add-product-form.styles";
import FormInput from "../form-input/form-input.component";

const AddProductForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState('')
    const [countInStock, setCountInStock] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        dispatch(startCreateProductAsync({
            name,
            brand,
            category,
            description,
            price,
            countInStock
        }, file, user.token, history.push('/admin')))
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <FormInput
                    value={name}
                    onChange={e => setName(e.target.value)}
                    label={'Название'}
                />
                <FormInput
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    label={'Бренд'}
                />
                <FormInput
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    label={'Категория'}
                />
                <FormInput
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    label={'Цена'}
                />
                <FormInput
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    label={'Описание'}
                />
                <FormInput
                    type={'file'}
                    onChange={e => setFile(e.target.files[0])}
                />
                <FormInput
                    value={countInStock}
                    onChange={e => setCountInStock(e.target.value)}
                    label={'Количество'}
                />
                <ButtonContainer>Добавить</ButtonContainer>
            </Form>
        </FormContainer>
    )
}

export default AddProductForm