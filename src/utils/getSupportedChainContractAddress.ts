import { Address, getChainContractAddress } from 'viem'

import { ClientWithEns } from '@app/types'

export const getSupportedChainContractAddress = <
  TContract extends Extract<keyof ClientWithEns['chain']['contracts'], string>,
  TContractObject extends ClientWithEns['chain']['contracts'][TContract],
>({
  client,
  contract,
  blockNumber,
}: {
  client: ClientWithEns
  contract: TContract
  blockNumber?: bigint
}) => {
//   console.log('CLIENT', client, contract, registryFork.names[contract].address)
  // return getChainContractAddress({
  //   chain: client.chain,
  //   contract,
  //   blockNumber,
  // }) as TContractObject['address']
  return registryFork.names[contract].address as TContractObject['address']

}

export const registryFork: {[x: string]: any} = {
    names: {
        "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 751532
        },
        "ensBulkRenewal": {
            "address": "0x4EF77b90762Eddb33C8Eba5B5a19558DaE53D7a1"
        },
        "ensDnsRegistrar": {
            "address": "0x5a07C75Ae469Bf3ee2657B588e8E6ABAC6741b4f"
        },
        "ensDnssecImpl": {
            "address": "0xe62E4b6cE018Ad6e916fcC24545e20a33b9d8653"
        },
        "ensEthRegistrarController": {
            "address": "0xFED6a969AaA60E4961FCD3EBF1A2e8913ac65B72"
        },
        ensRegistry: { address: '0x3a229e2742a10e7918318e236218a6121141059c' },
        ensBaseRegistrarImplementation: { address: '0x63175c2aa2ae7cd2bc28969d50653d9cf96ff683' },
        ensNameWrapper: { address: '0xe19e71c62e871619572cb65e326dd30f7ca46770' },
        ensReverseRegistrar: { address: '0x15c1846a17636ee76430f34c59f0cebefc58780b' },
        ensPublicResolver: { address: '0x504c69526f76efd53862a9441aab978277595add' },
        ensUniversalResolver: { address: '0x9fcd03b6a53ee2f45540e70107cca97248ed167c'}
    },
    addresses: {
        
            "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85": "0x63175c2aa2ae7cd2bc28969d50653d9cf96ff683",
        
          
            "0x4EF77b90762Eddb33C8Eba5B5a19558DaE53D7a1": "0x4EF77b90762Eddb33C8Eba5B5a19558DaE53D7a1",
          
          
            "0x5a07C75Ae469Bf3ee2657B588e8E6ABAC6741b4f": "0x5a07C75Ae469Bf3ee2657B588e8E6ABAC6741b4f",
          
          
            "0xe62E4b6cE018Ad6e916fcC24545e20a33b9d8653": "0xe62E4b6cE018Ad6e916fcC24545e20a33b9d8653",
          
          
            "0xFED6a969AaA60E4961FCD3EBF1A2e8913ac65B72": "0xe19e71c62e871619572cb65e326dd30f7ca46770",
          
          
            "0x0635513f179D50A207757E05759CbD106d7dFcE8": "0xe19e71c62e871619572cb65e326dd30f7ca46770",
          
          
            "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD": "0x504c69526f76efd53862a9441aab978277595add",
          
          
            "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e": "0x3a229e2742a10e7918318e236218a6121141059c",
          
          
            "0xA0a1AbcDAe1a2a4A2EF8e9113Ff0e02DD81DC0C6": "0x15c1846a17636ee76430f34c59f0cebefc58780b",
          
          
            "0xc8af999e38273d658be1b921b88a9ddf005769cc": "0x9fcd03b6a53ee2f45540e70107cca97248ed167c",
          
    }
}
