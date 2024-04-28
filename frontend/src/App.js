import {useRef} from 'react';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Line, getElementAtEvent } from 'react-chartjs-2';


ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels : ['Mon', 'Tue', 'Wed'],
    datasets : [{
      label: 'Weekdays',
      data: [30, 33, 66],
      borderColor: 'aqua',
      backgroundColor: 'aqua',
      tension: 0.4,
      link: ['https://www.chartjs.org','https://www.chartjs3.com','https://www.google.com']
    }]
  }

  const options = {

  }

  const chartRef = useRef();
  const onClick = (event) => {
    if(getElementAtEvent(chartRef.current, event).length>0){
      window.open('https://www.chartjs3.com','_blank')
    }
  }


  return (
      <div className='App'>
        <h1 style={ {padding: '20px'} }>Clickable Links on Line Cahrt with React Chart JS | REACTCHART.COM</h1>
        <div style={{ width:'80%', padding: '20px', }}>
          <Line
            data = {data}
            options = {options}
            onClick = {onClick}
            ref = {chartRef}
          >
            
          </Line>
        </div>
      </div>
  );
}

export default App;
