const Discord = require ("discord.js");

exports.run = async (client, message, agrs) =>{
message.delete();
const content = agrs.join(" ");

if(!agrs[0]){
    return message.channel.send(`${message.author.username}, escreva a sugestão apos o comando ;)`)
}else if(content.lenght > 1000){
    return message.channel.send(`${message.author.username}, forneça um ideia de menos de 1000 letras!`)
}else{
    var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS");
    const msg = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField("Autor:", message.author)
        .addField("Ideia Sugerida:" , content)
        .setTimestamp()
    );
        await message.channel.send(`**${message.author} a sua ideia foi enviada com sucesso!**`);

    const emojis = [":Like:646831040651853837",":Deslike:646831040781877288"]

    for (const i in emojis){
        await msg.react(emojis[i])
    };
  };
};
