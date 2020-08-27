import React from 'react';
import styled from 'styled-components';

import GetStarted from '../intro/GetStarted';
import SupportChart from '../intro/SupportChart';

export default function IntroPageContent() {
    return (
        <IntroContent>
            <GetStarted />
            <SupportChart />
        </IntroContent>
    );
}

const IntroContent = styled.div`
    padding: 0 100px;
    width: 100%;
`;
