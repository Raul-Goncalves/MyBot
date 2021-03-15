const Discord = require ("discord.js")

exports.run = async (client, message, agrs) =>{
message.delete();
const content = agrs.join(" ");

    var canal = message.guild.channels.cache.find(ch => ch.id === "YOUR CLASS!")
    const msgajuda = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("CENTRAL DE AJUDA!")
        .setDescription(`
        Para pode te ajudar deixamos alguns comando que sera utilizado nesse servidor!
        
        (/) Bot Lookup
        (!) Bot Musica
        (-) Bot Musica


        Comandos:

        /ajuda|/chamarstaff|/loja|/ip|/denunciar|/solicitar|/formulario|
        /sujerir|!play(Nome da musica/link)|!pause|!skip|-play(Nome da musica/link)
        |-jump|-back|-stop


                                                                                        `)
    );

    const emojis = [":Like:646831040651853837"]

    for (const i in emojis){
        await msgajuda.react(emojis[i]);
     

    }

    const filter = (reaction, user) => {
        return reaction.emoji.id === '646831040651853837' && user.id === message.author.id;
    };

};

