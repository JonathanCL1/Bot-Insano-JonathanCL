/* 

Codigo abierto - Dejar creditos
Created by https://github.com/BrunoSobrino 

👇🏻 EMPEIZA A MODIFICAR DESDE AQUÍ 👇🏻 */

import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender   
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
year: 'numeric' })
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric' }).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric' })
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)}) * 1000 }
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
readmore: readMore }
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])    
    
let imagen1 = fs.readFileSync('./Menu2.jpg')
let imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
let imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
let texto1 = `*ミ 💖 𝙷𝙾𝙻𝙰 ✨ $ { nombre } ✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝙱𝙾𝚃-𝙸𝙽𝚂𝙰𝙽𝙾-𝙹𝙾𝙽𝙰𝚃𝙷𝙰𝙽𝙲𝙻 💖 彡*
*📅 𝙵𝙴𝙲𝙷𝙰: ${ semana } , ${ fecha } *
* 📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${ tiempo de actividad } *
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${ rtotalreg } *
*<𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋/>*
*𝙱𝙾𝚃-𝙸𝙽𝚂𝙰𝙽𝙾-𝙹𝙾𝙽𝙰𝚃𝙷𝙰𝙽𝙲𝙻 💖彡*
*<𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆/>*
° ඬ⃟👽 _ ${ usedPrefix } join *<enlace/link/url>*_
*<𝕁𝕌𝔼𝔾𝕆𝕊/>*
° ඬ⃟🎖️ _ ${ usedPrefix } compañeros *<novato / fácil / medio / difícil / extremo /imposible /imposible2>*_
° ඬ⃟🎖️ _ ${ usedPrefix } ppt *<papel / tijera /piedra>*_
° ඬ⃟🎖️ _ ${ usedPrefix } manco *<nombre / @tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } manca *<nombre / @tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } rata *<nombre / @tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } love *<nombre / @tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } doxear *<nombre / @tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } pregunta *<texto>*_
° ඬ⃟🎖️ _ ${ usedPrefix } slot *<apuesta>*_
° ඬ⃟🎖️ _ ${ usedPrefix } pvp *<@tag>*_
° ඬ⃟🎖️ _ ${ usedPrefix } simi *<texto>*_
° ඬ⃟🎖️ _ ${ usedPrefix } topgays_
° ඬ⃟🎖️ _ ${ usedPrefix } topotakus_
° ඬ⃟🎖️ _ ${ usedPrefix } formarpareja_
° ඬ⃟🎖️ _ ${ usedPrefix } verdad_
° ඬ⃟🎖️ _ ${ usedPrefix } reto_
*<ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸/>*
° ඬ⃟☑️ _ ${ usedPrefix } habilitar *bienvenido*_
° ඬ⃟☑️ _ ${ usedPrefix } deshabilitar *bienvenido*_
° ඬ⃟☑️ _ ${ usedPrefix } habilitar *modohorny*_
° ඬ⃟☑️ _ ${ usedPrefix } deshabilitar *modohorny*_
° ඬ⃟☑️ _ ${ usedPrefix } habilitar *antienlace*_
° ඬ⃟☑️ _ ${ usedPrefix } deshabilitar *antienlace*_
° ඬ⃟☑️ _ ${ usedPrefix } habilitar *antilink2*_
° ඬ⃟☑️ _ ${ usedPrefix } deshabilitar *antilink2*_
° ඬ⃟☑️ _${usedPrefix}enable *detect*_
° ඬ⃟☑️ _${usedPrefix}disable *detect*_
° ඬ⃟☑️ _${usedPrefix}enable *audios*_
° ඬ⃟☑️ _${usedPrefix}disable *audios*_
° ඬ⃟☑️ _${usedPrefix}enable *autosticker*_
° ඬ⃟☑️ _${usedPrefix}disable *autosticker*_
*<ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊/>*
° ඬ⃟🔰 _${usedPrefix}reporte *<texto>*_
*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*
° ඬ⃟👻 _${usedPrefix}facebook *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}mediafire *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}gitclone *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}gdrive *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}tiktok *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}play *<texto>*_
° ඬ⃟👻 _${usedPrefix}play2 *<texto>*_
° ඬ⃟👻 _${usedPrefix}ytmp3 *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}ytmp4 *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° ඬ⃟👻 _${usedPrefix}spotify *<texto>*_
° ඬ⃟👻 _${usedPrefix}imagen *<texto>*_
° ඬ⃟👻 _${usedPrefix}pinteret *<texto>*_
° ඬ⃟👻 _${usedPrefix}wallpaper *<texto>*_
° ඬ⃟👻 _${usedPrefix}wallpaper2 *<texto>*_
° ඬ⃟👻 _${usedPrefix}pptiktok *<nombre de usuario>*_
° ඬ⃟👻 _${usedPrefix}igstalk *<nombre de usuario>*_
° ඬ⃟👻 _${usedPrefix}igstory *<nombre de usuario>*_
° ඬ⃟👻 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 
° ඬ⃟💎 _${usedPrefix}add *<numero>*_
° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
° ඬ⃟💎 _ ${ usedPrefix } grupo *<abrir / cerrar>*_
° ඬ⃟💎 _ ${ usedPrefix } promover *<@tag>*_
° ඬ⃟💎 _ ${ usedPrefix } degradar *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _ ${ usedPrefix } degradar *<@tag>*_
° ඬ⃟💎 _ ${ usedPrefix } infogroup_
° ඬ⃟💎 _ ${ usedPrefix } link_
° ඬ⃟💎 _ ${ usedPrefix } setname *<texto>*_
° ඬ⃟💎 _ ${ usedPrefix } setdesc *<texto>*_
° ඬ⃟💎 _ ${ usedPrefix } invocar *<texto>*_
° ඬ⃟💎 _ ${ usedPrefix } setwelcome *<texto>*_
° ඬ⃟💎 _ ${ usedPrefix } setbye *<texto>*_
° ඬ⃟💎 _ ${ usedPrefix } hidetag *<texto>*_
*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*
° ඬ⃟🧧 _ ${ usedPrefix } toimg *<responde a un sticker>*_
° ඬ⃟🧧 _ ${ usedPrefix } tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _ ${ usedPrefix } toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _ ${ usedPrefix } tovideo *<responde a un audio>*_
° ඬ⃟🧧 _ ${ usedPrefix } tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _ ${ usedPrefix } tts es *<texto>*_
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*
° ඬ⃟🖍️ _ ${ usedPrefix } logos *<efecto> <texto>*_
° ඬ⃟🖍️ _ ${ usedPrefix } simpcard *<@tag>*_
° ඬ⃟🖍️ _ ${ usedPrefix } hornycard *<@tag>*_
° ඬ⃟🖍️ _ ${ usedPrefix } lolice *<@tag>*_
° ඬ⃟🖍️ _ ${ usedPrefix } ytcomment *<texto>*_
° ඬ⃟🖍️ _ ${ usedPrefix } itssostupid_
° ඬ⃟🖍️ _ ${ usedPrefix } pixelar_
° ඬ⃟🖍️ _ ${ usedPrefix } blur_
*<ℝ𝔸ℕ𝔻𝕆𝕄/>*
° ඬ⃟👾 _ ${ usedPrefix } cristianoronaldo_
° ඬ⃟👾 _ ${ usedPrefix } messi_
° ඬ⃟👾 _ ${ usedPrefix } meme_
° ඬ⃟👾 _ ${ usedPrefix } itzy_
° ඬ⃟👾 _ ${ usedPrefix } blackpink_
° ඬ⃟👾 _ ${ usedPrefix } kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 _ ${ usedPrefix } lolivid_
° ඬ⃟👾 _ ${ usedPrefix } loli_
° ඬ⃟👾 _ ${ usedPrefix } navidad_
° ඬ⃟👾 _ ${ usedPrefix } pppareja_
° ඬ⃟👾 _ ${ usedPrefix } neko_
° ඬ⃟👾 _ ${ usedPrefix } waifu_
° ඬ⃟👾 _ ${ usedPrefix } akira_
° ඬ⃟👾 _ ${ usedPrefix } akiyama_
° ඬ⃟👾 _ ${ usedPrefix } anna_
° ඬ⃟👾 _ ${ usedPrefix } asuna_
° ඬ⃟👾 _ ${ usedPrefix } ayuzawa_
° ඬ⃟👾 _ ${ usedPrefix } boruto_
° ඬ⃟👾 _ ${ usedPrefix } chiho_
° ඬ⃟👾 _ ${ usedPrefix } chitoge_
° ඬ⃟👾 _ ${ usedPrefix } deidara_
° ඬ⃟👾 _ ${ usedPrefix } erza_
° ඬ⃟👾 _ ${ usedPrefix } elaina_
° ඬ⃟👾 _ ${ usedPrefix } eba_
° ඬ⃟👾 _ ${ usedPrefix } emilia_
° ඬ⃟👾 _ ${ usedPrefix } hestia_
° ඬ⃟👾 _ ${ usedPrefix } hinata_
° ඬ⃟👾 _ ${ usedPrefix } inori_
° ඬ⃟👾 _ ${ usedPrefix } isuzu_
° ඬ⃟👾 _ ${ usedPrefix } itachi_
° ඬ⃟👾 _ ${ usedPrefix } itori_
° ඬ⃟👾 _ ${ usedPrefix } kaga_
° ඬ⃟👾 _ ${ usedPrefix } kagura_
° ඬ⃟👾 _ ${ usedPrefix } kaori_
° ඬ⃟👾 _ ${ usedPrefix } keneki_
° ඬ⃟👾 _ ${ usedPrefix } kotori_
° ඬ⃟👾 _${usedPrefix}kurumi_
° ඬ⃟👾 _${usedPrefix}madara_
° ඬ⃟👾 _${usedPrefix}mikasa_
° ඬ⃟👾 _${usedPrefix}miku_
° ඬ⃟👾 _${usedPrefix}minato_
° ඬ⃟👾 _${usedPrefix}naruto_
° ඬ⃟👾 _${usedPrefix}nezuko_
° ඬ⃟👾 _${usedPrefix}sagiri_
° ඬ⃟👾 _${usedPrefix}sasuke_
° ඬ⃟👾 _${usedPrefix}sakura_
° ඬ⃟👾 _${usedPrefix}cosplay_
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _ ${ usedPrefix } robot_
° ඬ⃟🎤 _ ${ usedPrefix } lento_
° ඬ⃟🎤 _ ${ usedPrefix } smooth_
° ඬ⃟🎤 _ ${ usedPrefix } tupai_
*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*
° ඬ⃟📳 _ ${ usedPrefix } start_
° ඬ⃟📳 _ ${ usedPrefix } next_
° ඬ⃟📳 _ ${ usedPrefix } dejar_
*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*
° ඬ⃟🔍 _ ${ usedPrefix } animeinfo *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } google *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } letra *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } wikipedia *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } ytsearch *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } apkdone *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } apkgoogle *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } apkmody *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } apkshub *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } happymod *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } hostapk *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } revdl *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } toraccino *<texto>*_
° ඬ⃟🔍 _ ${ usedPrefix } uapkpro *<texto>*_
*<𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *,.) *
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
° ඬ⃟🔊 _Turi ip ip ip_
° ඬ⃟🔊 _wenamechinasama_
° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos días_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atención grupo_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
° ඬ⃟🔊 _waza_
*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*
° ඬ⃟🛠️ _ ${ usedPrefix } afk *<motivo>*_
° ඬ⃟🛠️ _ ${ usedPrefix } acortar *<enlace/link/url>*_
° ඬ⃟🛠️ _ ${ usedPrefix } calc *<operacion math>*_
° ඬ⃟🛠️ _ ${ usedPrefix } del *<responder a mensaje del Bot>*_
° ඬ⃟🛠️ _ ${ usedPrefix } qrcode *<texto>*_
° ඬ⃟🛠️ _ ${ usedPrefix } leer más *<texto1| texto2>*_
° ඬ⃟🛠️ _ ${ usedPrefix } spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _ ${ usedPrefix } styletext *<texto>*_
° ඬ⃟🛠️ _ ${ usedPrefix } traducir *<texto>*_
*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*
° ඬ⃟💵 _ ${ usedPrefix } balance_
° ඬ⃟💵 _ ${ usedPrefix } Claim_
° ඬ⃟💵 _ ${ usedPrefix } top_
° ඬ⃟💵 _ ${ usedPrefix } levelup_
° ඬ⃟💵 _ ${ usedPrefix } myns_
° ඬ⃟💵 _ ${ usedPrefix } perfil_
° ඬ⃟💵 _ ${ usedPrefix } trabajo_
° ඬ⃟💵 _ ${ usedPrefix } minar_
° ඬ⃟💵 _ ${ usedPrefix } comprar_
° ඬ⃟💵 _ ${ usedPrefix } buyall_
° ඬ⃟💵 _ ${ usedPrefix } transferencia *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _ ${ usedPrefix } verificar_
° ඬ⃟💵 _ ${ usedPrefix } unreg *<numero de serie>*_
*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*
° ඬ⃟👽 _ ${ usedPrefix } sticker *<responder a imagen o video>*_
° ඬ⃟👽 _ ${ usedPrefix } sticker *<enlace/link/url>*_
° ඬ⃟👽 _ ${ usedPrefix } s *<responder a imagen o video>*_
° ඬ⃟👽 _ ${ usedPrefix } s *<enlace/link/url>*_
° ඬ⃟👽 _ ${ usedPrefix } emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _ ${ usedPrefix } emoji *<tipo> <emoji>*_
° ඬ⃟👽 _ ${ usedPrefix } attp *<texto>*_
° ඬ⃟👽 _ ${ usedPrefix } ttp *<texto>*_
° ඬ⃟👽 _ ${ usedPrefix } pat *<@tag>*_
° ඬ⃟👽 _ ${ usedPrefix } slap *<@tag>_
° ඬ⃟👽 _ ${ usedPrefix } beso *<@tag>*_
° ඬ⃟👽 _ ${ usedPrefix } dado_
° ඬ⃟👽 _ ${ usedPrefix } wm *<nombre del paquete> <autor>*_
° ඬ⃟👽 _ ${ usedPrefix } stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _ ${ usedPrefix } stickerfilter *<efecto> <responder a imagen>*_
*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*
° ඬ⃟👑 _ ${ usedPrefix } cajafuerte_
° ඬ⃟👑 _ ${ usedPrefix } habilitar *restringir*_
° ඬ⃟👑 _ ${ usedPrefix } deshabilitar *restringir*_
° ඬ⃟👑 _ ${ usedPrefix } habilitar *lectura automática*_
° ඬ⃟👑 _ ${ usedPrefix } deshabilitar *lectura automática*_
° ඬ⃟👑 _ ${ usedPrefix } habilitar *público*_
° ඬ⃟👑 _ ${ usedPrefix } deshabilitar *público*_
° ඬ⃟👑 _ ${ usedPrefix } habilitar *pconly*_
° ඬ⃟👑 _ ${ usedPrefix } deshabilitar *pconly*_
° ඬ⃟👑 _ ${ usedPrefix } habilitar *gconly*_
° ඬ⃟👑 _ ${ usedPrefix } deshabilitar *gconly*_
° ඬ⃟👑 _ ${ usedPrefix } banchat_
° ඬ⃟👑 _ ${ usedPrefix } unbanchat_
° ඬ⃟👑 _ ${ usedPrefix } banuser *<@tag>*_
° ඬ⃟👑 _ ${ usedPrefix } unbanuser *<@tag>*_
° ඬ⃟👑 _ ${ usedPrefix } banuser *<@tag>*_
° ඬ⃟👑 _ ${ usedPrefix } bc *<texto>*_
° ඬ⃟👑 _ ${ usedPrefix } bcchats *<texto>*_
° ඬ⃟👑 _ ${ usedPrefix } bcgc *<texto>*_
° ඬ⃟👑 _ ${ usedPrefix } cleartpm_
° ඬ⃟👑 _ ${ usedPrefix } reiniciar_
° ඬ⃟👑 _ ${ usedPrefix } update_
° ඬ⃟👑 _ ${ usedPrefix } addprem *<@etiqueta>*_
° ඬ⃟👑 _ ${ usedPrefix } delprem *<@etiqueta>*_
° ඬ⃟👑 _ ${ usedPrefix } listprem_

const fake = { quoted: {
key : {
participant : '0@s.whatsapp.net' },
message: {
orderMessage: {
itemCount : 999999,
status: 1,
surface : 1,
message: wm, 
orderTitle: 'WaBot',
thumbnail: imagen2, 
sellerJid: '0@s.whatsapp.net' }}}}      
const owner = "5219992095479@s.whatsapp.net"
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{buttonId: `#menucompleto`, buttonText: {displayText: '💟 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 💟'}, type: 1}, ]
let buttonMessage = {
document: imagen1, 
fileName: `ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩`, 
mimetype: `application/${document}`,
jpegThumbnail: imagen1,
caption: texto1,
fileLength: "99999999999999",
mentions:[m.sender, owner],
footer: `𝔹𝕪 𝔹𝕣𝕦𝕟𝕠 𝕊𝕠𝕓𝕣𝕚𝕟𝕠`,
buttons: buttons,
headerType: 4,   
contextInfo: {
"mentionedJid": [m.sender, owner],
"externalAdReply": {
"showAdAttribution": false,
"title": `MENU COMPLETO`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": imagen3,
"mediaUrl": 'https://youtu.be/Xmm-pVffJBk',
"sourceUrl": 'https://youtu.be/Xmm-pVffJBk' }}} 
conn.sendMessage(m.chat, buttonMessage, fake)}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
