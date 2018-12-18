const Discord = require ("discord.js");
var bot = new Discord.Client();
bot.on("ready", function() {

        bot.user.setGame("Fix Mute");

})

bot.login(process.env.TOKEN);

bot.on('message', message => {
        if (message.content === "ping"){
                message.reply("pong");
        }



})
