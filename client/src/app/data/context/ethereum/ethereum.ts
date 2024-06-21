import { ethers } from 'ethers'


const localProvider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
export const getProvider = () => localProvider
export const getSigner = (index = 0) => getProvider().getSigner(index)
export const getContract = (address, abi, signerIndex = 0) => new ethers.Contract(address, abi, getSigner(signerIndex))