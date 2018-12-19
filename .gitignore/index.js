const Discord = require ("discord.js");
var bot = new Discord.Client();
bot.on("ready", function() {

        bot.user.setGame("Fix Mute");

})

bot.login(process.env.TOKEN);

bot.on('message', message => {
        if (message.member.roles.has(525010407807647744)) {

                message.delete;

        }



})
