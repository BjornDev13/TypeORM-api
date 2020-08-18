"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var user_routes_1 = __importDefault(require("./routers/user.routes"));
var classRoom_routes_1 = __importDefault(require("./routers/classRoom.routes"));
var typeorm_1 = require("typeorm");
var app = express_1.default();
typeorm_1.createConnection();
//* Middleware
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//* Routers
app.use(user_routes_1.default);
app.use(classRoom_routes_1.default);
var port = 4000;
app.listen(port);
console.log("sever on port " + port + "!");
