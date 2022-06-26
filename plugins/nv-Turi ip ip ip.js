import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Turi ip ip ip.mp3'
conn.sendFile(m.chat, vn, 'Turi ip ip ip.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Turi ip ip ip/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
