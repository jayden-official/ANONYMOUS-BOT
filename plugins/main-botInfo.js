import { cpus as _cpus, totalmem, freemem } from 'os'
import utility from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
   std: 'JEDEC', // 'YES' (default) | 'IEC' | 'JEDEC'
   decimalPlaces: 2,
   keepTrailingZeroes: false,
   render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
   const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
   const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
   const cpus = _cpus().map(cpu => {
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
     return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
   }, {
     speed: 0,
     overall: 0,
     times: {
       user: 0,
       nice: 0,
       sys: 0,
       idle: 0,
       irq: 0
     }
   })
   let old = performance.now()
  
   let neww = performance.now()
   let speed = neww - old
  
let infobt = `
≡ *BUMBLEBEE BOT INFO*
  *STATE*
𓆈 *${groupsIn.length}* Group Chats
𓆈 *${groupsIn.length}* United groups
𓆈 *${groupsIn.length - groupsIn.length}* Abandoned groups
𓆈 *${chats.length - groupsIn.length}* Private chats
𓆈 *${chats.length}* Total Chats

*≡ OWNER*
   JAYDEN-TECHNOLOGIES
𓆈 Instagram :
   •https://github.com/jayden-official
𓆈 WhatsApp :
   • (DM ONLY WHEN NECESSARY)
𓆈 GitHub :
   • https://github.com/jayden-official/ANONYMOUS-BOT
 
  *≡ HELPERS* *CRISS*
𓆈 WhatsApp : wa.me/254794597254
 jayden+TECHNOLOGY 
𓆈 WhatsApp : wa.me/254786827982

  *≡ S E R V E R*
*🛑RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵FreeRAM:* ${format(freemem())}

*≡ NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length )), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
m.reply(infobt)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'git','botinfo']

export default handler
