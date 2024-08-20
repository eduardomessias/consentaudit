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
const user_repository_1 = __importDefault(require("../data/repository/user.repository"));
/** openapi
 * /sign-up:
 *  post:
 *      description: Use to sign-up a user
 *      responses:
 *          '201':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 */
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Signing up user...', req.body);
    // save user to the database
    const user = yield user_repository_1.default.save(req.body);
    console.log('User signed up', user);
    next();
});
exports.signUp = signUp;
