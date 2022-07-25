<template>
  <v-item-group>
    <v-container>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="200"
          >
            <v-card-title>Price 24h change</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>BCNA</td>
                      <td>{{ poolStats[0] }} %</td>
                    </tr>
                    <tr>
                      <td>OSMO</td>
                      <td color="red">{{ poolStats[1] }} %</td>
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
            height="200"
          >
            <v-card-title>Volume 24h change</v-card-title>
            <v-card-text>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="200"
          >
            <v-card-title>Liquidity 24h change</v-card-title>
            <v-card-text>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
          <ChartPools />
    </v-container>
  </v-item-group>
</template>

<script>
import axios from 'axios'
import cosmosConfig from '~/cosmos.config'

export default {
  name: 'IndexPage',
  data: () => ({
    allValidators: '',
    allsupply: '',
    totalTokenBonded: '',
    coingeckoData: '',
    inflation: '',
    poolStats: '',
  }),
  async mounted () {
    // https://lcd.bitcanna.io/cosmos/mint/v1beta1/inflation
    let inflationn = await axios(cosmosConfig[0].apiURL + `/cosmos/mint/v1beta1/inflation`)
    this.inflation = inflationn.data.inflation * 100

    const poolStats = await axios('https://api-osmosis.imperator.co/pools/v2/571')
    this.poolStats = [ poolStats.data[0].price_24h_change.toFixed(2), poolStats.data[1].price_24h_change.toFixed(2) ]
    console.log(poolStats.data)
  },
   methods: {
    formatNum(nombre){
      return new Intl.NumberFormat().format(nombre)
    },
  },
}
</script>

