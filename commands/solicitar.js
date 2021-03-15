const Discord = require ("discord.js");


exports.run = async (client, message, agrs) =>{
    message.delete();
    const content = agrs.join(" ");

    const comoUsar = '```COMO USAR```\n\
**digite o comando /solicitar (Seu nick) (Link do video) após**\n\
**isso qual cargo do Youtubers você teria  (YT+, YT, MINIYT)**\n\
\n\
`EXEMPLO: /solicitar raulzinmilgrau https://www.youtube.com/VIDEO  YT+ `' 

    if(!agrs[0]) return message.channel.send(comoUsar)
else{
var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS!");
    const msg = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("SOLICITAÇÃO DE YOUTUBERS",)
        .addField("Tag Solocitada:" , content)
        .addField("Autor:", message.author)
        .setDescription("<@&646818236079407117><@&646819228833284139><@&646819735152885770><@&646819938593538070><@&646820239224340503><@&646820274016092170>")
        .setTimestamp()
    );
        await message.channel.send(`**${message.author} a sua tag foi Solicitada não apresse os staff eles olharam o seu video!**`);

    const emojis = [":Like:646831040651853837",":Deslike:646831040781877288"]

    for (const i in emojis){
        await msg.react(emojis[i]);
    }
 }
}