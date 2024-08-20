import web3 from 'web3'


export default function bytes32ToString(bytes32: string): string {
    return web3.utils.hexToAscii(bytes32)
}