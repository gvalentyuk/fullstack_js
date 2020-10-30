import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'

import {startRegisterAsync} from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";
import {FormContainer, ErrorContainer, ButtonContainer, Form, RegistrationContainer} from "./sign-up-form.styles";

const SignUpForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const user = useSelector(state => state.user)

    const submitHandler = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return
        }

        dispatch(startRegisterAsync({email, password, name}))
    }

    if (user.user.name) {
        history.push('/')
    }
    return (
        <FormContainer>
            {user.loginError && <ErrorContainer>{user.loginError}</ErrorContainer>}
            <Form onSubmit={submitHandler}>
                <FormInput
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label={'Адресс электронной почты'}
                />
                <FormInput
                    value={name}
                    onChange={e => setName(e.target.value)}
                    label={'Имя'}
                />
                <FormInput
                    type={'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label={'Пароль'}
                />
                <FormInput
                    type={'password'}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    label={'Повторите пароль'}
                />
                <ButtonContainer>Зарегестрироваться</ButtonContainer>
            </Form>
            <RegistrationContainer to={'/login'}>У меня уже есть аккаунт. <span>Войти?</span></RegistrationContainer>
        </FormContainer>
    )
}

export default SignUpForm