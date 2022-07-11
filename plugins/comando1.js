let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*STAFF:* ${pesan}`
let text = `*━「* 𝗦𝗧𝗔𝗙𝗙 𝗗𝗘 ${groupMetadata.subject} *」━*
 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:
 ${listAdmin}
 *𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* 
 @${owner.split('@')[0]}       
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/JonathanCL1/Bot-Insano-JonathanCL', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = /^(Staff|staff|staf|Staf)$/i
handler.group = true
export default handler
