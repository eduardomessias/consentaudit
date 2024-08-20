"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsentAudit_json_1 = __importDefault(require("../data/context/blockchain/ethereum/contracts/ConsentAudit.json"));
const web3_1 = __importDefault(require("web3"));
//const contractAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'
//const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const contractAddress = process.env.HARDHAT_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3';
class SmartContract {
    constructor(address = contractAddress, abi = ConsentAudit_json_1.default.abi) {
        this.address = address;
        this.abi = abi;
        this.web3 = this.getWeb3Instance();
    }
    getWeb3Provider() {
        const provider = new web3_1.default.providers.HttpProvider('http://localhost:8545');
        return provider;
    }
    newWeb3() {
        const provider = this.getWeb3Provider();
        const web3 = new web3_1.default(provider);
        console.log('Connected to Web3');
        return web3;
    }
    getWeb3Instance() {
        if (this.web3) {
            return this.web3;
        }
        return this.newWeb3();
    }
    connectToAccount(web3) {
        if (!web3) {
            console.error('No web3 instance provided');
            return;
        }
        this.web3.eth.defaultAccount = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
        console.log('Connected to account');
    }
    getContract() {
        this.connectToAccount(this.web3);
        const contract = new this.web3.eth.Contract(this.abi, this.address);
        console.log('Connected to smart contract');
        return contract;
    }
    getConsents(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = this.getContract();
            console.log('Getting consents for hash:', hash);
            const getConsentsMethod = contract.methods.getConsents(hash);
            const consents = yield getConsentsMethod.call();
            //console.log('Consents:', consents)
            return consents;
        });
    }
    grantConsent(resource, clientId, authServerUrl, authServerTag, from, to, scope) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = this.getContract();
            const tx = yield contract.methods.grantConsent(resource, clientId, authServerUrl, authServerTag, from, to, scope).send({
                from: this.web3.eth.defaultAccount,
            });
            console.log('Consent granted. Tx details:', tx);
            return tx;
        });
    }
}
exports.default = SmartContract;
