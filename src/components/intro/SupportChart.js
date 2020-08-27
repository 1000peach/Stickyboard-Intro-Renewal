import React, { useState } from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import ChartRow from './ChartRow';
import BtnChangeChart from './BtnChangeChart';

export const CHART = 'CHART';
export const HIGH_CHART = 'HIGH_CHART';

export default function SupportChart() {
    const chartCnt = 4;
    const chartRowCnt = 2;
    const rowDivision = 2;

    const [chartMode, setChartMode] = useState(CHART);

    const onChangeChart = (mode) => {
        setChartMode(mode);
    };

    return (
        <ChartSection>
            <SectionTitle title="Supports various chart" />

            <BtnChangeChart
                currentMode={chartMode}
                mode={HIGH_CHART}
                onChange={onChangeChart}
            />
            <BtnChangeChart
                currentMode={chartMode}
                mode={CHART}
                onChange={onChangeChart}
            />

            <ChartRow
                chartMode={chartMode}
                index={0}
                cnt={chartCnt}
                rowDivision={rowDivision}
            />
            <ChartRow
                chartMode={chartMode}
                index={chartCnt}
                cnt={chartCnt * chartRowCnt}
                rowDivision={rowDivision}
            />
        </ChartSection>
    );
}

const ChartSection = styled.section`
    padding: 50px 0;
    margin: auto;

    max-width: 1250px;
    width: 100%;
    height: 650px;
`;
