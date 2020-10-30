import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { addAddress } from "../../redux/order/order.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {AddressContainer, AddressTitleContainer} from "./shipping-adress.styles";

const ShippingAddress = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const add = JSON.parse(localStorage.getItem('address'))
    const [address, setAddress] = useState(add.address || '')
    const [city, setCity] = useState(add.city || '')
    const [postalCode, setPostalcode] = useState(add.postalcode || '')
    const [country, setCountry] = useState(add.country || '')

    const submitHandler = e => {
        e.preventDefault()
        dispatch(addAddress({address, city, postalCode, country}))
        history.push('/payment')
    }

    return (
        <AddressContainer>
            <AddressTitleContainer>Адресс доставки:</AddressTitleContainer>
            <form onSubmit={submitHandler}>
                <FormInput
                    label={'Адресс'}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <FormInput
                    label={'Город'}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <FormInput
                    label={'Страна'}
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <FormInput
                    label={'Почтовый индекс'}
                    value={postalCode}
                    onChange={e => setPostalcode(e.target.value)}
                />
                <CustomButton type={'submit'}>СОХРАНИТЬ И ПРОДОЛЖИТЬ</CustomButton>
            </form>
        </AddressContainer>
    )
}

export default ShippingAddress