let handler = async(m, { conn }) => {

await conn.fetchBlocklist().then(async data => {
let txt = `https://github.com/jayden-official *≡ Block List*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `𓆈 @${i.split("@")[0]}\n`
}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console. log(err);
throw 'https://github.com/jayden-official No numbers blocked'
})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock']

export default handler
