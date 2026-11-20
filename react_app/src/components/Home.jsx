import { useState } from 'react'
import { useEffect } from 'react';
import { getTopTen } from '../service/TopTenService';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

const pad = {
  padding: "10px",
  textAlign: "center"
}

const parentDiv = {
  display: "flex"
}
const column = {
  flex: 1
}


const Home = () => {

  let [charData, setCharData] = useState([]);
  let [pieData, setPieData] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(
    () => {
      handleGetTopTen()
    }, []
  )

  let handleGetTopTen = () => {

    getTopTen().then(resp => {
      setCharData(resp.data)
      setPieData(resp.data.map((item, index) => ({
        id: index,
        value: item.amount,
        label: item.name
      })))
      setTotal(resp.data.reduce((sum, item) => sum + item.amount, 0))
    })
      .catch(err => console.log(err))
  }

  return (
    <div style={parentDiv}>
      <div style={column}>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: charData.map(item => item.name),
              scaleType: 'band',
            },
          ]}
          yAxis={[
            {
              valueFormatter: (value) => value.toString(),
              // valueFormatter: (value) => new Intl.NumberFormat('de-DE').format(value),
            },
          ]}
          series={[
            {
              data: charData.map(item => item.amount),
              label: 'Top 10',
              color: '#084b85',
            }
            ,]}
          height={450}
        />
      </div>
      <div style={column}>
        <LineChart
          xAxis={[{ scaleType: 'point', data: charData.map((item) => item.name) }]}
          series={[
            {
              data: charData.map((item) => item.amount),
              label: 'Top 10',
              color: '#8b9fb1',
            },
          ]}
          yAxis={[
            {
              valueFormatter: (value) => value.toString(),
            },
          ]}
          height={450}
        />
      </div>
      <div style={column}>
        <PieChart
          series={[
            {
              data: pieData,
              valueFormatter: (item) => {
                const percentage = total > 0 ? ((item.value / total) * 100) : 0;
                const formatted = percentage.toLocaleString('de-DE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
                return `${formatted} %`;
              },
            },
          ]}
          height={450}
        />
      </div>
    </div>
  )
}

export default Home