let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Uriel.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
Jesús Uriel
`.trim()


handler.help = ['Uriel']
handler.tags = ['main']
handler.command = /^(Uriel|Jesus Uriel)$/i
export default handler
