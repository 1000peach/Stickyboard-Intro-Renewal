// src/components/intro/IntroPageContent.js

import React from 'react';
import styled from 'styled-components';

import GetStarted from '../intro/GetStarted';
import SupportChart from '../intro/SupportChart';
import SupportMap from '../intro/SupportMap';

export default function IntroPageContent() {
    return (
        <IntroContent>
            <GetStarted />
            <SupportChart />
            <SupportMap />
        </IntroContent>
    );
}

const IntroContent = styled.div`
    padding: 0 50px;
    width: 100%;
`;
