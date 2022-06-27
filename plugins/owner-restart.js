import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝙴𝚂𝚃𝙰 𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙿𝙾𝙲𝙾 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙴𝙽𝚅𝙸𝙰𝚁 𝙼𝙰𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*```')
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler
