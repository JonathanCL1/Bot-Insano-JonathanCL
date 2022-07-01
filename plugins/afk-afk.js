let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*❰ ❕ ❱ 𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 ${conn.getName(m.sender)} 𝗘𝗦𝗧𝗔𝗥𝗔 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢 𝗡𝗢 𝗟𝗢 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘𝗡*\n\n*❰ ❕ ❱ 𝗠𝗢𝗧𝗜𝗩𝗢 𝗗𝗘 𝗟𝗔 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗜𝗗𝗔𝗗${text ? ': ' + text : ''}*
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk|aviso|informo$/i

module.exports = handler
