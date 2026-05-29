require('../settings.js')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const chunkArray = (array, size) => {
  const chunks = []
  for (let i = 0; i < array.length; i += size) chunks.push(array.slice(i, i + size))
  return chunks
}

const totalCaseFeatures = () => {
  try {
    const nanoPath = path.join(__dirname, '..', 'Nano.js')
    const source = fs.readFileSync(nanoPath, 'utf8')
    return (source.match(/case '/g) || []).length
  } catch {
    return 0
  }
}

const styledMenu = (prefix, { icon = '📌', title = 'MENU', subtitle = 'Command Center', commands = [], sections = null, totalOverride = null }) => {
  const sectionNames = ['Core Tools', 'Smart Actions', 'Creative Kit', 'Utility Panel', 'Extra Commands', 'Advanced Set', 'More Tools']
  const groups = sections || chunkArray(commands, 8).map((items, index) => ({
    title: sectionNames[index] || `Command Set ${index + 1}`,
    items
  }))

  const body = groups.map(group => {
    const rows = group.items
      .map(item => `│  • ${prefix}${item}`)
      .join('\n')
    return `╭─〔 ${group.icon || '◇'} *${group.title}* 〕\n${rows}\n╰──────────────`
  }).join('\n')
  const total = totalOverride ?? (commands.length || groups.reduce((n, g) => n + g.items.length, 0))

  if (title === 'ALL MENU') return `
✦━━━〔 🚀 *𝐀𝐋𝐋 𝐌𝐄𝐍𝐔* 〕━━━✦

╭─〔 🤖 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎* 〕─⬣
│ 🧠 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : *${botname}*
│ 👑 𝐎𝐰𝐧𝐞𝐫    : *${ownername}*
│ 🌐 𝐌𝐨𝐝𝐞     : *${subtitle}*
│ ⚙️ 𝐒𝐲𝐬𝐭𝐞𝐦   : *Case Method*
│ 📊 𝐅𝐢𝐭𝐮𝐫    : *${total} Command*
│ ⚡ 𝐒𝐭𝐚𝐭𝐮𝐬   : *Active & Online*
╰──────────────⬣

✦━━━〔 ⚠️ *𝐒𝐘𝐒𝐓𝐄𝐌 𝐍𝐎𝐓𝐄* 〕━━━✦

⚠️ Gunakan fitur dengan bijak
🚫 Jangan spam / abuse sistem
🔐 Semua aktivitas dipantau owner
⛔ Pelanggaran berat bisa diblokir

╭━━━〔 📜 *𝐃𝐀𝐅𝐓𝐀𝐑 𝐌𝐄𝐍𝐔* 〕━━━⬣
┃ 🎯 Pilih fitur sesuai kebutuhan kamu
┃ ⚡ Semua command siap digunakan
╰━━━━━━━━━━━━━━━━━━⬣
╭─〔 🌐 Ready Panel legal 〕
│ zanspiwpteroshoppanel.my.id
╰───────────────
${body}
╭─〔 *INFO* 〕
│ Total : *${total} command*
│ Prefix: *${prefix || '.'}*
╰━━━━━━━━━━━━━━━━━━━━
*By ${ownername}*`

  return `
╭━━━〔 ${icon} *${title}* 〕━━━╮
│ Bot   : *${botname}*
│ Mode  : ${subtitle}
│ Owner : *${ownername}*
╰━━━━━━━━━━━━━━━━━━━━╯
${body}
╭─〔 *INFO* 〕
│ Total : *${total} command*
│ Prefix: *${prefix || '.'}*
╰━━━━━━━━━━━━━━━━━━━━
*By ${ownername}*`
}

global.allmenu = (prefix, hituet) => {
return styledMenu(prefix, {
  icon: '⚡',
  title: 'ALL MENU',
  subtitle: 'Semua command NanoBotzID',
  totalOverride: totalCaseFeatures(),
  commands: ['otakudesu', 'kaorinusantara', 'akira', 'akiyama', 'ana', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'cosplayloli', 'cosplaysagiri', 'deidara', 'doraemon', 'elaina', 'emilia', 'erza', 'gremory', 'hestia', 'hinata', 'husbu', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kakasih', 'kaori', 'keneki', 'kotori', 'kurumi', 'loli', 'madara', 'megumin', 'mikasa', 'mikey', 'miku', 'minato', 'naruto', 'neko', 'neko2', 'nekonime', 'nezuko', 'onepiece', 'pokemon', 'randomnime', 'randomnime2', 'rize', 'sagiri', 'sakura', 'sasuke', 'shina', 'shinka', 'shinomiya', 'shizuka', 'shota', 'tejina', 'toukachan', 'tsunade', 'waifu', 'animewall', 'yotsuba', 'yuki', 'yulibocil', 'yumeko', '8ball', 'tickle', 'gecg', 'feed', 'animeawoo', 'animemegumin', 'animeshinobu', 'animehandhold', 'animehighfive', 'animecringe', 'animedance', 'animehappy', 'animeglomp', 'animeblush', 'animesmug', 'animewave', 'animesmile', 'animepoke', 'animewink', 'animebonk', 'animebully', 'animeyeet', 'animebite', 'animelick', 'animekill', 'animecry', 'animewlp', 'animekiss', 'animehug', 'animeneko', 'animepat', 'animeslap', 'animecuddle', 'animewaifu', 'animenom', 'animefoxgirl', 'animegecg', 'animetickle', 'animefeed', 'animeavatar', 'genshin', 'anime', 'amv', 'autoread', 'addsewa', 'delsewa', 'onlypc', 'onlygc', 'self', 'clearchat', 'pinchat', 'unpinchat', 'gconly', 'public', 'setpppanjang', 'setppgcpanjang', 'addcase', 'join', 'bctext', 'poll', 'bcimage', 'bcvideo', 'creategc', 'setexif', 'userjid', 'setbotname', 'setbotbio', 'delppbot', 'restart', 'setppbot', 'addprem', 'delprem', 'addowner', 'delowner', 'addvn', 'delvn', 'addsticker', 'delsticker', 'addimage', 'delimage', 'addvideo', 'delvideo', 'block', 'unblock del', 'leavegc', 'pushkontak', 'pushkontakv2', 'pushkontakv3', 'pushkontakv4', 'savekontakv', 'savekontakv2', 'getkontak', 'sendkontak', 'jpm', 'jpm2', 'ping', 'tqtoto', 'ttp', 'brat', 'animebrat', 'bratvid', 'furbrat', 'totalchat', 'hytam', 'cekidch', 'ceksewa', 'listsewa', 'readviewonce', 'cekkhodam', 'paptt', 'alkitab', 'totalfitur', 'menu', 'myip', 'reportbug', 'listpem', 'liststicker', 'listimage', 'listvideo', 'listvn', 'listbadword', 'listpc', 'listgc', 'owner', 'jadibot', 'listjadibot', 'donate', 'friend', 'obfuscate', 'styletext', 'fliptext', 'tts', 'say', 'togif', 'toqr', 'bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'squirrel', 'tinyurl', 'tovn', 'toaudio', 'tomp3', 'tomp4', 'toimg', 'toonce', 'sticker', 'take', 'emoji', 'volume', 'ebinary', 'dbinary', 'ssweb', 'quoted', 'runtime', 'kerja', 'fightnaga', 'fightkucing', 'fightphonix', 'fightgriffin', 'fightkyubi', 'fightcentaur', 'nabung', 'mining', 'bankcek', 'maling', 'banknabung', 'banktarik', 'berkebon', 'crafting', 'bet', 'bonus', 'buah', 'nebang', 'bekerja', 'bansos', 'taxy', 'mulung', 'berburu', 'polisi', 'berdagang', 'rampok', 'bunuh', 'collect', 'mancing', 'repair', 'fight', 'gajian', 'upgrade', 'transfer', 'shop', 'selectskill', 'sampah', 'roket', 'ojek', 'nguli', 'pasar', 'rob', 'referal', 'petshop', 'kolam', 'koboy', 'leaderboard', 'casino', 'ewe-paksa', 'duel', 'petualang', 'perangsarung', 'ulartangga', 'slot', 'tebakanml', 'tebakgame', 'tebaklogo', 'tebaksurah', 'blackjack', 'tebakkata', 'tebaktebakan', 'tebaklirik', 'tebakgambar', 'tebaklagu', 'tebakkimia', 'asahotak', 'siapaaku', 'susunkata', 'tekateki', 'tebakbendera', 'tebakbenderav2', 'tebakkabupaten', 'caklontong', 'family100', 'werewolf', 'tiktok', 'tiktokslide', 'tiktokaudio', 'spdl', 'ytsearch <mp3>', 'ttsearch', 'teraboxdl', 'snackvideo', 'capcutdl', 'play', 'ytmp3', 'ytmp4', 'google', 'imdb', 'weather', 'wanumber', 'instagram', 'facebook', 'twittervid', 'telestick', 'spotify', 'gitclone', 'happymod', 'gdrive', 'pinterest', 'ringtone', 'sider', 'autoaigc', 'warcall', 'autosimi', 'nanochat', 'mute', 'setwelcome', 'setleft', 'welcome on/off', 'antilink', 'antiwame', 'linkgc', 'invite', 'ephemeral', 'delete', 'setppgroup', 'delppgroup', 'setname', 'setdesc', 'add', 'kick', 'promote', 'demote', 'hidetag', 'totag', 'tagall', 'editinfo', 'opentime', 'closetime', 'resetlink', 'getbio', 'vote', 'upvote', 'downvote', 'checkvote', 'delvote', 'autostickergc', 'antilinkgc', 'antilinkall', 'antilinktiktok', 'antilinkfb', 'antilinktwitter', 'antilinkig', 'antilinktg', 'antilinkytvid', 'antilinkytch', 'antivirus', 'antitoxic', 'nsfw', 'react', 'smeme', 'ppcouple', 'define', 'qc', 'lyrics', 'suit', 'math', 'tictactoe', 'fact', 'truth', 'dare', 'couple', 'soulmate', 'stupidcheck', 'handsomecheck', 'uncleancheck', 'hotcheck', 'smartcheck', 'greatcheck', 'evilcheck', 'dogcheck', 'coolcheck', 'waifucheck', 'awesomecheck', 'gaycheck', 'cutecheck', 'lesbiancheck', 'hornycheck', 'prettycheck', 'lovelycheck', 'uglycheck', 'pick', 'quotes', 'can', 'is', 'when', 'where', 'what', 'how', 'rate', 'cry', 'kill', 'hug', 'pat', 'lick', 'kiss', 'bite', 'yeet', 'bully', 'bonk', 'wink', 'poke', 'nom', 'slap', 'smile', 'wave', 'awoo', 'blush', 'smug', 'glomp', 'happy', 'dance', 'cringe', 'cuddle', 'highfive', 'shinobu', 'handhold', 'spank', 'avatar', 'foxgirl', 'checkme', 'sound1 - sound161', 'igstalk', 'ttstalk', 'ffstalk', 'mlstalk', 'npmstalk', 'ghstalk', 'goose', 'woof', 'lizard', 'meow', 'gura', 'doge', 'patrick', 'lovestick', 'setcmd', 'delcmd', 'listcmd', 'lockcmd', 'addmsg', 'delmsg', 'getmsg', 'listmsg', 'quotesanime', 'quotesbacot', 'quotesbucin', 'quotesmotivasi', 'quotesgalau', 'quotesgombal', 'quoteshacker', 'quotesbijak', 'list', 'addlist', 'dellist', 'update', 'jeda', 'tambah', 'kurang', 'kali', 'bagi', 'delsetdone', 'changedone', 'setdone', 'delproses', 'changeproses', 'setproses', 'proses <reply chat>', 'done <reply chat>', 'anonymouschat', 'start', 'next', 'stop', 'sendprofile', 'menfess', 'confess', 'balasmenfess', 'tolakmenfess', 'stopmenfess', 'cekidgc', 'panel', 'listusr', 'delusr', 'listsrv', 'delsrv', 'tutorial', 'ramlist', 'premlist', 'addusr', 'addsrv', 'updatesrv', 'suspend', 'unsuspend', 'createadmin', 'listadmin', 'invis-delay', 'invis-hard', 'invis-slow', 'invis-bulldozer', 'penyedot-kuota', 'nano-hard', 'nano-delay', 'nanocrash', 'aesthetic', 'coffee', 'wikimedia', 'wallpaper', 'art', 'bts', 'dogwoof', 'catmeow', 'lizardpic', 'goosebird', '8ballpool', 'cosplay', 'hacker', 'cyber', 'gamewallpaper', 'islamic', 'jennie', 'jiso', 'satanic', 'justina', 'cartoon', 'pentol', 'cat', 'kpop', 'exo', 'lisa', 'space', 'car', 'technology', 'bike', 'shortquote', 'antiwork', 'hacking', 'boneka', 'rose', 'ryujin', 'ulzzangboy', 'ulzzanggirl', 'wallml', 'wallphone', 'mountain', 'profilepic', 'couplepic', 'programming', 'pubg', 'blackpink', 'randomboy', 'randomgirl', 'hijab', 'chinese', 'indo', 'japanese', 'korean', 'malay', 'thai', 'vietnamese', 'tiktokgirl', 'tiktoknukthy', 'tiktokkayes', 'tiktokpanrika', 'tiktoknotnot', 'tiktokghea', 'tiktoksantuy', 'tiktokbocil', 'artimimpi', 'artinama', 'ramaljodoh', 'ramaljodohbali', 'suamiistri', 'ramalcinta', 'cocoknama', 'pasangan', 'jadiannikah', 'sifatusaha', 'rezeki', 'pekerjaan', 'nasib', 'penyakit', 'tarot', 'fengshui', 'haribaik', 'harisangar', 'harisial', 'nagahari', 'arahrezeki', 'peruntungan', 'weton', 'karakter', 'keberuntungan', 'memancing', 'masasubur', 'zodiak', 'shio', 'beritabola', 'fajar', 'cnn', 'layarkaca', 'cnbc', 'tribun', 'indozone', 'kompas', 'detiknews', 'dailynews', 'inews', 'okezone', 'sindo', 'tempo', 'antara', 'kontan', 'merdeka', 'jalantikus', 'kisahnabi', 'asmaulhusna', 'bacaansholat', 'audiosurah', 'ayatkursi', 'doaharian', 'niatsholat', 'quotesislami', 'doatahlil', 'alquran', 'jadwalsholat', 'glitchtext', 'writetext', 'advancedglow', 'typographytext', 'pixelglitch', 'neonglitch', 'flagtext', 'flag3dtext', 'deletingtext', 'blackpinkstyle', 'glowingtext', 'underwatertext', 'logomaker', 'cartoonstyle', 'papercutstyle', 'watercolortext', 'effectclouds', 'blackpinklogo', 'gradienttext', 'summerbeach', 'luxurygold', 'multicoloredneon', 'sandsummer', 'galaxywallpaper', '1917style', 'makingneon', 'royaltext', 'freecreate', 'galaxystyle', 'lighteffects', 'hentai', 'gifhentai', 'gifblowjob', 'hentaivid', 'hneko', 'nwaifu', 'animespank', 'trap', 'gasm', 'ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'cum', 'milf', 'eba', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'jahy', 'masturbation', 'mangasearch', 'neko-hentai', 'neko-hentai2', 'nsfwloli', 'orgy', 'panties', 'pussy', 'tentacles', 'thighs', 'yuri', 'zettai', 'xnxxsearch', 'xnxxdl', 'stkbaik', 'stkcantik', 'stkganteng', 'stkhitam', 'stkmiskin', 'stkkaya', 'stkmarah', 'stksabar', 'stksakiti', 'stkkeren', 'stkstkmisterius', 'stksantai', 'stksombong', 'stklucu', 'stkgila', 'installpanel', 'uninstallpanel', 'installtemastellar', 'installtemabilling', 'installtemaenigma', 'installtemanebula', 'startwings', 'hbpanel', 'listdroplet', 'restartvps', 'rebuild', 'sisadroplet', 'deldroplet', 'cvps', 'r1c1', 'r2c1', 'r2c2', 'r4c2', 'r8c4', 'r16c4', 'leptonai', 'text2anime', 'faceswap', 'openai', 'ai4chat', 'aimath', 'aoyoai', 'simi', 'powerbrain', 'hydromind', 'hitori-gotoh', 'hiura-mihate', 'hoshino-takanashi', 'aiimg', 'ai', 'bard', 'prodia', 'diffusion-anime', 'travel-assistant', 'ocr', 'guru-ai', 'emi-ai', 'claude-ai', 'costume-ai', 'herc-ai', 'hercai-cartoon', 'hercai-animefy', 'hercai-lexica', 'hercai-prodia', 'hercai-simurg', 'hercai-raava', 'hercai-shonin', 'realistic', '3dmodel', 'jadizombie', 'blackboxai', 'photoleapai', 'diffusion', 'indo-ai', 'lamaai', 'aivo', 'gemini', 'text2img', 'absolutely', 'dalle', 'bingimg', 'bingai', 'gptimg', 'gpt4', 'gpt4_2', 'anything', 'hdvid', 'cai', 'youai', 'remini', 'jadianime', 'removebg', 'nulis']
})
}

global.animemenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🌸',
  title: 'ANIME MENU',
  subtitle: 'Anime, reaction, dan wallpaper',
  commands: ['otakudesu', 'kaorinusantara', 'akira', 'akiyama', 'ana', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'cosplayloli', 'cosplaysagiri', 'deidara', 'doraemon', 'elaina', 'emilia', 'erza', 'gremory', 'hestia', 'hinata', 'husbu', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kakasih', 'kaori', 'keneki', 'kotori', 'kurumi', 'loli', 'madara', 'megumin', 'mikasa', 'mikey', 'miku', 'minato', 'naruto', 'neko', 'neko2', 'nekonime', 'nezuko', 'onepiece', 'pokemon', 'randomnime', 'randomnime2', 'rize', 'sagiri', 'sakura', 'sasuke', 'shina', 'shinka', 'shinomiya', 'shizuka', 'shota', 'tejina', 'toukachan', 'tsunade', 'waifu', 'animewall', 'yotsuba', 'yuki', 'yulibocil', 'yumeko', '8ball', 'tickle', 'gecg', 'feed', 'animeawoo', 'animemegumin', 'animeshinobu', 'animehandhold', 'animehighfive', 'animecringe', 'animedance', 'animehappy', 'animeglomp', 'animeblush', 'animesmug', 'animewave', 'animesmile', 'animepoke', 'animewink', 'animebonk', 'animebully', 'animeyeet', 'animebite', 'animelick', 'animekill', 'animecry', 'animewlp', 'animekiss', 'animehug', 'animeneko', 'animepat', 'animeslap', 'animecuddle', 'animewaifu', 'animenom', 'animefoxgirl', 'animegecg', 'animetickle', 'animefeed', 'animeavatar', 'genshin', 'anime', 'amv']
})
}

global.ownermenu = (prefix) => {
return styledMenu(prefix, {
  icon: '👑',
  title: 'OWNER TOOLS',
  subtitle: 'Panel khusus owner bot',
  commands: ['autoread', 'addsewa', 'delsewa', 'onlypc', 'onlygc', 'self', 'clearchat', 'pinchat', 'unpinchat', 'gconly', 'public', 'setpppanjang', 'setppgcpanjang', 'addcase', 'join', 'bctext', 'poll', 'bcimage', 'bcvideo', 'creategc', 'setexif', 'userjid', 'setbotname', 'setbotbio', 'delppbot', 'restart', 'setppbot', 'addprem', 'delprem', 'addowner', 'delowner', 'addvn', 'delvn', 'addsticker', 'delsticker', 'addimage', 'delimage', 'addvideo', 'delvideo', 'block', 'unblock del', 'leavegc', 'pushkontak', 'pushkontakv2', 'pushkontakv3', 'pushkontakv4', 'savekontakv', 'savekontakv2', 'getkontak', 'sendkontak', 'jpm', 'jpm2']
})
}

global.othermenu = (prefix) => {
return styledMenu(prefix, {
  icon: '📦',
  title: 'OTHER TOOLS',
  subtitle: 'Utility tambahan bot',
  commands: ['ping', 'tqtoto', 'ttp', 'brat', 'animebrat', 'bratvid', 'furbrat', 'totalchat', 'hytam', 'cekidch', 'ceksewa', 'listsewa', 'readviewonce', 'cekkhodam', 'paptt', 'alkitab', 'totalfitur', 'menu', 'myip', 'reportbug', 'listpem', 'liststicker', 'listimage', 'listvideo', 'listvn', 'listbadword', 'listpc', 'listgc', 'owner', 'jadibot', 'listjadibot', 'donate', 'friend', 'obfuscate', 'styletext', 'fliptext', 'tts', 'say', 'togif', 'toqr', 'bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'squirrel', 'tinyurl', 'tinyurl', 'tovn', 'toaudio', 'tomp3', 'tomp4', 'toimg', 'toonce', 'sticker', 'take', 'emoji', 'volume', 'ebinary', 'dbinary', 'ssweb', 'quoted', 'runtime']
})
}

global.rpgmenu = (prefix, hituet) => {
return styledMenu(prefix, {
  icon: '⚔️',
  title: 'RPG MENU',
  subtitle: 'Ekonomi, adventure, dan leveling',
  commands: ['kerja', 'fightnaga', 'fightkucing', 'fightphonix', 'fightgriffin', 'fightkyubi', 'fightcentaur', 'nabung', 'mining', 'bankcek', 'maling', 'banknabung', 'banktarik', 'berkebon', 'crafting', 'bet', 'bonus', 'buah', 'nebang', 'bekerja', 'bansos', 'taxy', 'mulung', 'berburu', 'polisi', 'berdagang', 'rampok', 'bunuh', 'collect', 'mancing', 'repair', 'feed', 'fight', 'gajian', 'upgrade', 'transfer', 'shop', 'selectskill', 'sampah', 'roket', 'ojek', 'nguli', 'pasar', 'rob', 'referal', 'petshop', 'kolam', 'koboy', 'leaderboard', 'casino', 'ewe-paksa', 'duel', 'petualang', 'perangsarung', 'ulartangga', 'slot']
})
}

global.gamemenu = (prefix, hituet) => {
return styledMenu(prefix, {
  icon: '🎮',
  title: 'GAME ZONE',
  subtitle: 'Game ringan untuk chat',
  commands: ['tebakanml', 'tebakgame', 'tebaklogo', 'tebaksurah', 'blackjack', 'tebakkata', 'tebaktebakan', 'tebaklirik', 'tebakgambar', 'tebaklagu', 'tebakkimia', 'asahotak', 'siapaaku', 'susunkata', 'tekateki', 'tebakbendera', 'tebakbenderav2', 'tebakkabupaten', 'caklontong', 'family100', 'werewolf']
})
}

global.downloadmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '⬇️',
  title: 'DOWNLOADER',
  subtitle: 'Unduh media dari platform populer',
  commands: ['tiktok', 'tiktokslide', 'tiktokaudio', 'spdl', 'ytsearch <mp3>', 'ttsearch', 'teraboxdl', 'snackvideo', 'capcutdl', 'play', 'ytmp3', 'ytmp4', 'google', 'imdb', 'weather', 'wanumber', 'instagram', 'facebook', 'twittervid', 'telestick', 'spotify', 'gitclone', 'happymod', 'gdrive', 'pinterest', 'ringtone']
})
}

global.groupmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '👥',
  title: 'GROUP MANAGER',
  subtitle: 'Kelola grup dan member',
  commands: ['sider', 'autoaigc', 'warcall', 'autosimi', 'nanochat', 'mute', 'setwelcome', 'setleft', 'welcome on/off', 'antilink', 'antiwame', 'linkgc', 'invite', 'ephemeral', 'delete', 'setppgroup', 'delppgroup', 'setname', 'setdesc', 'add', 'kick', 'promote', 'demote', 'hidetag', 'totag', 'tagall', 'editinfo', 'opentime', 'closetime', 'resetlink', 'getbio', 'vote', 'upvote', 'downvote', 'checkvote', 'delvote', 'autostickergc', 'antilinkgc', 'antiwame', 'antilinkall', 'antilinktiktok', 'antilinkfb', 'antilinktwitter', 'antilinkig', 'antilinktg', 'antilinkytvid', 'antilinkytch', 'antivirus', 'antitoxic', 'nsfw', 'react']
})
}

global.funmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '✨',
  title: 'FUN TOOLS',
  subtitle: 'Hiburan ringan di chat',
  commands: ['smeme', 'ppcouple', 'define', 'qc', 'lyrics', 'suit', 'math', 'tictactoe', 'fact', 'truth', 'dare', 'couple', 'soulmate', 'stupidcheck', 'handsomecheck', 'uncleancheck', 'hotcheck', 'smartcheck', 'greatcheck', 'evilcheck', 'dogcheck', 'coolcheck', 'waifucheck', 'awesomecheck', 'gaycheck', 'cutecheck', 'lesbiancheck', 'hornycheck', 'prettycheck', 'lovelycheck', 'uglycheck', 'pick', 'quotes', 'can', 'is', 'when', 'where', 'what', 'how', 'rate', 'cry', 'kill', 'hug', 'pat', 'lick', 'kiss', 'bite', 'yeet', 'bully', 'bonk', 'wink', 'poke', 'nom', 'slap', 'smile', 'wave', 'awoo', 'blush', 'smug', 'glomp', 'happy', 'dance', 'cringe', 'cuddle', 'highfive', 'shinobu', 'handhold', 'spank', 'tickle', 'avatar', 'feed', 'foxgirl', 'gecg', 'checkme', 'sound1 - sound161']
})
}

global.stalkermenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🔍',
  title: 'STALKER TOOLS',
  subtitle: 'Cek profil platform tertentu',
  commands: ['igstalk', 'ttstalk', 'ffstalk', 'mlstalk', 'npmstalk', 'ghstalk']
})
}

global.stickermenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🏷️',
  title: 'STICKER LAB',
  subtitle: 'Buat dan ubah stiker',
  commands: ['goose', 'woof', '8ball', 'lizard', 'meow', 'gura', 'doge', 'patrick', 'lovestick']
})
}

global.databasemenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🗄️',
  title: 'DATABASE MENU',
  subtitle: 'Simpan dan kelola data bot',
  commands: ['setcmd', 'delcmd', 'listcmd', 'lockcmd', 'addmsg', 'delmsg', 'getmsg', 'listmsg']
})
}

global.aimenu = (prefix) => {
return`
╭━━━〔 🧠 *AI STUDIO* 〕━━━╮
│ Bot   : *${botname}*
│ Mode  : Chat • Image • Enhance
│ Owner : *${ownername}*
╰━━━━━━━━━━━━━━━━━━━━╯
╭─〔 💬 *Smart Chat* 〕
│  • ${prefix}ai • ${prefix}openai • ${prefix}ai4chat
│  • ${prefix}bingai • ${prefix}gemini • ${prefix}bard
│  • ${prefix}gpt4 • ${prefix}gpt4_2 • ${prefix}blackboxai
│  • ${prefix}claude-ai • ${prefix}youai • ${prefix}cai
╰──────────────
╭─〔 🧩 *Special Assistant* 〕
│  • ${prefix}leptonai • ${prefix}aimath
│  • ${prefix}travel-assistant • ${prefix}guru-ai
│  • ${prefix}indo-ai • ${prefix}lamaai
│  • ${prefix}aoyoai • ${prefix}simi
│  • ${prefix}powerbrain • ${prefix}hydromind
╰──────────────
╭─〔 🎭 *Character AI* 〕
│  • ${prefix}hitori-gotoh
│  • ${prefix}hiura-mihate
│  • ${prefix}hoshino-takanashi
│  • ${prefix}emi-ai • ${prefix}costume-ai
│  • ${prefix}herc-ai • ${prefix}aivo
╰──────────────
╭─〔 🎨 *Image Generator* 〕
│  • ${prefix}aiimg • ${prefix}text2img
│  • ${prefix}text2anime • ${prefix}dalle
│  • ${prefix}bingimg • ${prefix}gptimg
│  • ${prefix}prodia • ${prefix}diffusion
│  • ${prefix}diffusion-anime • ${prefix}anything
╰──────────────
╭─〔 🧪 *Hercai Lab* 〕
│  • ${prefix}hercai-cartoon
│  • ${prefix}hercai-animefy
│  • ${prefix}hercai-lexica
│  • ${prefix}hercai-prodia
│  • ${prefix}hercai-simurg
│  • ${prefix}hercai-raava
│  • ${prefix}hercai-shonin
╰──────────────
╭─〔 🛠️ *Edit & Enhance* 〕
│  • ${prefix}faceswap • ${prefix}ocr
│  • ${prefix}remini • ${prefix}removebg
│  • ${prefix}jadianime • ${prefix}jadizombie
│  • ${prefix}photoleapai • ${prefix}hdvid
│  • ${prefix}realistic • ${prefix}3dmodel
│  • ${prefix}absolutely • ${prefix}nulis
╰━━━━━━━━━━━━━━━━━━━━
*By ${ownername}*`
}

global.quotesmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '💬',
  title: 'QUOTES MENU',
  subtitle: 'Kutipan dan kata-kata',
  commands: ['quotesanime', 'quotesbacot', 'quotesbucin', 'quotesmotivasi', 'quotesgalau', 'quotesgombal', 'quoteshacker', 'quotesbijak']
})
}

global.storemenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🛒',
  title: 'STORE TOOLS',
  subtitle: 'Fitur jualan dan transaksi',
  commands: ['list', 'addlist', 'dellist', 'update', 'jeda', 'tambah', 'kurang', 'kali', 'bagi', 'delsetdone', 'changedone', 'setdone', 'delproses', 'changeproses', 'setproses', 'proses <reply chat>', 'done <reply chat>']
})
}

global.anonymousmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🕵️',
  title: 'ANONYMOUS CHAT',
  subtitle: 'Chat anonim dan menfess',
  commands: ['anonymouschat', 'start', 'next', 'stop', 'sendprofile', 'menfess', 'confess', 'balasmenfess', 'tolakmenfess', 'stopmenfess']
})
}

global.pushmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '📣',
  title: 'PUSH KONTAK',
  subtitle: 'Broadcast dan push kontak',
  commands: ['cekidgc', 'pushkontak', 'pushkontakv2', 'pushkontakv3', 'pushkontakv4', 'savekontakv', 'savekontakv2', 'getkontak', 'sendkontak', 'jpm', 'jpm2']
})
}

global.cpanelmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🛠️',
  title: 'CPANEL TOOLS',
  subtitle: 'Kelola panel server',
  commands: ['panel', 'listusr', 'delusr', 'listsrv', 'delsrv', 'tutorial', 'ramlist', 'premlist', 'addusr', 'addsrv', 'updatesrv', 'suspend', 'unsuspend', 'createadmin', 'listadmin']
})
}

global.bugmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🐞',
  title: 'BUG MENU',
  subtitle: 'Fitur khusus owner',
  commands: ['invis-delay', 'invis-hard', 'invis-slow', 'invis-bulldozer', 'penyedot-kuota', 'nano-hard', 'nano-delay', 'nanocrash']
})
}

global.randomphotomenu = (prefix) => {
return styledMenu(prefix, {
  icon: '📷',
  title: 'RANDOM PHOTO',
  subtitle: 'Koleksi foto random',
  commands: ['aesthetic', 'coffee', 'wikimedia', 'wallpaper', 'art', 'bts', 'dogwoof', 'catmeow', 'lizardpic', 'goosebird', '8ballpool', 'cosplay', 'hacker', 'cyber', 'gamewallpaper', 'islamic', 'jennie', 'jiso', 'satanic', 'justina', 'cartoon', 'pentol', 'cat', 'kpop', 'exo', 'lisa', 'space', 'car', 'technology', 'bike', 'shortquote', 'antiwork', 'hacking', 'boneka', 'rose', 'ryujin', 'ulzzangboy', 'ulzzanggirl', 'wallml', 'wallphone', 'mountain', 'goose', 'profilepic', 'couplepic', 'programming', 'pubg', 'blackpink', 'randomboy', 'randomgirl', 'hijab', 'chinese', 'indo', 'japanese', 'korean', 'malay', 'thai', 'vietnamese']
})
}

global.randomvideomenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🎥',
  title: 'RANDOM VIDEO',
  subtitle: 'Koleksi video random',
  commands: ['tiktokgirl', 'tiktoknukthy', 'tiktokkayes', 'tiktokpanrika', 'tiktoknotnot', 'tiktokghea', 'tiktoksantuy', 'tiktokbocil']
})
}

global.primbonmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🔮',
  title: 'PRIMBON MENU',
  subtitle: 'Ramalan dan hitungan Jawa',
  commands: ['artimimpi', 'artinama', 'ramaljodoh', 'ramaljodohbali', 'suamiistri', 'ramalcinta', 'cocoknama', 'pasangan', 'jadiannikah', 'sifatusaha', 'rezeki', 'pekerjaan', 'nasib', 'penyakit', 'tarot', 'fengshui', 'haribaik', 'harisangar', 'harisial', 'nagahari', 'arahrezeki', 'peruntungan', 'weton', 'karakter', 'keberuntungan', 'memancing', 'masasubur', 'zodiak', 'shio']
})
}

global.beritamenu = (prefix) => {
return styledMenu(prefix, {
  icon: '📰',
  title: 'NEWS CENTER',
  subtitle: 'Berita dan informasi',
  commands: ['beritabola', 'fajar', 'cnn', 'layarkaca', 'cnbc', 'tribun', 'indozone', 'kompas', 'detiknews', 'dailynews', 'inews', 'okezone', 'sindo', 'tempo', 'antara', 'kontan', 'merdeka', 'jalantikus']
})
}

global.islamimenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🕌',
  title: 'ISLAMIC MENU',
  subtitle: 'Doa, Quran, dan jadwal sholat',
  commands: ['kisahnabi', 'asmaulhusna', 'bacaansholat', 'audiosurah', 'ayatkursi', 'doaharian', 'niatsholat', 'quotesislami', 'doatahlil', 'alquran', 'jadwalsholat']
})
}

global.ephoto360menu = (prefix) => {
return styledMenu(prefix, {
  icon: '🖼️',
  title: 'EPHOTO MAKER',
  subtitle: 'Efek teks dan gambar',
  commands: ['glitchtext', 'writetext', 'advancedglow', 'typographytext', 'pixelglitch', 'neonglitch', 'flagtext', 'flag3dtext', 'deletingtext', 'blackpinkstyle', 'glowingtext', 'underwatertext', 'logomaker', 'cartoonstyle', 'papercutstyle', 'watercolortext', 'effectclouds', 'blackpinklogo', 'gradienttext', 'summerbeach', 'luxurygold', 'multicoloredneon', 'sandsummer', 'galaxywallpaper', '1917style', 'makingneon', 'royaltext', 'freecreate', 'galaxystyle', 'lighteffects']
})
}

global.nsfwmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '🔞',
  title: 'NSFW MENU',
  subtitle: 'Konten khusus dewasa',
  commands: ['hentai', 'gifhentai', 'gifblowjob', 'hentaivid', 'hneko', 'nwaifu', 'animespank', 'trap', 'gasm', 'ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'cum', 'milf', 'eba', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'jahy', 'masturbation', 'mangasearch', 'neko-hentai', 'neko-hentai2', 'nsfwloli', 'orgy', 'panties', 'pussy', 'tentacles', 'thighs', 'yuri', 'zettai', 'xnxxsearch', 'xnxxdl']
})
}

global.sertifikatmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '📜',
  title: 'SERTIFIKAT MAKER',
  subtitle: 'Buat sertifikat lucu',
  commands: ['stkbaik', 'stkcantik', 'stkganteng', 'stkhitam', 'stkmiskin', 'stkkaya', 'stkmarah', 'stksabar', 'stksakiti', 'stkkeren', 'stkstkmisterius', 'stksantai', 'stksombong', 'stklucu', 'stkgila']
})
}

global.pyterodactylemenu = (prefix) => {
return styledMenu(prefix, {
  icon: '⚙️',
  title: 'PTERODACTYL',
  subtitle: 'Tools panel Pterodactyl',
  commands: ['installpanel', 'uninstallpanel', 'installtemastellar', 'installtemabilling', 'installtemaenigma', 'installtemanebula', 'startwings', 'hbpanel']
})
}

global.digitaloceanmenu = (prefix) => {
return styledMenu(prefix, {
  icon: '☁️',
  title: 'DIGITALOCEAN',
  subtitle: 'Kelola droplet VPS',
  commands: ['listdroplet', 'restartvps', 'rebuild', 'sisadroplet', 'deldroplet', 'cvps', 'r1c1', 'r2c1', 'r2c2', 'r4c2', 'r8c4', 'r16c4']
})
}

const aiMenuCommands = ['leptonai', 'text2anime', 'faceswap', 'openai', 'ai4chat', 'aimath', 'aoyoai', 'simi', 'powerbrain', 'hydromind', 'hitori-gotoh', 'hiura-mihate', 'hoshino-takanashi', 'aiimg', 'ai', 'bard', 'prodia', 'diffusion-anime', 'travel-assistant', 'ocr', 'guru-ai', 'emi-ai', 'claude-ai', 'costume-ai', 'herc-ai', 'hercai-cartoon', 'hercai-animefy', 'hercai-lexica', 'hercai-prodia', 'hercai-simurg', 'hercai-raava', 'hercai-shonin', 'realistic', '3dmodel', 'jadizombie', 'blackboxai', 'photoleapai', 'diffusion', 'indo-ai', 'lamaai', 'aivo', 'gemini', 'text2img', 'absolutely', 'dalle', 'bingimg', 'bingai', 'gptimg', 'gpt4', 'gpt4_2', 'anything', 'hdvid', 'cai', 'youai', 'remini', 'jadianime', 'removebg', 'nulis']
const menuSource = fs.readFileSync(__filename, 'utf8')
const readMenuCommands = (menuName) => {
  const match = menuSource.match(new RegExp(`global\\.${menuName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*{[\\s\\S]*?commands:\\s*(\\[[\\s\\S]*?\\])`))
  if (!match) return []
  try {
    return Function(`return ${match[1]}`)()
  } catch {
    return []
  }
}

const categorizedAllMenu = [
  { icon: '👑', title: 'Owner Menu', items: readMenuCommands('ownermenu') },
  { icon: '👥', title: 'Group Menu', items: readMenuCommands('groupmenu') },
  { icon: '⬇️', title: 'Download Menu', items: readMenuCommands('downloadmenu') },
  { icon: '🤖', title: 'Open AI Menu', items: aiMenuCommands },
  { icon: '🎮', title: 'Game Menu', items: readMenuCommands('gamemenu') },
  { icon: '⚔️', title: 'RPG Menu', items: readMenuCommands('rpgmenu') },
  { icon: '✨', title: 'Fun Menu', items: readMenuCommands('funmenu') },
  { icon: '🌸', title: 'Anime Menu', items: readMenuCommands('animemenu') },
  { icon: '🔍', title: 'Stalker Menu', items: readMenuCommands('stalkermenu') },
  { icon: '🏷️', title: 'Sticker Menu', items: readMenuCommands('stickermenu') },
  { icon: '🗄️', title: 'Database Menu', items: readMenuCommands('databasemenu') },
  { icon: '💬', title: 'Quotes Menu', items: readMenuCommands('quotesmenu') },
  { icon: '🛒', title: 'Store Menu', items: readMenuCommands('storemenu') },
  { icon: '🕵️', title: 'Anonymous Menu', items: readMenuCommands('anonymousmenu') },
  { icon: '📣', title: 'Push Menu', items: readMenuCommands('pushmenu') },
  { icon: '🛠️', title: 'CPanel Menu', items: readMenuCommands('cpanelmenu') },
  { icon: '🐞', title: 'Bug Menu', items: readMenuCommands('bugmenu') },
  { icon: '📷', title: 'Random Photo Menu', items: readMenuCommands('randomphotomenu') },
  { icon: '🎥', title: 'Random Video Menu', items: readMenuCommands('randomvideomenu') },
  { icon: '🔮', title: 'Primbon Menu', items: readMenuCommands('primbonmenu') },
  { icon: '📰', title: 'Berita Menu', items: readMenuCommands('beritamenu') },
  { icon: '🕌', title: 'Islami Menu', items: readMenuCommands('islamimenu') },
  { icon: '🖼️', title: 'Ephoto360 Menu', items: readMenuCommands('ephoto360menu') },
  { icon: '🔞', title: 'NSFW Menu', items: readMenuCommands('nsfwmenu') },
  { icon: '📜', title: 'Sertifikat Menu', items: readMenuCommands('sertifikatmenu') },
  { icon: '⚙️', title: 'Pterodactyl Menu', items: readMenuCommands('pyterodactylemenu') },
  { icon: '☁️', title: 'DigitalOcean Menu', items: readMenuCommands('digitaloceanmenu') },
  { icon: '🌐', title: 'Domain Menu', items: ['subdomain'] },
  { icon: '📦', title: 'Other Menu', items: readMenuCommands('othermenu') }
].filter(section => section.items.length)

global.allmenu = (prefix, hituet) => {
  return styledMenu(prefix, {
    icon: '⚡',
    title: 'ALL MENU',
    subtitle: 'Semua command per kategori',
    sections: categorizedAllMenu
  })
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
