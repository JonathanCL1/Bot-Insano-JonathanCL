let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Uriel.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let estado =`
Jesús uriel
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.customPrefix = /Uriel|uriel|Jesus Uriel|jesus uriel/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
