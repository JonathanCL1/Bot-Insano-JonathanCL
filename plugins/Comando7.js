import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
$*{['Fan de kunno?','Kunnolover','que gay','No sabía que eras gay'].getRandom()}*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'Bot-Insano',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/JonathanCL1/Bot-Insano-JonathanCL`}}})   
}
handler.customPrefix = /dormir|Dormir|entiezar|Entiezar/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
