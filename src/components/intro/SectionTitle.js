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
    font-size: 28px;
    font-weight: bold;
`;
