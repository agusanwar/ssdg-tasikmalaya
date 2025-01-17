import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './data';

const chartSetting = {
  xAxis: [
    {
      label: 'Data Anggota',
    },
  ],
  width: 300,
  height: 300,
};

const xLabels = [
  '0',
  '5',
  '10',
  '25',
  '50',
  '75',
  '100',
];

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ data	: [xLabels], scaleType: 'band', }]}
      yAxis={[{ scaleType: 'band', dataKey: 'anggota', labelFontSize:6, tickFontSize:6 }]}
      series={[{ dataKey: 'seoul', label: 'Data Registrasi',labelFontSize:6 , valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
      
    />
  );
}