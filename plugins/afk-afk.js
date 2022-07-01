
let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝗘𝗟 𝗜𝗡𝗦𝗔𝗡𝗢 ${conn.getName(m.sender)} 𝗘𝗦𝗧𝗔𝗥𝗔 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢, 𝗣𝗢𝗥𝗙𝗔𝗩𝗢𝗥 𝗡𝗢 𝗟𝗢 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘𝗡 *\n\n*—◉ 𝗘𝗟 𝗠𝗢𝗧𝗜𝗩𝗢 𝗗𝗘 𝗦𝗨 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗜𝗗𝗔𝗗 𝗘𝗦: ${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk|Afk|$/i
export default handler
