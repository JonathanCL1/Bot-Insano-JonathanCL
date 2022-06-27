import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `


------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*

ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/JonathanCL1/Bot-Insano-JonathanCL
> cd Bot-Insano-JonathanCL
> yarn install 
> npm install
> npm update
> npm start
------------------------------------
*ACTIVAR EN CASO DE DETENERSE
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:*

> cd 
> cd Bot-Insano-JonathanCL
> npm start
------------------------------------
*OBTENER OTRO CODIGO QR
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:*

> cd 
> cd Bot-Insano-JonathanCL
> rm -rf session.data.json
> npm start
------------------------------------
NOTAS
*- ES RECOMENDABLE LEER TODO EL MENU Y VER EL FUNCIONAMIENTO DE CADA UNO DE LOS COMANDOS
- NO MODIFIQUES NADA QUE NO SEPAS PARA QUE ES, PARA EVITAR PROBLEMAS O ERRORES
- EL BOT ES COMPARTIBLE CON WHATSAPP NORMAL O BUSINESS
- ATENTO A LAS ACTUALIZACIONES QUE SE HAGAN EN ESTE REPOSITORIO
- EL ADD Y EL KICK PUEDEN OCASIONAR QUE EL NUMERO SE VAYA A SOPORTE O SEA BANEADO DE WHATSAPP 
- SE RECOMIENDA REESCANEAR EL CODIGO QR CADA 2 DIAS, PARA EVITAR PROBLEMAS O ERRORES*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: '𝓑𝓸𝓽-𝓘𝓷𝓼𝓪𝓷𝓸-𝓙𝓸𝓷𝓪𝓽𝓱𝓪𝓷𝓒𝓛',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/JonathanCL1/Bot-Insano-JonathanCL`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
