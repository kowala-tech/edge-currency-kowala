/* global */
// @flow

import type { EdgeCurrencyInfo } from 'edge-core-js'
import type { Settings } from './types'

const otherSettings: Settings = {
  chainId: {
    'kusd-zygote': 3
  },
  apiServers: {
    'kusd-zygote': 'https://api.zygote.kowala.io/api'
  },
  iosAllowedTokens: {}
}

const defaultSettings: any = {
  customFeeSettings: ['gasLimit', 'gasPrice'],
  otherSettings
}

export const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'KUSD',
  currencyName: 'kUSD',
  pluginName: 'kowala',
  walletTypes: [
    'wallet:kusd-zygote'
  ],

  defaultSettings,

  addressExplorer: '',
  transactionExplorer: '',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'KUSD',
      multiplier: '1000000000000000000',
      symbol: 'k'
    }
  ],
  symbolImage: '', // Base64 encoded png image of the currency symbol (optional)
  symbolImageDarkMono: '', // Base64 encoded png image of the currency symbol (optional)
  metaTokens: []
}
