import web3 from 'web3'


export default function stringToBytes32(str: string): string {
    let hex = web3.utils.toHex(str)
    hex = hex.padEnd(66, '0')
    return hex
}