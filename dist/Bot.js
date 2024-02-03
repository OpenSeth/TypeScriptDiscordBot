"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
console.log("Bot is starting...");
const client = new discord_js_1.Client({
    intents: []
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
client.login("MTIwMDI2MzMwMTk4NTIyNjg0Mg.GaajjR.Z73jJ_a6g1e-HSq4S1AxUoNAe6m-LAnVYTcHk0");
console.log("Bot running");
