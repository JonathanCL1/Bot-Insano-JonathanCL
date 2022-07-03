let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*AFK MODE*\n\n${conn.getName(m.sender)} now AFK${text ? ': ' + text : ''}`, wm, null, [[`Menu`, `${usedPrefix}menu`]], m)
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
