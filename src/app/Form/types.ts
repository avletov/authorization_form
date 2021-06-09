import React from "react";

export interface FormProps {
    setIsAuthorized(value: boolean): void,
}

export interface UserMock {
    login: string,
    password: string
}

export interface InputProps {
    id: string,
    type: string,
    refProp: React.Ref<HTMLInputElement>,
    isEmpty: boolean,
    handlerOnChange(): void,
    handlerOnKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void
}

export interface LabelProps {
    isEmpty: boolean
}