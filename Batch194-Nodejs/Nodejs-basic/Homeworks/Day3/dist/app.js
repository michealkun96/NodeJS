"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_route_1 = __importDefault(require("./routes/v1/categories.route"));
const http_errors_1 = __importDefault(require("http-errors"));
const ENV_1 = require("./config/ENV");
const app = (0, express_1.default)();
/**Cấu hình để nhận request từ Body */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.json({
        message: 'Backend API'
    });
});
/*********** BEGIN DECLARATION ROUTES **************** */
app.use('/api/v1/categories', categories_route_1.default);
/************END DECLARATION ROUTES********** */
/*********** BEGIN HANDLE ERRORS **************** */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = ENV_1.ENV.NODE_ENV === 'development' ? err : {};
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
});
/** App chỉ chứa phần cấu hình epxress */
exports.default = app;
//# sourceMappingURL=app.js.map