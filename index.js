const Discord = require('discord.js');
const config = require('./config/config.json')
const { ActivityType } = require('discord.js');
const fs = require('fs');
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]

})

// | PRECENSIA DEL BOT | //
client.on("ready", () => {
    function YousamPower() {
     let vazyiat = ["dnd"] // online | dnd | idle | offline
     let godrat = Math.floor(Math.random() * vazyiat.length)
    client.user.setPresence({
      status: vazyiat[godrat] })
 }; setInterval(YousamPower, 30000)
    function srza() {
     let sezar = [`${config.prefix}help - ${client.guilds.cache.size} Servidores`, `${config.prefix}help - hmazing.gg`]
     let Power = Math.floor(Math.random() * sezar.length);
    client.user.setActivity(sezar[Power], {type: ActivityType.Watching });
         }; setInterval(srza, 15000)
   console.log(`${client.user.tag} a iniciado su precensia :)`)
 });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

/* SISTEMA DE IDIOMAS */
client.la = {};
let idiomas = fs.readdirSync('./idiomas').filter(archivo => archivo.endsWith(".json")).map(idioma => idioma.replace(/.json/, ""));
for(const idioma of idiomas){
    client.la[idioma] = require(`./idiomas/${idioma}`)
}
Object.freeze(client.la);

//Cargamos los handlers
fs.readdirSync('./handlers').forEach(handler => {
    try {
        require(`./handlers/${handler}`)(client, Discord);
    } catch (e) {
        console.log(`ERROR EN EL HANDLER ${handler}`.red)
        console.log(e)
    }
});

//ANTI-CRASH
process.on("unhandledRejection", async (err) => {
   const channel = client.channels.cache.get("1032108430753792052");
  channel.send(`Error en consola!\n\`\`\`js\n${err}\`\`\``);
 });


client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por 你好, iKyzeMoon#4174 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
