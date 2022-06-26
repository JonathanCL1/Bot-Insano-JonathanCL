import { performance } from 'perf_hooks'
let handler = async (m, { conn, text }) => {
let start = `*☠ ¡¡𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙳𝙾𝚇𝚇𝙴𝙾!! ☠*`
let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`
await m.reply(start)
await m.reply(boost)
await m.reply(boost3)
await m.reply(boost5)
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*[ ✔ ] 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙳𝙾𝚇𝚇𝙴𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*⏳ 𝙳𝙾𝚇𝚇𝙴𝙰𝙳𝙾 𝙴𝙽: ${speed} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜!*

*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙾𝙱𝚃𝙴𝙽𝙸𝙳𝙾𝚂:*

*RESULTADOS:*
*IP:192.86.839.234*
*ROUTER PROVEEDOR:**IZZITELECOM
*DEVICE PROVEEDOR: WIN32-X*
*HTTP:* 192.168.3.1:433-->92.28.211.234:80
*Upd:* 192.168452-->92.28.211:7265288
*Tcp:* 192.168.682-->92.28.211:62227.7
*UBICACION EXACTA: https://www.google.es/maps/place/43%C2%B020%2753.0%22N+2%C2%B051%2752.5%22W/@43.3481558,-2.8647878,15z/data=%214m2%213m1%211s0x0:0x0* '

conn.reply(m.chat, doxeo, m)
}
handler.help = ['doxear <nombre> | <@tag>']
handler.tags = ['fun']
handler.command = /^Doxxeo|doxxeo|doxxear|Doxxear|doxeo|doxear|doxxeame|doxeame/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
