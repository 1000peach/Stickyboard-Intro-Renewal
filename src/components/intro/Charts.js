import React from 'react';
import styled from 'styled-components';

import { introImgPath } from './ChartRow';

export default function Charts({ chartsInfo }) {
    return (
        <ChartsDiv>
            {chartsInfo.map((chartInfo, i) => (
                <Chart key={`chart-${i + 1}`}>
                    <div>
                        <ChartName name={chartInfo.name}>
                            {chartInfo.name}
                        </ChartName>
                        <ChartImage
                            src={`${introImgPath}/${chartInfo.fileName}`}
                            alt="chart image"
                        />
                    </div>
                </Chart>
            ))}
        </ChartsDiv>
    );
}

const ChartsDiv = styled.div`
    width: 50%;
    display: flex;
`;

const Chart = styled.div`
    position: relative;
    width: 50%;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        padding-top: 60%;
    }

    & div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    & div:hover p {
        opacity: 1;
    }
`;

const ChartName = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-100%);

    margin-top: 0;
    margin-bottom: 0;
    width: 100%;

    text-align: center;
    font-weight: bold;
    opacity: 0;

    transition: all 0.2s ease-in-out;
`;

const ChartImage = styled.img`
    width: 100%;
`;
