let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙸𝙽𝚂𝙰𝙽𝙾 ${conn.getName(m.sender)} 𝙴𝚂𝚃𝙰𝚁𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺), 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝙽*\n\n*—◉ 𝙴𝙻 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝚂𝚄 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (afk)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
