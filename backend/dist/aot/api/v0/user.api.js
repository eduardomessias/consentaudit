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
exports.signUp = void 0;
const user_repository_1 = __importDefault(require("../../data/repositories/user.repository"));
// Sign-up
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method !== 'POST') {
        res.status(405).send({
            message: 'Method not allowed'
        });
    }
    const user = req.body;
    // save user to the database
    user_repository_1.default.save(user)
        .then((savedUser) => {
        console.log('User saved', savedUser);
        res.status(201).send({
            message: 'User signed up successfully',
            user: savedUser
        });
    })
        .catch((error) => {
        console.error('Error saving user', error);
        res.status(500).send({
            message: 'Error signing up'
        });
    });
});
exports.signUp = signUp;
// Sign-in
// Sign-out
