const Discord =  require("discord.js")

exports.run = async (client, message, agrs) =>{
message.delete();
const content = agrs.join (" ");

if(!agrs[0]){
    return message.channel.send(`${message.author.username}, escreva qual seria sua duvida para chamar a staff`)
}else if(content.lenght > 1000){
    return message.channel.send(`${message.author.username}, Sua duvida tem que ter pelo menos  1000 palavras!`)
}else{
    var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS");
    const msgstaff = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField("Autor:", message.author)
        .addField("Duvida do jogador", content)
        .setDescription("<@&646818236079407117><@&646819228833284139>\n\ <@&646819735152885770><@&646819938593538070>\n\ <@&646820239224340503><@&646820274016092170>")
        .setTimestamp()
    );

        await message.channel.send(`**${message.author} sua duvida foi enviada espere algum staff entrar em contato contigo!**`)
    };
};