const Discord = require ("discord.js")

exports.run = async (client, message, agrs) =>{
message.delete();
const content = agrs.join(" ");

    var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS!")
    const msg = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("FORMULARIO DO SERVIDOR!").addField("Autor:", message.author)
        .setDescription(`Para poder integrar a nossa staff do servidor faça o nosso formulario respondendo tudo de acordo com  que esta pedindo tendo em contas que não há respostas certas o que queremos e atitudes e valores nas pessoas :)
        \n\ https://forms.gle/DAMFhJRMBELuqNnQ9`)
        .setTimestamp());
        
        
    const emojis = [":Like:646831040651853837",":Deslike:646831040781877288"]

    for (const i in emojis){
    await msg.react(emojis[i])
    

    };
};