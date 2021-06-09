import React, { useState } from 'react';

import { Container } from './styles';

import { Form } from './Form';
import { Homepage } from './Homepage';

export const App: React.FC = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

    return (
        <Container>{
            isAuthorized ?
                <Homepage /> :
                <Form
                    setIsAuthorized={setIsAuthorized}
                />
        }</Container>
    );
}