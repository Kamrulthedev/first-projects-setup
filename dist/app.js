"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const student_route_1 = require("./app/modules/student/student.route");
const user_routes_1 = require("./app/modules/users/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api/v1/students", student_route_1.StudentRouts);
app.use("/api/v1/users", user_routes_1.UserRouotes);
app.get("/", (req, res) => {
    const a = 19;
    res.send(a);
});
exports.default = app;
