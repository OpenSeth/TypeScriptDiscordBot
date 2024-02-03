"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThisIsBeans = void 0;
const discord_js_1 = require("discord.js");
exports.ThisIsBeans = {
    name: "thisisbeans",
    description: "This is food, this is beans",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const content = "https://tenor.com/view/this-is-beans-beans-gif-18201743";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
