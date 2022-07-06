import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = JonathanCL[Math.floor(Math.random() * JonathanCL.length)]
conn.sendButton(m.chat, `_JonathanCL_`, author, url, [['🛐 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🛐', `/${JonathanCL}`]], m)
}
handler.customPrefix = /jonathancl|JonathanCL|Jonathan|jonathan/i
handler.command = /^(Jonathan)$/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler

global.JonathanCL = [
  "https://telegra.ph/file/5ea4f5083b4f4e1fb4b1a.png",
  "https://telegra.ph/file/4e26bb46fea53763af647.png",
  "https://telegra.ph/file/5761836e45d77256eeac8.png",
  "https://telegra.ph/file/2b5d21a489488582bf7d3.png",
  "https://telegra.ph/file/cb64c6506ebf70bd79653.jpg",
]
