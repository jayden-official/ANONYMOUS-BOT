
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let pp = imagen4
  
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`╭────[ *𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𓆈 𝐛𝐨𝐭* ]
│🏮💛Bot active duration💛🏮
│  𓆈𝐆𝐈𝐓𝐇𝐔𝐁 https://github.com/jayden-official 
│𓆈 𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝐣𝐚𝐲𝐝𝐞𝐧 𝐭𝐞𝐜𝐡
│𓆈𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐍𝐔𝐌𝐁𝐄𝐑= wa.me/254794597254
╰────────────────\n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
