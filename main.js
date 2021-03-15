const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");


client.on("message", async message =>{
    if(message.author.bot) return; 
    if (message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
    if(message.content.startsWith(`<@!${client.user.id}`) || 
    message.content.startsWith('<@${client.user.id}')) return; 


    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try{
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
}   catch(err){
    console.error("ERRO" + err);
}});

client.on("ready", () =>{
    let activites = [
        `ESTAMOS DESENVOLVENDO!`,
        `UMA NOVA ERA!`,
        `redelookup.batt.host!`,
        `O FUTURO ESTÁ CHEGANDO!`
    ]

    i = 0;
    setInterval(() => client.user.setActivity(`${activites[i++ % 
        activites.length]}`,{
            type: "WATCHING"
        }),5000);
console.log("Estou online!")

});

client.on("guildMemberAdd", member =>{

    // RUNNING RANDOM IMAGE WHEN A RIGHT PERSON ENTERS THE SERVER BEING FROM THE INTERNET!

    const images = ["https://imgur.com/skQ2bJj.png","https://imgur.com/yZ9115U.png","https://imgur.com/5e6swO2.png",
                    "https://imgur.com/YIIQuHn.png","https://imgur.com/S2KTrDk.png","https://imgur.com/Fe0LCDH.png"]
    const randomImages = images[Math.floor(Math.random() * images.length)]
    let bemvindoEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("BEM-VINDO")
        .setDescription(`
        
        Olá ${member}. Sejá bem vindos ao Lookup, um universo repleto de aventuras e criaturas misteriosas. O seu objetivo é sobreviver nesse mundo desconhecido! Boa sorte!

        SPOILERS DO SERVIDOR <#YOUR CLASS> 
        REGISTRAR FACÇÃO <#YOUR CLASS>
        CHAT GERAL <#YOUR CLASS>`)
        .setImage(randomImages)
    member.guild.channels.cache.get('YOUR CLASS').send(bemvindoEmbed);
    member.roles.add('YOUR CLASS');

});



client.login(config.token); 