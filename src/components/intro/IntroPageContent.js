import React from 'react';
import styled from 'styled-components';

import GetStarted from '../intro/GetStarted';

export default function IntroPageContent() {
    return (
        <IntroContent>
            <GetStarted />
        </IntroContent>
    );
}

const IntroContent = styled.div`
    padding: 0 50px;
    width: 100%;
`;
