import React, { useEffect } from 'react';

import {
    InputContainer,
    Label,
    InputField
} from '../styles';

import { InputProps } from '../types';
import { labels } from '../utils';

export const Input: React.FC<InputProps> = (props) => {
    const { id, type, refProp, isEmpty, handlerOnChange, handlerOnKeyPress } = props;

    return (
        <InputContainer>
            <InputField
                id={id}
                type={type}
                ref={refProp}
                onChange={handlerOnChange}
                onKeyPress={(e) => handlerOnKeyPress(e)}
            />
            <Label htmlFor={id} isEmpty={isEmpty}>{labels[id]}</Label>
        </InputContainer>
    )
}