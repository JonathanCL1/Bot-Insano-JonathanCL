import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰𝙻𝙴𝚂 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 (*𝓑𝓸𝓽-𝓘𝓷𝓼𝓪𝓷𝓸-𝓙𝓸𝓷𝓪𝓽𝓱𝓪𝓷𝓒𝓛*)*

*𝚂𝙸 𝚀𝚄𝙸𝙴𝚁𝙴 𝚂𝙰𝙱𝙴𝚁 𝙲𝙾𝙼𝙾 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙰 𝚃𝚁𝙰𝚅É𝚂 𝙳𝙴 𝚃𝙴𝚁𝙼𝚄𝚇 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴 𝙰 𝙼𝙸 𝙾𝚆𝙽𝙴𝚁 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 {.𝚘𝚠𝚗𝚎𝚛}*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
