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
        { i: 'HighchartsScatterChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 8, y: 12, w: 4, h: 6 },
    ],
    md: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 8, y: 12, w: 4, h: 6 },
    ],
    sm: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 24, w: 8, h: 6 },
        { i: 'HighchartsBoxPlot', x: 4, y: 6, w: 4, h: 6 },
    ],
    xs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 6, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 6, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 6, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 6, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 36, w: 6, h: 6 },
        { i: 'HighchartsTreeMap', x: 0, y: 42, w: 6, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 48, w: 6, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 36, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 0, y: 42, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 48, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 4, h: 6 },
    ],
};

const initialHighBlocks = [
    { i: 'HighchartsLineChart' },
    { i: 'HighchartsBarChart' },
    { i: 'HighchartsPieChart' },
    { i: 'HighchartsPolarChart' },
    { i: 'HighchartsAreaChart' },
    { i: 'HighchartsScatterChart' },
    { i: 'HighchartsTreeMap' },
    { i: 'HighchartsStreamGraph' },
    { i: 'HighchartsBoxPlot' },
];

const styles = makeStyles({
    appBar: {
        background: 'none',
    },
    chart: {
        margin: '0 0 0 auto',
    },
    highCharts: {
        float: 'right',
    },
});

export default function SupportChart(props) {
    const classes = styles();
    const [chartMode, setChartMode] = useState(CHART);

    const a11yProps = (index) => {
        return {
            id: `chart-tab-${index}`,
            'aria-controls': `chart-tabpanel-${index}`,
        };
    };

    const handleChange = (event, newValue) => {
        setChartMode(newValue);
    };

    return (
        <ChartSection>
            <SectionTitle title="Supports various chart" />
            <small>
                For more charts, please see the chart menu of components.
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
                        <Tab className={classes.chart} label="Chart" />
                        <Tab
                            className={classes.highCharts}
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
    return (
        <Typography component="div" hidden={value !== index}>
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

const ChartSection = styled.section`
    margin: auto;
    padding: 50px 0;
    max-width: 1350px;
    width: 100%;

    & small {
        margin: 0 0 0 25px;
        font-size: 15px;
    }
`;
