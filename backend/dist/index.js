"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const ui_router_1 = __importDefault(require("./aot/routers/ui.router"));
const api_router_v0_1 = __importDefault(require("./aot/routers/api.router.v0"));
const swagger_1 = __importDefault(require("./aot/docs/swagger"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use(ui_router_1.default);
app.use('/api/v0', api_router_v0_1.default);
app.listen(port, () => {
    console.log(`[CONSENT-AUDIT][BACK-END] Consent Audit is running on port ${port}`);
});
