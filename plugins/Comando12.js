import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
❗❗Pulsa PRESENTE para evitar ser fan de kunno❗❗
`.trim()
let footer = `◉ 𝙿𝚁𝙴𝚂𝙸𝙾𝙽𝙰 "PRESENTE" 𝙿𝙰𝚁𝙰 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙴𝙻 𝙹𝚄𝙴𝙶𝙾`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, null, [[`PRESENTE`]], m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `*[ ⏳ ] 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝚂𝙿𝙴𝚁𝙰 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙻𝙾𝚂 𝚀𝚄𝙴 𝙽𝙾 𝙿𝚄𝙻𝚂𝙰𝚁𝙾𝙽 𝙿𝚁𝙴𝚂𝙴𝙽𝚃𝙴 𝚂𝙾𝙽 𝙵𝙰𝙽 𝙳𝙴 𝙺𝚄𝙽𝙽𝙾❗*`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}   
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
