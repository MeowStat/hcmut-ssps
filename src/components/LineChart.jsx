import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";

const LineChart = () => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 40, right: 30, bottom: 100, left: 40 }}
        xScale={{ 
            type: 'linear',
            min: 4.5,
            max: 10.5,
            stacked: false,
            reverse: false
         }}
        // xFormat=" >-0d"
        yScale={{
            type: 'linear',
            min: 0,
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        // yFormat=" >-20.2%"
        axisBottom={{
            tickValues: [5, 6, 7, 8, 9, 10],
            tickSize: 0,
            tickPadding: 15,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickValues: [0, 20, 40, 60, 80, 100],
            tickSize: 0,
            tickPadding: 25,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        colors={{ scheme: 'category10' }}
        enablePoints={false}
        enableTouchCrosshair={true}
        useMesh={true}
    />
  );
};

export default LineChart;
