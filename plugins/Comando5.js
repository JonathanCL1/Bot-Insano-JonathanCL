import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_Jesus Uriel_`, author, url, [['👻 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 👻', `/${command}`]], m)
}
handler.customPrefix = /Uriel|uriel|Jesus Uriel|jesus uriel/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler

global.pack = [
  "https://telegra.ph/file/0cfa9a0d6d118badece2d.jpg",
  "https://telegra.ph/file/0127ce2d867ece9249c3d.jpg",
  "https://telegra.ph/file/a731c6b8e5d797e47830f.jpg",
  "https://telegra.ph/file/f36607b51a79a3cbce489.jpg",
  "https://telegra.ph/file/a99c75a664b2fb96e7199.jpg",
 ]
