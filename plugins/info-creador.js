import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙾𝚆𝙽𝙴𝚁 𝙴𝚂 wa.me/5218992973056*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙾𝚆𝙽𝙴𝚁',
body: '𝓑𝓸𝓽-𝓘𝓷𝓼𝓪𝓷𝓸-𝓙𝓸𝓷𝓪𝓽𝓱𝓪𝓷𝓒𝓛',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/5218992973056`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
