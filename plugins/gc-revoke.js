let handler = async(m, { conn }) => {
   let res = await conn.groupRevokeInvite(m.chat)
   m.reply('𓆈 Group link has been successfully reset𓆈\n\n📌 New link:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'revokelink']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
