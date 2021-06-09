import React, { useRef, useState } from 'react';

import { userMock } from '../mock';

import {
    getError
} from './utils';

import {
    Wrapper,
    Container,
    FormGroup,
    Heading,
    Button,
    Tooltip,
    Error,
    Empty
} from './styles';

import { FormProps } from './types';

import { Input } from './Input';

export const Form: React.FC<FormProps> = (props) => {
    const { setIsAuthorized } = props;

    const [error, setError] = useState<boolean>(false);

    const [formState, setFormState] = useState({
        isEmptyLogin: true,
        isEmptyPassword: true,
    });

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { isEmptyLogin, isEmptyPassword } = formState;
    const isDisabled = isEmptyLogin || isEmptyPassword;

    const onSubmit = (): void => {
        const login = loginRef.current.value;
        const password = passwordRef.current.value;

        const error = getError(login, password, userMock);

        setIsAuthorized(!error);
        setError(error);
    }

    const handlerOnChange = (): void => {
        const isEmptyLogin = loginRef.current === null || loginRef.current.value === '';
        const isEmptyPassword = passwordRef.current === null || passwordRef.current.value === '';

        setFormState({ isEmptyLogin, isEmptyPassword });
        setError(false);
    }

    const handlerOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        const isDisabled = isEmptyLogin || isEmptyPassword;

        if (e.key === 'Enter') {
            if (!isDisabled) {
                onSubmit();
            }

            if (isEmptyLogin) {
                document.getElementById('login').focus();
            }

            if (isEmptyPassword) {
                document.getElementById('password').focus();
            }
        }
    }

    return (
        <Wrapper>
            <Container>
                <Heading>Введите логин и пароль</Heading>
                <FormGroup>
                    <Input
                        id={'login'}
                        type={'login'}
                        refProp={loginRef}
                        isEmpty={isEmptyLogin}
                        handlerOnChange={handlerOnChange}
                        handlerOnKeyPress={handlerOnKeyPress}
                    />
                    <Input
                        id={'password'}
                        type={'password'}
                        refProp={passwordRef}
                        isEmpty={isEmptyPassword}
                        handlerOnChange={handlerOnChange}
                        handlerOnKeyPress={handlerOnKeyPress}
                    />
                    <Button onClick={onSubmit} disabled={isDisabled}>Войти</Button>
                </FormGroup>
                <Tooltip>Тестовый логин: "{userMock.login}", пароль: "{userMock.password}"</Tooltip>
                {error ? <Error>Неверный логин и/или пароль!</Error> : <Empty></Empty>}
            </Container>
        </Wrapper>
    );
}