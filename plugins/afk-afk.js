import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*[❗𝐈𝐍𝐅𝐎❗] 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝙁𝙆 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙈𝙀𝙉𝙏𝙀.*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼𝗂𝗈𝗇 - 𝖠𝖥𝖪',
body: '𝖡𝖮𝖳-𝖨𝖭𝖲𝖠𝖭𝖮',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/JonathanCL1/Bot-Insano-JonathanCL`}}})   
}
handler.command = /^afk$/i
export default handler
