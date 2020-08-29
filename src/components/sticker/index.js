// src/components/sticker/index.js

import loadable from '@loadable/component';

// Recharts
const RechartsLineChart = loadable(() => import('./RechartsLineChart'));
const RechartsBarChart = loadable(() => import('./RechartsBarChart'));
const RechartsComposedChart = loadable(() => import('./RechartsComposedChart'));
const RechartsMultiLineChart = loadable(() => import('./RechartsMultiLineChart'));
const RechartsPieChart = loadable(() => import('./RechartsPieChart'));
const RechartsAreaChart = loadable(() => import('./RechartsAreaChart'));
const RechartsRadarChart = loadable(() => import('./RechartsRadarChart'));
const RechartsScatterChart = loadable(() => import('./RechartsScatterChart'));
const RechartsTinyChart = loadable(() => import('./RechartsTinyChart'));
const RechartsTreeMap = loadable(() => import('./RechartsTreeMap'));
const RechartsStackedBarChart = loadable(() =>
    import('./RechartsStackedBarChart')
);
// Highcharts
const HighchartsLineChart = loadable(() => import('./HighchartsLineChart'));
const HighchartsBarChart = loadable(() => import('./HighchartsBarChart'));
const HighchartsPieChart = loadable(() => import('./HighchartsPieChart'));
const HighchartsPolarChart = loadable(() => import('./HighchartsPolarChart'));
const HighchartsAreaChart = loadable(() => import('./HighchartsAreaChart'));
const HighchartsBoxPlot = loadable(() => import('./HighchartsBoxPlot'));

export default {
    Recharts: [
        {
            Name: 'RechartsLineChart',
            Description: 'RechartsLineChart sample',
            Component: RechartsLineChart,
        },
        {
            Name: 'RechartsBarChart',
            Description: 'RechartsBarChart sample',
            Component: RechartsBarChart,
        },
        {
            Name: 'RechartsComposedChart',
            Description: 'RechartsComposedChart sample',
            Component: RechartsComposedChart,
        },
        {
            Name: 'RechartsMultiLineChart',
            Description: 'RechartsMultiLineChart sample',
            Component: RechartsMultiLineChart,
        },
        {
            Name: 'RechartsPieChart',
            Description: 'RechartsPieChart sample',
            Component: RechartsPieChart,
        },
        {
            Name: 'RechartsAreaChart',
            Description: 'RechartsAreaChart sample',
            Component: RechartsAreaChart,
        },
        {
            Name: 'RechartsRadarChart',
            Description: 'RechartsRadarChart sample',
            Component: RechartsRadarChart,
        },
        {
            Name: 'RechartsScatterChart',
            Description: 'RechartsScatterChart sample',
            Component: RechartsScatterChart,
        },
        {
            Name: 'RechartsTinyChart',
            Description: 'RechartsTinyChart sample',
            Component: RechartsTinyChart,
        },
        {
            Name: 'RechartsTreeMap',
            Description: 'RechartsTreeMap sample',
            Component: RechartsTreeMap,
        },
        {
            Name: 'RechartsStackedBarChart',
            Description: 'RechartsStackedBarChart sample',
            Component: RechartsStackedBarChart,
        },
    ],
    Highcharts: [
        {
            Name: 'HighchartsLineChart',
            Description: 'HighchartsLineChart sample',
            Component: HighchartsLineChart,
        },
        {
            Name: 'HighchartsBarChart',
            Description: 'HighchartsBarChart sample',
            Component: HighchartsBarChart,
        },
        {
            Name: 'HighchartsPieChart',
            Description: 'HighchartsPieChart sample',
            Component: HighchartsPieChart,
        },
        {
            Name: 'HighchartsPolarChart',
            Description: 'HighchartsPolarChart sample',
            Component: HighchartsPolarChart,
        },
        {
            Name: 'HighchartsAreaChart',
            Description: 'HighchartsAreaChart sample',
            Component: HighchartsAreaChart,
        },
        {
            Name: 'HighchartsBoxPlot',
            Description: 'HighchartsBoxPlot sample',
            Component: HighchartsBoxPlot,
        },
    ],
};
