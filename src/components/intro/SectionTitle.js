// src/components/intro/SectionTitle.js

import React from 'react';
import styled from 'styled-components';

import { Circle } from './GetStarted';

export default function SectionTitle({ title }) {
    return (
        <Title>
            <Circle>{title}</Circle>
        </Title>
    );
}

const Title = styled.p`
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: bold;
`;
