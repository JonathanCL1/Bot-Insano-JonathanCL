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
*<𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎/>*
° ඬ⃟ _${usedPrefix}𝗝𝗢𝗜𝗡 *<enlace / link / url>*_
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
*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*
° ඬ⃟💥 _${usedPrefix}𝗘𝗡𝗔𝗕𝗟𝗘
° ඬ⃟💥 _${usedPrefix}𝗗𝗜𝗦𝗔𝗕𝗟𝗘
*</>*
° ඬ⃟🔰 _${usedPrefix}𝗥𝗘𝗣𝗢𝗥𝗧𝗘 *<texto>*_
*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*
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
*<𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒/>*
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐈𝐌𝐆 *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐌𝐏3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐏𝐏𝐓 *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐕𝐈𝐃𝐄𝐎 *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐎𝐔𝐑𝐋 *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}𝐓𝐓𝐒 𝐄𝐒 *<texto>*_
*<𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒/>*
° ඬ⃟🖍️ _${usedPrefix}𝐋𝐎𝐆𝐎𝐒 *<efecto> <texto>*_
° ඬ⃟🖍️ _${usedPrefix}𝐒𝐈𝐌𝐏𝐂𝐀𝐑𝐃 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐇𝐎𝐑𝐍𝐘𝐂𝐀𝐑𝐃 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐋𝐎𝐋𝐈𝐂𝐄 *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}𝐘𝐓𝐂𝐎𝐌𝐌𝐄𝐍𝐓 *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}𝐈𝐓𝐒𝐎𝐒𝐓𝐔𝐏𝐈𝐃_
° ඬ⃟🖍️ _${usedPrefix}𝐏𝐈𝐗𝐄𝐋𝐀𝐑_
° ඬ⃟🖍️ _${usedPrefix}𝐁𝐋𝐔𝐑_
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
*<𝗖𝗛𝗔𝗧 𝗔𝗡𝗢𝗡𝗜𝗠𝗢/>*
° ඬ⃟📳 _${usedPrefix}𝑺𝑻𝑨𝑹𝑻_
° ඬ⃟📳 _${usedPrefix}𝑵𝑬𝑿𝑻_
° ඬ⃟📳 _${usedPrefix}𝑳𝑬𝑨𝑽𝑬_
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
*<𝗔𝗨𝗗𝗜𝗢𝗦/>* 
*- 𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙇𝘼𝙎 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀𝙎 𝙋𝘼𝙇𝘼𝘽𝙍𝘼𝙎 𝙊 𝙁𝙍𝘼𝙎𝙀𝙎 𝙎𝙄𝙉 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Turi ip ip ip_
° ඬ⃟🔊 _Wenamechininsama_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*
° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*
° ඬ⃟💵 _${usedPrefix}balance_
° ඬ⃟💵 _${usedPrefix}claim_
° ඬ⃟💵 _${usedPrefix}top_
° ඬ⃟💵 _${usedPrefix}levelup_
° ඬ⃟💵 _${usedPrefix}myns_
° ඬ⃟💵 _${usedPrefix}perfil_
° ඬ⃟💵 _${usedPrefix}work_
° ඬ⃟💵 _${usedPrefix}minar_
° ඬ⃟💵 _${usedPrefix}buy_
° ඬ⃟💵 _${usedPrefix}buyall_
° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}verificar_
° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_
*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*
° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}sticker *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}dado_
° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*
° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}banchat_
° ඬ⃟👑 _${usedPrefix}unbanchat_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}update_
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
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

