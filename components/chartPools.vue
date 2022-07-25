<template>

<div>
      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-card
            height="500"
          >
            <v-card-title>Statistic</v-card-title>
            <v-card-text>
            <highchart
              :options="chartVolume"
              :modules="['exporting']"
              :update="watchers"
              style="width:100%;"
            />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="500"
          >
            <v-card-title>Statistic</v-card-title>
            <v-card-text>
            <highchart
              :options="chartOptions"
              :modules="['exporting']"
              :update="watchers"
              style="width:100%;"
            />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
</div>


</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      caption: 'Chart caption here',
      title: 'Basic Chart',
      subtitle: 'More details here',
      series: [],
      seriesLiquidity: [],
      seriesVolume: [],
      seriesColor: '',
      animationDuration: 1000,
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      seriesName: 'My Data',
      yAxis: 'My Values',
      watchers: [
        'options.title',
        'options.series'
      ],
      colors: [
        'Red',
        'Green',
        'Blue',
        'Pink',
        'Orange',
        'Brown',
        'Black',
        'Purple'
      ],
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: ''
      },
      sexy: false
    }
  },
  async mounted() {
    // Donnut part
    const donnutData = await axios('https://api-osmosis.imperator.co/pools/v2/571')
    const price = await axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcanna,osmosis&vs_currencies=usd')

    this.series.push(['BCNA', (donnutData.data[0].amount * price.data.bitcanna.usd)])
    this.series.push(['OSMO', (donnutData.data[1].amount  * price.data.osmosis.usd)])
    this.series.push(['Liquidity', donnutData.data[0].liquidity])

    // Basic line part
    const chartDataLiquidity = await axios('https://api-osmosis.imperator.co/pools/v2/liquidity/571/chart')
    const chartDataVolume = await axios('https://api-osmosis.imperator.co/pools/v2/volume/571/chart')

    var seriesLiquidity = this.seriesLiquidity
    chartDataLiquidity.data.forEach(function (item) {
      const splitData = item.time.split('-');
      seriesLiquidity.push([ Date.UTC(splitData[0], splitData[1] - 1, splitData[2]), item.value ])
    })
    // console.log(this.seriesLiquidity)

    var seriesVolume = this.seriesVolume
    chartDataVolume.data.forEach(function (item) {
      const splitData = item.time.split('-');
      seriesVolume.push([ Date.UTC(splitData[0], splitData[1] - 1, splitData[2]), item.value ])
    })


  },
  computed: {
    chartOptions () {
      const ctx = this
      return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Contents of pool 571 on osmosis'
        },
        subtitle: {
            text: 'Source: coingecko.com'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Amount USD',
            data: this.series
        }]
      }
    },
    chartVolume () {
      const ctx = this
      return {
        title: {
            text: 'Liquidity/Volume of pool 571 osmosis'
        },

        subtitle: {
            text: 'Source: imperator.co'
        },

        yAxis: {
            title: {
                text: 'Value'
            }
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e %b %y',
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },

        series: [{
            name: 'Liquidity',
            data: this.seriesLiquidity
        }, {
            name: 'Volume',
            data: this.seriesVolume
        }],
      }
    }
  }
}
</script>

<style scoped>

</style>html
