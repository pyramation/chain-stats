<template>
  <highstock :options="chartOptions" />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      symbol: 'AAPL',
      watchers: ['options.series'],
      series: []
    }
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'candlestick'
        },
        rangeSelector: {
          selected: 4
        },
        title: {
          text: `${this.symbol} Stock Price`
        },
        series: this.series
      }
    }
  },
  mounted() {
    this.fetchData('AAPL')
  },
  methods: {
    async fetchData(symbol) {
    const chartData = await axios('https://api.coingecko.com/api/v3/coins/bitcanna/ohlc?vs_currency=usd&days=365')
    await this.series.push({
      name: 'BCNA',
      data: chartData.data.map((entry) => {
        return [
          entry[0],
          entry[1],
          entry[2],
          entry[3],
          entry[4],
        ]
      })
    })
    }
  }
}
</script>
