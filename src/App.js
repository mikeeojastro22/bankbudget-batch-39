import './App.css';
import Bank from './components/Bank/Bank';
import Budget from './components/Budget/Budget';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

function App() {
  return (
    <div className="App">
      <Bank />
      <Budget />
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />

      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['food', 'electricity', 'hobby'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [5000, 10000, 3000],
          },
        ]}
        width={500}
        height={300}
      />

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 5000, label: 'Food' },
              { id: 1, value: 1000, label: 'Gas' },
              { id: 2, value: 4000, label: 'Electricity' },
            ],
          },
        ]}
        width={400}
        height={200}
      />

    </div>
  );
}

export default App;
