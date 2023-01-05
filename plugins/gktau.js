//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya Kizu-MD Jangan Lupa Gabung Group Kizu-MD Official\n\nAtau bisa klik link Group : https://chat.whatsapp.com/KLfJ0fI1UnCLhRtv2aYoxv', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['zyko-md']

handler.admin = false
handler.group = false

export default handler
