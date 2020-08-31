// src/components/intro/IntroPageContent.js

import React from 'react';
import styled from 'styled-components';

import GetStarted from './GetStarted';
import SupportChart from './SupportChart';
import SupportMap from './SupportMap';
import LayoutCustomization from './LayoutCustomization';

export default function IntroPageContent() {
    return (
        <IntroContent>
            <GetStarted />
            <SupportChart />
            <SupportMap />
            <LayoutCustomization />
        </IntroContent>
    );
}

const IntroContent = styled.div`
    padding: 0 50px;
    width: 100%;
`;
