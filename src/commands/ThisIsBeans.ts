import {ApplicationCommandType, Client, CommandInteraction} from "discord.js";
import {Command} from "../Command";

export const ThisIsBeans: Command = {
    name: "thisisbeans",
    description: "This is food, this is beans",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "https://tenor.com/view/this-is-beans-beans-gif-18201743";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};