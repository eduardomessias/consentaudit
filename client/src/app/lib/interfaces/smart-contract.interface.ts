import Web3 from 'web3'


export default interface ISmartContract {
    address: string
    abi: any
    web3: Web3
    getConsents: (hash: string) => Promise<any>
    grantConsent: (resource: string, clientId: string, authServerUrl: string, authServerTag: string, from: number, to: number, scope: string) => Promise<any>
}