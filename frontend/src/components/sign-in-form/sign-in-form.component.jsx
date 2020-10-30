import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import { useHistory } from 'react-router-dom'

import { startLoginAsync } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";
import { FormContainer, ErrorContainer, ButtonContainer, Form, RegistrationContainer } from "./sign-in-form.styles";

const SignInForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(state => state.user)

    const submitHandler = e => {
        e.preventDefault()
        dispatch(startLoginAsync({email, password}))
    }

    if (user.user.name){
        history.push('/')
    }
    return (
        <FormContainer>
            { user.loginError && <ErrorContainer>{user.loginError}</ErrorContainer>}
            <Form onSubmit={submitHandler}>
                <FormInput
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label={'Адресс электронной почты'}
                />
                <FormInput
                    type={'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label={'Пароль'}
                />
                <ButtonContainer>Войти</ButtonContainer>
            </Form>
                <RegistrationContainer to={'/register'}>Регистрация</RegistrationContainer>
        </FormContainer>
    )
}

export default SignInForm