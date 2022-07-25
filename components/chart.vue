<template>
<div>
      <v-row>
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
                :options="chartOptionsDonuts"
                :modules="['exporting']"
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
            height="238"
          >
            <v-card-title>Statistic</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Bcna supply</td>
                      <td><b>{{ formatNum(allsupply) }}</b> BCNA</td>
                    </tr>
                    <tr>
                      <td>Bcna bonded</td>
                      <td><b>{{ formatNum(totalTokenBonded) }}</b> BCNA</td>
                    </tr>
                    <tr>
                      <td>Unbonded (+ Unbonding)</td>
                      <td><b>{{ formatNum(allsupply - totalTokenBonded) }}</b> BCNA</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          <br />
          <v-card
            height="238"
          >
            <v-card-title>Coins details</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Inflation</td>
                      <td><b>{{ formatNum(inflation) }}</b> %</td>
                    </tr>
                    <tr>
                      <td>Eur price</td>
                      <td><b>{{ coingeckoData.eur }}</b> €</td>
                    </tr>
                    <tr>
                      <td>Usd price</td>
                      <td>$ <b> {{ coingeckoData.usd }}</b></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="238"
          >
            <v-card-title>Soon</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
          <br />
          <v-card
            height="238"
          >
            <v-card-title>Soon</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
</div>
</template>

<script>
import axios from 'axios'
import cosmosConfig from '~/cosmos.config'

export default {
  data() {
    return {
      symbol: 'BCNA',
      series: [],
      seriesDonut: [],
      allValidators: '',
      allsupply: '',
      totalTokenBonded: '',
      coingeckoData: '',
      inflation: '',
    }
  },
  computed: {
    chartOptionsDonuts() {
      return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'BCNA <br />Supply',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: this.seriesDonut
        }]
      }
    }
  },
  /* async fetch() {
    // this.fetchData('AAPL')
    // const chartData = await axios('https://api-osmosis.imperator.co/tokens/v2/historical/bcna/chart?tf=5')
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
    this.onloaded = true
  }, */
  async mounted() {
    // this.fetchData('AAPL')

    const allValidators = await axios(cosmosConfig[0].apiURL + `/staking/validators`)
    this.allValidators = allValidators.data.result

    const allsupply = await axios(cosmosConfig[0].apiURL + `/cosmos/bank/v1beta1/supply`)
    let bcnaSupply = allsupply.data.supply.find(element => element.denom === 'ubcna');
    this.allsupply = bcnaSupply.amount / 1000000

    var totalTokenBonded = 0;
    this.allValidators.forEach( async function(item){
      totalTokenBonded += Number(item.tokens)
      // Get all validator 1 by 1
      // const unDelegation = await axios(cosmosConfig[0].apiURL + `/cosmos/staking/v1beta1/validators/` + item.operator_address + '/unbonding_delegations')
      // console.log(unDelegation.data.unbonding_responses)
    });
    this.totalTokenBonded = totalTokenBonded / 1000000
    this.seriesDonut.push([ 'Bounded', this.totalTokenBonded ])
    this.seriesDonut.push([ 'Unbounded', this.allsupply ])

    const coingeckoData = await axios('https://api.coingecko.com/api/v3/coins/bitcanna')
    this.coingeckoData = coingeckoData.data.market_data.current_price
    this.coingeckoDataPrice24h = coingeckoData.data.market_data.current_price
    console.log(coingeckoData.data.market_data.price_change_percentage_7d)

  },
  methods: {
    formatNum(nombre){
      return new Intl.NumberFormat().format(nombre)
    },
    /*async fetchData(symbol) {
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
    }*/
  }
}
</script>
