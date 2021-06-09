import { UserMock } from './types';


export const getError = (login: string, password: string, userMock: UserMock): boolean => {
    return userMock.login !== login && userMock.password !== password;
}

export const labels = {
    'login': 'Введите логин',
    'password': 'Введите пароль'
}