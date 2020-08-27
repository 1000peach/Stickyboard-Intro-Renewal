import React from 'react';
import styled from 'styled-components';

import { CHART, HIGH_CHART } from './SupportChart';
import Charts from './Charts';

export const introImgPath = '../../static/image/intro';

export const chartsInfo = {
    CHART: [
        { fileName: 'chart1.PNG', name: 'Line Chart' },
        { fileName: 'chart2.PNG', name: 'Multi Line Chart' },
        { fileName: 'chart3.PNG', name: 'Bar Chart' },
        { fileName: 'chart4.PNG', name: 'Stacked Bar Chart' },
        { fileName: 'chart5.PNG', name: 'Scatter Chart' },
        { fileName: 'chart6.PNG', name: 'Tree Chart' },
        { fileName: 'chart7.PNG', name: 'Tiny Chart' },
        { fileName: 'chart8.PNG', name: 'Pie Chart' },
    ],
    HIGH_CHART: [
        { fileName: 'highchart1.PNG', name: 'Line Chart' },
        { fileName: 'highchart2.PNG', name: 'Bar Chart' },
        { fileName: 'highchart3.PNG', name: 'Pie Chart' },
        { fileName: 'highchart4.PNG', name: 'Box Plot' },
        { fileName: 'highchart5.PNG', name: 'Polar Chart' },
        { fileName: 'highchart6.PNG', name: 'Area Chart' },
        { fileName: 'highchart7.PNG', name: 'Scatter Chart' },
        { fileName: 'highchart8.PNG', name: 'Tiny Chart' },
    ],
};

export default function ChartRow(props) {
    return (
        <ChartRowDiv>
            <Charts
                chartsInfo={chartsInfo[props.chartMode].slice(
                    props.index,
                    props.cnt - props.rowDivision
                )}
            />
            <Charts
                chartsInfo={chartsInfo[props.chartMode].slice(
                    props.index + props.rowDivision,
                    props.cnt
                )}
            />
        </ChartRowDiv>
    );
}

const ChartRowDiv = styled.div`
    width: 100%;
    display: flex;
`;
