import styled from 'styled-components';

import { LabelProps } from './types';

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 350px;
    max-width: 90%;
    box-shadow: 0px 0px 5px rgb(100,100,100);
`;

export const FormGroup = styled.div`
    padding: 10px 20px;
    box-sizing: border-box;
`;

export const Heading = styled.div`
    display: flex;
    height: 100px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 22px;
    background: linear-gradient(45deg, rgb(200, 200, 50), rgb(255, 100, 50));
    color: white;

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    height: 80px;
`;

export const Label = styled.label`
    position: absolute;
    top: ${(props: LabelProps) => props.isEmpty ? '50px;' : '25px;'}
    font-size: ${(props: LabelProps) => props.isEmpty ? '16px;' : '12px;'}
    font-weight: 300;
    transition: 0.5s;
    cursor: text;
`;

export const InputField = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    font-family: 'Roboto';
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgb(150, 150, 150);

    &:focus {
        border-bottom: 1px solid rgb(100, 100, 100);
    }
`;

export const Button = styled.button`
    width: 100%;
    height 40px;
    margin-top: 50px;
    background-color: rgb(25, 150, 50);
    border: 1px solid rgb(25, 150, 50);
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 16px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: rgb(25, 180, 50); 
    }

    &:disabled {
        background-color: white;
        color: black;
        cursor: inherit;
    }
`;

export const Tooltip = styled.span`
    display: block;
    padding: 20px 20px;

    @media screen and (max-width: 400px) {
        font-size: 12px;
    }
`;

export const Error = styled.div`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgb(255, 50, 50);
`;

export const Empty = styled.div`
    height: 50px;
`;