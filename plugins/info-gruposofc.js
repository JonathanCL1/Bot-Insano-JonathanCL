let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*FUNCION DESACTIVADA POR EL OWNER DEL BOT*


`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
