let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`https://github.com/jayden-official 
┌───⊷ 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 ⊶
𓆈 *Name:* ${name}
𓆈 *Diamonds:* ${global.db.data.users[who].limit}💎
└──────────────
*NOTE:*
*YOU CAN BUY DIAMONDS 💎 USING THE COMMANDS*
❏ *${usedPrefix}buy <amount>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
