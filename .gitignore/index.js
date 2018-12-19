const Discord = require ("discord.js");
var bot = new Discord.Client();
bot.on("ready", function() {

        bot.user.setGame("Fix Mute");

})

bot.login(process.env.TOKEN);

bot.on('message', message => {
        message.reply("test");
        if (message.member.roles.has(524670062213201927)) {

                message.delete;

        }



})
