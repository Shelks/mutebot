const Discord = require ("discord.js");
var bot = new Discord.Client();
bot.on("ready", function() {

        bot.user.setGame("Fix Mute");

})

bot.login(process.env.TOKEN);

bot.on('message', message => {
        let mode_role = message.guild.roles.find('mute', settings.modrolename);
        if (message.member.roles.has(mode_role.id).then(() => {

                message.delete;

        })



})
