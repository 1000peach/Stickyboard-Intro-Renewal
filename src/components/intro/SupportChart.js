// src/components/intro/SupportChart.js

import React, { useState } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SectionTitle from './SectionTitle';
import PageBaseContainer from 'redux/containers/PageBaseContainer';

export const CHART = 0;
export const HIGH_CHART = 1;

const initialChartLayout = {
    lg: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 6, h: 7 },
        { i: 'RechartsBarChart', x: 0, y: 19, w: 6, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 25, w: 6, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 13, w: 6, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 31, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 24, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
    ],
};

const initialChartBlocks = [
    { i: 'RechartsLineChart' },
    { i: 'RechartsMultiLineChart' },
    { i: 'RechartsBarChart' },
    { i: 'RechartsStackedBarChart' },
    { i: 'RechartsComposedChart' },
    { i: 'RechartsAreaChart' },
];

const initialHighLayout = {
    lg: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 4, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 6, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 6, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 6, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 6, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
    ],
};

const initialHighBlocks = [
    { i: 'HighchartsLineChart' },
    { i: 'HighchartsBarChart' },
    { i: 'HighchartsPieChart' },
    { i: 'HighchartsPolarChart' },
    { i: 'HighchartsAreaChart' },
    { i: 'HighchartsBoxPlot' },
];

export const tabStyles = makeStyles({
    appBar: {
        background: 'none',
    },
    firstLabel: {
        margin: '0 0 0 auto',
    },
    secondLabel: {
        float: 'right',
    },
});

export default function SupportChart() {
    const [chartMode, setChartMode] = useState(CHART);
    const classes = tabStyles();

    const handleChange = (event, newValue) => {
        setChartMode(newValue);
    };

    return (
        <ChartSection>
            <SectionTitle title="Supports various chart" />
            <small>
                For more charts, please see the
                {chartMode === CHART ? " 'Chart' " : " 'HighCharts' "}
                menu of components.
            </small>
            <div>
                <AppBar
                    position="static"
                    elevation={0}
                    className={classes.appBar}>
                    <Tabs
                        value={chartMode}
                        onChange={handleChange}
                        aria-label="chart tabs">
                        <Tab className={classes.firstLabel} label="Chart" />
                        <Tab
                            className={classes.secondLabel}
                            label="HighCharts"
                        />
                    </Tabs>
                </AppBar>
                <TabPanel value={chartMode} index={CHART}>
                    <PageBaseContainer
                        initialLayout={initialChartLayout}
                        initialBlocks={initialChartBlocks}
                    />
                </TabPanel>
                <TabPanel value={chartMode} index={HIGH_CHART}>
                    <PageBaseContainer
                        initialLayout={initialHighLayout}
                        initialBlocks={initialHighBlocks}
                    />
                </TabPanel>
            </div>
        </ChartSection>
    );
}

function TabPanel({ value, index, children }) {
    if (value !== index) {
        return null;
    }
    return (
        <Typography component="div">
            <Box>{children}</Box>
        </Typography>
    );
}

export const ChartSection = styled.section`
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
