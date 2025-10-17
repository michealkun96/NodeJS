"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ENV_1 = require("./config/ENV");
const app_1 = __importDefault(require("./app"));
const PORT = ENV_1.ENV.PORT || 9000;
app_1.default.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map