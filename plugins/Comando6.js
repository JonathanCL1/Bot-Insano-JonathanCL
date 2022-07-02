let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*👻👻 MEDIDOR DE INSANIDAD 👻👻*
*La insanidad de ${text} es de ${['0%','14%','23%','33%','45%','48%','53%','61%','71%','1%','50%','37%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%%','98%','99%','100%'].getRandom()}*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['Insanidad']
handler.tags = ['fun']
handler.command = /^(insanidad)$/i
export default handler
