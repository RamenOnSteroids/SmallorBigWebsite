const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready' ,() =>{
    console.log("Sup wankers I'm ready for therapy")
})

client.on('message' , msg=>{
    if(msg.content=== 'I want therapy'){
        msg.reply('no');
    }
})

client.login('ODY2MDgwMzAzNDE1NTU4MTQ1.YPNWIw.CBvcAA2liLi8EQK9WlQuplhrm6s')