// src/components/intro/IntroSection.js

import React from 'react';
import styled from 'styled-components';

import IntroTitle from './IntroTitle';

export default function IntroSection({ children, title }) {
    return (
        <Section>
            <IntroTitle title={title} />
            {children}
        </Section>
    );
}

const Section = styled.section`
    margin: 100px auto;

    display: flex;
    flex-direction: column;

    max-width: 1350px;
    width: 100%;
    min-height: 850px;

    & small {
        margin: 0 0 0 25px;
        font-size: 15px;
    }
`;
