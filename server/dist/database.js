"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    const db = await mongoose_1.connect('mongodb://rafa:32chiclessinazucar@ds153974.mlab.com:53974/pizzas', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is running');
}
exports.startConnection = startConnection;
