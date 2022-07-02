let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`*[ ⚠️ ] bugueando grupo ${conn.getName(m.sender)} *\n\n*🔰 Motivo del bugueo ${text ? ': ' + text : ''}*
`)
}
handler.help = ['bugueargrupo [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler

