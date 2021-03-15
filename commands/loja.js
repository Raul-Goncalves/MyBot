const Discord = require ("discord.js")

exports.run = async (client, message, agrs) =>{
message.delete();
const content = agrs.join(" ");

    var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS")
    const msg = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("SITE DO SERVIDOR!")
        .setDescription(`Veja o preço da nossa loja acaso tenha alguma duvida digite /chamarstaff (sua duvida)`)
        .addField("Autor:", message.author)
        .setDescription(`https://lookupfactionss.loja2.com.br/`)
        .setTimestamp());
        
        
    const emojis = [":Like:646831040651853837",":Deslike:646831040781877288"]

    for (const i in emojis){
    await msg.react(emojis[i])
    

    };
};
    