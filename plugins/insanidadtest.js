import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
TU NIVEL DE INSANIDAD ES:${['0%','14%','23%','33%','45%','48%','53%','61%','71%','1%','50%','37%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%%','98%','99%','100%','𝗜𝗡𝗦𝗔𝗡𝗜𝗗𝗔𝗗 𝗠𝗔𝗫𝗜𝗠𝗔!'].getRandom()}
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'BOT-INSANO',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/JonathanCL1/Bot-Insano-JonathanCL`}}})   
}
handler.command = /^(Miinsanidad|miinsanidad|testinsanidad|Testinsanidad)/i
export default handler
