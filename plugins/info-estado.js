let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
let estado =`
╭─[ *𝓑𝓸𝓽-𝓘𝓷𝓼𝓪𝓷𝓸-𝓙𝓸𝓷𝓪𝓽𝓱𝓪𝓷𝓒𝓛* ]
│ *➤ 𝐇𝐎𝐋𝐀 𝐈𝐍𝐒𝐀𝐍𝐎 ${name}*
│
│ *ミ 𝗘𝗦𝗧𝗔𝗗𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧 彡*
│ *=> 𝗕𝗼𝘁 𝗔𝗰𝘁𝗶𝘃𝗼 ✅*
│ *=> 𝗡𝗶𝘃𝗲𝗹 𝗗𝗲 𝗜𝗻𝘀𝗮𝗻𝗶𝗱𝗮𝗱: ${['94%','95%','96%','97%','98%','99%','100%','𝗜𝗡𝗦𝗔𝗡𝗜𝗗𝗔𝗗 𝗠𝗔𝗫𝗜𝗠𝗔!'].getRandom()}*
│ *=> 𝗧𝗶𝗲𝗺𝗽𝗼 𝗔𝗰𝘁𝗶𝘃𝗼: ${uptime}*
╰─────────────── 
`.trim()


conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/JonathanCL1/Bot-Insano-JonathanCL', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
