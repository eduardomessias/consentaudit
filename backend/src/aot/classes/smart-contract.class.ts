import ISmartContract from '../interfaces/smart-contract.interface'
import ConsentAudit from '../data/context/blockchain/ethereum/contracts/ConsentAudit.json'

import Web3 from 'web3'


//const contractAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'
//const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const contractAddress = process.env.HARDHAT_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export default class SmartContract implements ISmartContract {
    address: string
    abi: any
    web3: Web3

    constructor(address: string = contractAddress, abi: any = ConsentAudit.abi) {
        this.address = address
        this.abi = abi
        this.web3 = this.getWeb3Instance()
    }

    getWeb3Provider() {
        const provider = new Web3.providers.HttpProvider('http://localhost:8545')
        return provider
    }

    newWeb3(): Web3 {
        const provider = this.getWeb3Provider()
        const web3 = new Web3(provider)
        console.log('Connected to Web3')
        return web3
    }

    getWeb3Instance(): Web3 {
        if (this.web3) {
            return this.web3
        }
        return this.newWeb3()
    }

    connectToAccount(web3: Web3) {
        if (!web3) {
            console.error('No web3 instance provided')
            return
        }
        this.web3.eth.defaultAccount = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
        console.log('Connected to account')
    }

    getContract() {
        this.connectToAccount(this.web3)
        const contract = new this.web3.eth.Contract(this.abi, this.address)
        console.log('Connected to smart contract')
        return contract
    }

    async getConsents(hash: string) {
        const contract = this.getContract()
        console.log('Getting consents for hash:', hash)
        const getConsentsMethod = contract.methods.getConsents(hash)
        const consents = await getConsentsMethod.call()
        //console.log('Consents:', consents)
        return consents
    }

    async grantConsent(resource: string, clientId: string, authServerUrl: string, authServerTag: string, from: number, to: number, scope: string) {
        const contract = this.getContract()
        const tx = await contract.methods.grantConsent(resource, clientId, authServerUrl, authServerTag, from, to, scope).send({
            from: this.web3.eth.defaultAccount,
        })
        console.log('Consent granted. Tx details:', tx)
        return tx
    }
}