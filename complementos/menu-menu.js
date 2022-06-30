import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
//JONATHAN-CL//    

let str = `
*ミ💖 𝑯𝑶𝑳𝑨 ✨${name}✨, 𝑨𝑸𝑼𝑰 𝑬𝑺𝑻𝑨 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑷𝑳𝑬𝑻𝑶 𝑫𝑬 𝑩𝑶𝑻 𝑰𝑵𝑺𝑨𝑵𝑶. 💖彡*
*📅 𝑭𝑬𝑺𝑯𝑨: ${week}, ${date}*
*📈 𝑻𝑰𝑬𝑴𝑷𝑶 𝑨𝑪𝑻𝑰𝑽𝑶: ${uptime}*
*📊 𝑼𝑺𝑼𝑨𝑹𝑰𝑶𝑺: ${rtotalreg}*
*<𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍 𝐃𝐄𝐋 𝐁𝐎𝐓/>*
° ඬ ⃟ 🤖 _${usedPrefix}𝗚𝗥𝗨𝗣𝗢𝗦_
° ඬ ⃟ 🤖 _${usedPrefix}𝗘𝗦𝗧𝗔𝗗𝗢_
° ඬ ⃟ 🤖 _${usedPrefix}𝗜𝗡𝗙𝗢𝗕𝗢𝗧_
° ඬ ⃟ 🤖 _${usedPrefix}𝗗𝗢𝗡𝗔𝗥_
° ඬ ⃟ 🤖 _${usedPrefix}𝗚𝗥𝗢𝗨𝗣𝗟𝗜𝗦𝗧_
° ඬ ⃟ 🤖 _${usedPrefix}𝗢𝗪𝗡𝗘𝗥_
° ඬ ⃟ 🤖 _${usedPrefix}𝗦𝗖𝗥𝗜𝗣𝗧_
° ඬ ⃟ 🤖 _𝗕𝗢𝗧_ (𝙐𝙨𝙤 𝙨𝙞𝙣 𝙥𝙧𝙚𝙛𝙞𝙟𝙤)
*<𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎/>*
° ඬ⃟ _${usedPrefix}𝗝𝗢𝗜𝗡 *<enlace / link / url>*_
//JONATHAN-CL//
*<𝐉𝐔𝐄𝐆𝐎𝐒/>*
° ඬ⃟💫 _${usedPrefix}𝗠𝗔𝗧𝗘𝗦 *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
° ඬ⃟💫 _${usedPrefix}𝗣𝗣𝗧 *<papel / tijera /piedra>*_
° ඬ⃟💫 _${usedPrefix}𝗚𝗔𝗬2 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗠𝗔𝗡𝗖𝗢 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗠𝗔𝗡𝗖𝗔 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗥𝗔𝗧𝗔 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗟𝗢𝗩𝗘 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗗𝗢𝗫𝗫𝗘𝗔𝗥 *<nombre / @tag>*_
° ඬ⃟💫 _${usedPrefix}𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔 *<texto>*_
° ඬ⃟💫 _${usedPrefix}𝗦𝗟𝗢𝗧 *<apuesta>*_
° ඬ⃟💫 _${usedPrefix}𝗣𝗩𝗣 *<@tag>*_
° ඬ⃟💫 _${usedPrefix}𝗦𝗜𝗠𝗜 *<texto>*_
° ඬ⃟💫 _${usedPrefix}𝗧𝗢𝗣𝗚𝗔𝗬𝗦_
° ඬ⃟💫 _${usedPrefix}𝗧𝗢𝗣𝗢𝗧𝗔𝗞𝗨𝗦_
° ඬ⃟💫 _${usedPrefix}𝗙𝗢𝗥𝗠𝗔𝗥𝗣𝗔𝗥𝗘𝗝𝗔_
° ඬ⃟💫 _${usedPrefix}𝗩𝗘𝗥𝗗𝗔𝗗_
° ඬ⃟💫 _${usedPrefix}𝗥𝗘𝗧𝗢_
//JONATHAN-CL//
*<𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥/>*
° ඬ⃟💥 _${usedPrefix}𝗘𝗡𝗔𝗕𝗟𝗘
° ඬ⃟💥 _${usedPrefix}𝗗𝗜𝗦𝗔𝗕𝗟𝗘
*</>*
° ඬ⃟🔰 _${usedPrefix}𝗥𝗘𝗣𝗢𝗥𝗧𝗘 *<texto>*_
//JONATHAN-CL//
*<𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦/>*
° ඬ⃟📥 _${usedPrefix}𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗚𝗜𝗧𝗖𝗟𝗢𝗡𝗘 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗚𝗗𝗥𝗜𝗩𝗘 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗧𝗜𝗞𝗧𝗢𝗞 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗬𝗧𝗠𝗣3 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗬𝗧𝗠𝗣4 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗬𝗧𝗠𝗣3𝗗𝗢𝗖 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗬𝗧𝗠𝗣4𝗗𝗢𝗖 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗟𝗔𝗬 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗟𝗔𝗬2 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗟𝗔𝗬𝗗𝗢𝗖 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗦𝗣𝗢𝗧𝗜𝗙𝗬 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗜𝗠𝗔𝗚𝗘𝗡 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗧 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗪𝗔𝗟𝗟𝗔𝗣𝗔𝗣𝗘𝗥 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}𝗣𝗣𝗧𝗜𝗞𝗧𝗢𝗞 *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}𝗜𝗚𝗦𝗧𝗔𝗟𝗞 *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}𝗜𝗚𝗦𝗧𝗢𝗥𝗬 *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}𝗧𝗜𝗞𝗧𝗢𝗞𝗦𝗧𝗔𝗟𝗞 *<nombre de usuario>*_
//JONATHAN-CL//
*<𝐆𝐑𝐔𝐏𝐎𝐒/>* 
° ඬ⃟💎 _${usedPrefix}𝗔𝗗𝗗 *<numero>*_
° ඬ⃟💎 _${usedPrefix}𝗞𝗜𝗖𝗞 *<@tag>*_
° ඬ⃟💎 _${usedPrefix}𝗚𝗥𝗨𝗣𝗢 *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}𝗣𝗥𝗢𝗠𝗢𝗧𝗘 *<@tag>*_
° ඬ⃟💎 _${usedPrefix}𝗗𝗘𝗠𝗢𝗧𝗘 *<@tag>*_
° ඬ⃟💎 _𝗔𝗗𝗠𝗜𝗡𝗦 *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}𝗗𝗘𝗠𝗢𝗧𝗘 *<@tag>*_
° ඬ⃟💎 _${usedPrefix}𝗜𝗡𝗙𝗢𝗚𝗥𝗢𝗨𝗣_
° ඬ⃟💎 _${usedPrefix}𝗟𝗜𝗡𝗞_
° ඬ⃟💎 _${usedPrefix}𝗦𝗘𝗧𝗡𝗔𝗠𝗘 *<texto>*_
° ඬ⃟💎 _${usedPrefix}𝗦𝗘𝗧𝗗𝗘𝗦𝗖 *<texto>*_
° ඬ⃟💎 _${usedPrefix}𝗜𝗡𝗩𝗢𝗖𝗔𝗥 *<texto>*_
° ඬ⃟💎 _${usedPrefix}𝗦𝗘𝗧𝗪𝗘𝗟𝗖𝗢𝗠𝗘 *<texto>*_
° ඬ⃟💎 _${usedPrefix}𝗦𝗘𝗧𝗕𝗬𝗘 *<texto>*_
° ඬ⃟💎 _${usedPrefix}𝗛𝗜𝗗𝗘𝗧𝗔𝗚 *<texto>*_
//JONATHAN-CL//
*<𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒/>*
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐈𝐌𝐆 *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐌𝐏3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐏𝐏𝐓 *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐕𝐈𝐃𝐄𝐎 *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐔𝐑𝐋 *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐓𝐒 𝐄𝐒 *<texto>*_
//JONATHAN-CL//
*<𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒/>*
° ඬ⃟🖍️ _${usedPrefix}𝐋𝐎𝐆𝐎𝐒 *<efecto> <texto>*_
° ඬ⃟🖍️ _${usedPrefix}𝐒𝐈𝐌𝐏𝐂𝐀𝐑𝐃 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐇𝐎𝐑𝐍𝐘𝐂𝐀𝐑𝐃 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐋𝐎𝐋𝐈𝐂𝐄 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐘𝐓𝐂𝐎𝐌𝐌𝐄𝐍𝐓 *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}𝐈𝐓𝐒𝐎𝐒𝐓𝐔𝐏𝐈𝐃_
° ඬ⃟🖍️ _${usedPrefix}𝐏𝐈𝐗𝐄𝐋𝐀𝐑_
° ඬ⃟🖍️ _${usedPrefix}𝐁𝐋𝐔𝐑_
//JONATHAN-CL//
*<𝐑𝐀𝐍𝐃𝐎𝐌/>*
° ඬ⃟👾 _${usedPrefix}𝐂𝐑𝐈𝐒𝐓𝐈𝐀𝐍𝐎𝐑𝐎𝐍𝐀𝐋𝐃𝐎_
° ඬ⃟👾 _${usedPrefix}𝐌𝐄𝐒𝐒𝐈_
° ඬ⃟👾 _${usedPrefix}𝐌𝐄𝐌𝐄_
° ඬ⃟👾 _${usedPrefix}𝐈𝐓𝐙𝐘_
° ඬ⃟👾 _${usedPrefix}𝐁𝐋𝐀𝐂𝐊𝐏𝐈𝐍𝐊_
° ඬ⃟👾 _${usedPrefix}𝐊𝐏𝐎𝐏 *<blackpink / exo / bts>*_
° ඬ⃟👾 _${usedPrefix}𝐍𝐀𝐕𝐈𝐃𝐀𝐃_
° ඬ⃟👾 _${usedPrefix}𝐏𝐏𝐂𝐎𝐔𝐏𝐋𝐄_
° ඬ⃟👾 _${usedPrefix}𝐍𝐄𝐊𝐎_
° ඬ⃟👾 _${usedPrefix}𝐖𝐀𝐈𝐅𝐔_
° ඬ⃟👾 _${usedPrefix}𝐀𝐊𝐈𝐑𝐀_
° ඬ⃟👾 _${usedPrefix}𝐀𝐊𝐈𝐘𝐀𝐌𝐀_
° ඬ⃟👾 _${usedPrefix}𝐀𝐍𝐍𝐀_
° ඬ⃟👾 _${usedPrefix}𝐀𝐒𝐔𝐍𝐀_
° ඬ⃟👾 _${usedPrefix}𝐀𝐘𝐔𝐙𝐀𝐖𝐀_
° ඬ⃟👾 _${usedPrefix}𝐁𝐎𝐑𝐔𝐓𝐎_
° ඬ⃟👾 _${usedPrefix}𝐂𝐇𝐈𝐇𝐎_
° ඬ⃟👾 _${usedPrefix}𝐂𝐇𝐈𝐓𝐎𝐆𝐄_
° ඬ⃟👾 _${usedPrefix}𝐃𝐄𝐈𝐃𝐀𝐑𝐀_
° ඬ⃟👾 _${usedPrefix}𝐄𝐑𝐙𝐀_
° ඬ⃟👾 _${usedPrefix}𝐄𝐋𝐀𝐈𝐍𝐀_
° ඬ⃟👾 _${usedPrefix}𝐄𝐁𝐀_
° ඬ⃟👾 _${usedPrefix}𝐄𝐌𝐈𝐋𝐈𝐀_
° ඬ⃟👾 _${usedPrefix}𝐇𝐄𝐒𝐓𝐈𝐀_
° ඬ⃟👾 _${usedPrefix}𝐇𝐈𝐍𝐀𝐓𝐀_
° ඬ⃟👾 _${usedPrefix}𝐈𝐍𝐎𝐑𝐈_
° ඬ⃟👾 _${usedPrefix}𝐈𝐒𝐔𝐙𝐔_
° ඬ⃟👾 _${usedPrefix}𝐈𝐓𝐀𝐂𝐇𝐈_
° ඬ⃟👾 _${usedPrefix}𝐈𝐓𝐎𝐑𝐘_
° ඬ⃟👾 _${usedPrefix}𝐊𝐀𝐆𝐀_
° ඬ⃟👾 _${usedPrefix}𝐊𝐀𝐆𝐔𝐑𝐀_
° ඬ⃟👾 _${usedPrefix}𝐊𝐀𝐎𝐑𝐈_
° ඬ⃟👾 _${usedPrefix}𝐊𝐄𝐍𝐄𝐊𝐈_
° ඬ⃟👾 _${usedPrefix}𝐊𝐎𝐓𝐎𝐑𝐈_
° ඬ⃟👾 _${usedPrefix}𝐊𝐔𝐑𝐔𝐌𝐈_
° ඬ⃟👾 _${usedPrefix}𝐌𝐀𝐃𝐀𝐑𝐀_
° ඬ⃟👾 _${usedPrefix}𝐌𝐈𝐊𝐀𝐒𝐀_
° ඬ⃟👾 _${usedPrefix}𝐌𝐈𝐊𝐔_
° ඬ⃟👾 _${usedPrefix}𝐌𝐈𝐍𝐀𝐓𝐎_
° ඬ⃟👾 _${usedPrefix}𝐍𝐀𝐑𝐔𝐓𝐎_
° ඬ⃟👾 _${usedPrefix}𝐍𝐄𝐙𝐔𝐊𝐎_
° ඬ⃟👾 _${usedPrefix}𝐒𝐀𝐆𝐈𝐑𝐈_
° ඬ⃟👾 _${usedPrefix}𝐒𝐀𝐒𝐔𝐊𝐄_
° ඬ⃟👾 _${usedPrefix}𝐒𝐀𝐊𝐔𝐑𝐀_
° ඬ⃟👾 _${usedPrefix}𝐂𝐎𝐒𝐏𝐋𝐀𝐘_
//JONATHAN-CL//
*<𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
° ඬ⃟🎤 _${usedPrefix}𝑩𝑨𝑺𝑺_
° ඬ⃟🎤 _${usedPrefix}𝑩𝑳𝑶𝑾𝑵_
° ඬ⃟🎤 _${usedPrefix}𝑫𝑬𝑬𝑷_
° ඬ⃟🎤 _${usedPrefix}𝑬𝑨𝑹𝑹𝑨𝑷𝑬_
° ඬ⃟🎤 _${usedPrefix}𝑭𝑨𝑺𝑻_
° ඬ⃟🎤 _${usedPrefix}𝑭𝑨𝑻_
° ඬ⃟🎤 _${usedPrefix}𝑵𝑰𝑮𝑯𝑻𝑪𝑶𝑹𝑬_
° ඬ⃟🎤 _${usedPrefix}𝑹𝑬𝑽𝑬𝑹𝑺𝑬_
° ඬ⃟🎤 _${usedPrefix}𝑹𝑶𝑩𝑶𝑻_
° ඬ⃟🎤 _${usedPrefix}𝑺𝑳𝑶𝑾_
° ඬ⃟🎤 _${usedPrefix}𝑺𝑴𝑶𝑶𝑻𝑯_
° ඬ⃟🎤 _${usedPrefix}𝑻𝑼𝑷𝑨𝑰_
//JONATHAN-CL//
*<𝗖𝗛𝗔𝗧 𝗔𝗡𝗢𝗡𝗜𝗠𝗢/>*
° ඬ⃟📳 _${usedPrefix}𝑺𝑻𝑨𝑹𝑻_
° ඬ⃟📳 _${usedPrefix}𝑵𝑬𝑿𝑻_
° ඬ⃟📳 _${usedPrefix}𝑳𝑬𝑨𝑽𝑬_
//JONATHAN-CL//
*<𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦/>*
° ඬ⃟🔍 _${usedPrefix}𝑨𝑵𝑰𝑴𝑬𝑰𝑵𝑭𝑶 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑮𝑶𝑶𝑮𝑳𝑬 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑳𝑬𝑻𝑹𝑨 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑾𝑰𝑲𝑰𝑷𝑬𝑫𝑰𝑨 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝒀𝑻𝑺𝑬𝑨𝑹𝑪𝑯 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑨𝑷𝑲𝑫𝑶𝑵𝑬 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑨𝑷𝑲𝑮𝑶𝑶𝑮𝑳𝑬 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑨𝑷𝑲𝑴𝑶𝑫𝒀 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑨𝑷𝑲𝑺𝑯𝑼𝑩 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑯𝑨𝑷𝑷𝒀𝑴𝑶𝑫 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑯𝑶𝑺𝑻𝑨𝑷𝑲 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑹𝑬𝑽𝑫1 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑻𝑶𝑹𝑨𝑪𝑪𝑰𝑵𝑶 *<texto>*_
° ඬ⃟🔍 _${usedPrefix}𝑼𝑨𝑷𝑲𝑷𝑹𝑶 *<texto>*_
//JONATHAN-CL//
*<𝗔𝗨𝗗𝗜𝗢𝗦/>* 
//JONATHAN-CL//
*- 𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙇𝘼𝙎 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀𝙎 𝙋𝘼𝙇𝘼𝘽𝙍𝘼𝙎 𝙊 𝙁𝙍𝘼𝙎𝙀𝙎 𝙎𝙄𝙉 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
° ඬ⃟🔊 _𝑸𝑼𝑰𝑬𝑵 𝑬𝑺 𝑻𝑼 𝑺𝑬𝑴𝑷𝑨𝑰 𝑩𝑶𝑻𝑺𝑰𝑻𝑶 7𝑾7_
° ඬ⃟🔊 _𝑻𝑼𝑹𝑰 𝑰𝑷 𝑰𝑷 𝑰𝑷_
° ඬ⃟🔊 _𝑾𝑬𝑵𝑨𝑴𝑬𝑪𝑯𝑰𝑵𝑰𝑵𝑺𝑨𝑴𝑨_
° ඬ⃟🔊 _𝑻𝑬 𝑫𝑰𝑨𝑮𝑵𝑶𝑺𝑻𝑰𝑪𝑶 𝑪𝑶𝑵 𝑮𝑨𝒀_
° ඬ⃟🔊 _𝑨 𝑵𝑨𝑫𝑰𝑬 𝑳𝑬 𝑰𝑴𝑷𝑶𝑹𝑻𝑨_
° ඬ⃟🔊 _𝑭𝑰𝑬𝑺𝑻𝑨 𝑫𝑬𝑳 𝑨𝑫𝑴𝑰𝑵_
° ඬ⃟🔊 _𝑭𝑰𝑬𝑺𝑻𝑨 𝑫𝑬𝑳 𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹_ 
° ඬ⃟🔊 _𝑽𝑰𝑽𝑨𝑵 𝑳𝑶𝑺 𝑵𝑶𝑽𝑰𝑶𝑺_
° ඬ⃟🔊 _𝑭𝑬𝑳𝑰𝒁 𝑪𝑼𝑴𝑷𝑳𝑬𝑨Ñ𝑶𝑺_
° ඬ⃟🔊 _𝑵𝑶𝑪𝑯𝑬 𝑫𝑬 𝑷𝑨𝒁_
° ඬ⃟🔊 _𝑩𝑼𝑬𝑵𝑶𝑺 𝑫𝑰𝑨𝑺_
° ඬ⃟🔊 _𝑩𝑼𝑬𝑵𝑶𝑺 𝑻𝑨𝑹𝑫𝑬𝑺_
° ඬ⃟🔊 _𝑩𝑼𝑬𝑵𝑶𝑺 𝑵𝑶𝑪𝑯𝑬𝑺_
° ඬ⃟🔊 _𝑨𝑼𝑫𝑰𝑶 𝑯𝑬𝑵𝑻𝑨𝑰_
° ඬ⃟🔊 _𝑪𝑯𝑰𝑪𝑨 𝑳𝑮𝑨𝑵𝑻𝑬_
° ඬ⃟🔊 _𝑭𝑬𝑳𝑰𝒁 𝑵𝑨𝑽𝑰𝑫𝑨𝑫__
° ඬ⃟🔊 _𝑨𝑻𝑬𝑵𝑪𝑰𝑶𝑵 𝑮𝑹𝑼𝑷𝑶_
° ඬ⃟🔊 _𝑴𝑨𝑹𝑰𝑪𝑨 𝑸𝑼𝑰𝑬𝑵_
° ඬ⃟🔊 _𝑴𝑼𝑹𝑰𝑶 𝑬𝑳 𝑮𝑹𝑼𝑷𝑶_
° ඬ⃟🔊 _𝑽𝑰𝑬𝑹𝑵𝑬𝑺_
° ඬ⃟🔊 _𝑩𝑨𝑵𝑬𝑨𝑫𝑶_
° ඬ⃟🔊 _𝑯𝑶𝑳𝑨_
° ඬ⃟🔊 _𝑼𝑵 𝑷𝑨𝑻𝑶_
° ඬ⃟🔊 _𝑵𝒀𝑨𝑵𝑷𝑨𝑺𝑼_
° ඬ⃟🔊 _𝑻𝑬 𝑨𝑴𝑶_
° ඬ⃟🔊 _𝒀𝑨𝑴𝑬𝑻𝑬_
° ඬ⃟🔊 _𝑩𝑨Ñ𝑨𝑻𝑬_
° ඬ⃟🔊 _𝑬𝑺 𝑷𝑼𝑻𝑶_
° ඬ⃟🔊 _𝑶𝑵𝑰𝑪𝑯𝑨𝑵_
° ඬ⃟🔊 _𝑺𝑰𝑼𝑼𝑼_
° ඬ⃟🔊 _𝑹𝑨𝑾𝑹_
° ඬ⃟🔊 _𝑼𝑾𝑼_
° ඬ⃟🔊 _:𝑪_
° ඬ⃟🔊 _𝒂_
//JONATHAN-CL//
*<𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦/>*
° ඬ⃟🛠️ _${usedPrefix}𝑨𝑭𝑲 *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}𝑨𝑪𝑶𝑹𝑻𝑨𝑹 *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}𝑪𝑨𝑳𝑪 *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}𝑫𝑬𝑳 *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}𝑸𝑹𝑪𝑶𝑫𝑬 *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}𝑹𝑬𝑨𝑫𝑴𝑶𝑹𝑬 *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}𝑺𝑷𝑨𝑴𝑾𝑨 *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}𝑺𝑻𝒀𝑳𝑬𝑻𝑬𝑿𝑻 *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}𝑻𝑹𝑨𝑫𝑼𝑪𝑰𝑹 *<texto>*_
//JONATHAN-CL//
*<𝗥𝗣𝗚 - 𝗟𝗜𝗠𝗜𝗧𝗘𝗦 - 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗔/>*
° ඬ⃟💵 _${usedPrefix}𝑩𝑨𝑳𝑨𝑵𝑪𝑬_
° ඬ⃟💵 _${usedPrefix}𝑪𝑳𝑨𝑰𝑴_
° ඬ⃟💵 _${usedPrefix}𝑻𝑶𝑷_
° ඬ⃟💵 _${usedPrefix}𝑳𝑬𝑽𝑬𝑳𝑼𝑷_
° ඬ⃟💵 _${usedPrefix}𝑴𝒀𝑵𝑺_
° ඬ⃟💵 _${usedPrefix}𝑷𝑬𝑹𝑭𝑰𝑳_
° ඬ⃟💵 _${usedPrefix}𝑾𝑶𝑹𝑲_
° ඬ⃟💵 _${usedPrefix}𝑴𝑰𝑵𝑨𝑹_
° ඬ⃟💵 _${usedPrefix}𝑩𝑼𝒀_
° ඬ⃟💵 _${usedPrefix}𝑩𝑼𝒀𝑨𝑳𝑳_
° ඬ⃟💵 _${usedPrefix}𝑻𝑹𝑨𝑵𝑺𝑭𝑬𝑹 *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑹_
° ඬ⃟💵 _${usedPrefix}𝑼𝑵𝑹𝑬𝑮 *<numero de serie>*_
//JONATHAN-CL//
*<𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>*
° ඬ⃟👽 _${usedPrefix}𝑺𝑻𝑰𝑪𝑲𝑬𝑹 *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}𝑺𝑻𝑰𝑪𝑲𝑬𝑹 *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}𝑺 *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}𝑺 *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}𝑬𝑴𝑶𝑱𝑰𝑴𝑰𝑿 *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}𝑺𝑬𝑴𝑶𝑱𝑰 *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}𝑨𝑻𝑻𝑷 *<texto>*_
° ඬ⃟👽 _${usedPrefix}𝑻𝑻𝑷 *<texto>*_
° ඬ⃟👽 _${usedPrefix}𝑷𝑨𝑻 *<@tag>*_
° ඬ⃟👽 _${usedPrefix}𝑺𝑳𝑨𝑷 *<@tag>_
° ඬ⃟👽 _${usedPrefix}𝑲𝑰𝑺𝑺 *<@tag>*_
° ඬ⃟👽 _${usedPrefix}𝑫𝑨𝑫𝑶_
° ඬ⃟👽 _${usedPrefix}𝑾𝑴 *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑴𝑨𝑲𝑬𝑹 *<efecto> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑭𝑰𝑳𝑻𝑹𝑬𝑹 *<efecto> <responder a imagen>*_
//JONATHAN-CL//
*<𝗢𝗪𝗡𝗘𝗥 𝗬 𝗠𝗢𝗗𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦/>*
° ඬ⃟👑 _${usedPrefix}𝑪𝑨𝑱𝑨𝑭𝑼𝑬𝑹𝑻𝑬_
° ඬ⃟👑 _${usedPrefix}𝑬𝑵𝑨𝑩𝑳𝑬/𝑫𝑰𝑺𝑨𝑩𝑳𝑬 *<activar o desactivar funciones>*_
° ඬ⃟👑 _${usedPrefix}𝑩𝑨𝑵𝑪𝑯𝑨𝑻_
° ඬ⃟👑 _${usedPrefix}𝑼𝑵𝑩𝑨𝑵𝑪𝑯𝑨𝑻_
° ඬ⃟👑 _${usedPrefix}𝑩𝑨𝑵𝑼𝑺𝑬𝑹 *<@tag>*_
° ඬ⃟👑 _${usedPrefix}𝑼𝑵𝑩𝑨𝑵𝑼𝑺𝑬𝑹 *<@tag>*_
° ඬ⃟👑 _${usedPrefix}𝑩𝑪 *<texto>*_
° ඬ⃟👑 _${usedPrefix}𝑩𝑪𝑪𝑯𝑨𝑻𝑺 *<texto>*_
° ඬ⃟👑 _${usedPrefix}𝑩𝑪𝑮𝑪 *<texto>*_
° ඬ⃟👑 _${usedPrefix}𝑪𝑳𝑬𝑨𝑹𝑻𝑷𝑴_
° ඬ⃟👑 _${usedPrefix}𝑹𝑬𝑺𝑻𝑨𝑹𝑻_
° ඬ⃟👑 _${usedPrefix}𝑼𝑷𝑫𝑨𝑻𝑬_
° ඬ⃟👑 _${usedPrefix}𝑨𝑫𝑫𝑷𝑹𝑬𝑴 *<@tag>*_
° ඬ⃟👑 _${usedPrefix}𝑫𝑬𝑳𝑷𝑹𝑬𝑴 *<@tag>*_
° ඬ⃟👑 _${usedPrefix}𝑳𝑰𝑺𝑻𝑷𝑹𝑬𝑴_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['🌹 𝗢𝗪𝗡𝗘𝗥 🌹', '/owner'],
['🐾 𝗜𝗡𝗙𝗢𝗕𝗢𝗧 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

