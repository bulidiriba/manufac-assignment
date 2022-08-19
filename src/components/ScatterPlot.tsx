import React from 'react';
import ReactECharts from 'echarts-for-react';
import wineData from '../data/Wine-Data.json'

// Read Color Intensity and Hue from json file
// create data variable which holds the list value for color intensity and hue
let data: any = []
for (let d of wineData) {
    let singleData = []
    singleData.push(Number(d['Color intensity'])) // add color intensity first so that it will take the horizontal axis
    singleData.push(Number(d.Hue)) // add hue next, so that it will take the vertical axis
    data.push(singleData)
}


const ScatterPlot: React.FC = () => {
    const options = {
        title: {
            text: 'Color Intensity Vs Hue',
            left: 'center'
        },
        xAxis: {
            type: 'value',
            name: 'Color Intensity',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
                fontSize: 15
            },
        },
        yAxis: {
            type: 'value',
            name: 'Hue',
            nameLocation: 'middle',
            nameGap:16,
            nameTextStyle: {
                fontSize: 15,
            },
        },
        series: [
            {
                data: data,
                type: 'scatter',
                smooth: true,
                name: 'hue'
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return <ReactECharts option={options} />;
};

export default ScatterPlot;