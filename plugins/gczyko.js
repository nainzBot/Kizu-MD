/*import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  
    
    conn.sendButtonDoc(text, wm, 'ᴡᴇʟᴄᴏᴍᴇ', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/dikaaxyz_',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/67efab3c53f2a7c6e5ce3.jpg")).buffer(),
    sourceUrl: sgc
     }}
  })*/
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `
*Klik bacaan "ᴄʟɪᴄᴋ ʜᴇʀᴇ*"
`

conn.sendButtonDoc(m.chat, str, wm,' ᴏᴋᴇ ','huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/dikaaxyz_',
    mediaType: 2, 
    description: sgc,
    title: '≪ Jᴏɪɴ Sɪɴɪ Cᴜʏ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/67efab3c53f2a7c6e5ce3.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['gcbul']

handler.tags = ['info']

handler.command = /^zykobotz-md|gcbul$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler
