import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
TU NIVEL DE INSANIDAD ES:
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/JonathanCL1/Bot-Insano-JonathanCL`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
