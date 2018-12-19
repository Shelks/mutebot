const Discord = require ("discord.js");
var bot = new Discord.Client();
bot.on("ready", function() {

        bot.user.setGame("Fix Mute");

})

bot.login("NTI0NjQyMjY5NDMzOTU0MzA3.DvrVnw.9pFniqtUV7CfZ98B5166Mn7FnAY");

bot.on('message', message => {
        message.reply("test");
        if (message.member.roles.has(524670062213201927)) {

                message.delete;

        }



})
