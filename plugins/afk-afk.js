let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`*[ ⚠️ ] bugueando ${conn.getName(m.sender)} grupo*\n\n*🔰 Motivo del bugueo ${text ? ': ' + text : ''}*
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^bugueargrupo|buguear$/i

module.exports = handler

