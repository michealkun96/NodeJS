"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv = __importStar(require("dotenv"));
const yup = __importStar(require("yup"));
// Load biến môi trường từ file .env
dotenv.config();
// Khai báo schema Yup cho tất cả biến
const envSchema = yup.object({
    PORT: yup
        .number()
        .required("PORT is required")
        .integer()
        .positive()
        .default(9000),
    NODE_ENV: yup
        .string()
        .oneOf(["development", "production", "test"])
        .required("NODE_ENV is required")
        .default("development"),
    /// add more env here
});
// Validate process.env
let validatedEnv;
try {
    validatedEnv = envSchema.validateSync(process.env, {
        abortEarly: false, // gom tất cả lỗi lại
        stripUnknown: true, // loại bỏ các biến không có trong schema
    });
}
catch (err) {
    if (err instanceof yup.ValidationError) {
        console.error("\n❌ Invalid environment configuration:");
        for (const message of err.errors) {
            console.error(`  - ${message}`);
        }
        console.error("\n💡 Please check your .env file.\n");
        process.exit(1); // Dừng app ngay
    }
    else {
        throw err;
    }
}
exports.ENV = validatedEnv;
//# sourceMappingURL=ENV.js.map