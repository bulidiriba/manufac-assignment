import React from 'react';
import ReactECharts from 'echarts-for-react';
import wineData from '../data/Wine-Data.json'

// get the category of alchol from data and add to dictionary as key
let dict: any = {}
for (let d of wineData) {
    dict[d.Alcohol] = []
}

// add the list of Malic Acid value under each category of alchol as dictionay value
for (let d of wineData) {
    let dd = dict[d.Alcohol];
    dd.push(d['Malic Acid'])
    dict[d.Alcohol] = dd;
}

// calculate the average of malic acid under each alchol category and replace the dictionary value with average
for (let category in dict) {
    const average =dict[category].reduce((a: number, b: number) => a + b, 0) / dict[category].length;
    dict[category] = average.toFixed(2)
}

// now extract both list of alchol category and list of malic acid average from the dictionary
let alcholCategory: any = []
let malicAcidAvg: any = []
for (let category in dict) {
    alcholCategory.push(category)
    malicAcidAvg.push(Number(dict[category]))
}

const BarCharts: React.FC = () => {
    const options = {
        title: {
            text: 'Alchol Category Vs Malic Acid',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: alcholCategory,
            name: 'Alchol Category',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
                fontSize: 15
            },
        },
        yAxis: {
            type: 'value',
            name: 'Malic Acid',
            nameLocation: 'middle',
            nameGap:16,
            nameTextStyle: {
                fontSize: 15,
            },
        },
        series: [
            {
                data: malicAcidAvg,
                type: 'bar',
                smooth: true,
                name: 'malic acid avg'
            },
        ],
        tooltip: {
            trigger: 'axis',
        },

    };

    return <ReactECharts option={options} />;
};

export default BarCharts;