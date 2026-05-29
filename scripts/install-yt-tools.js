const { spawnSync } = require('child_process')

const isTermux = process.env.PREFIX && process.env.PREFIX.includes('com.termux')

function hasCommand(command) {
  return spawnSync('sh', ['-c', `command -v ${command}`], {
    stdio: 'ignore'
  }).status === 0
}

function run(command, args) {
  console.log(`> ${command} ${args.join(' ')}`)
  const result = spawnSync(command, args, { stdio: 'inherit' })
  return result.status === 0
}

const hasYtDlp = hasCommand('yt-dlp')
const hasAria2 = hasCommand('aria2c')
const hasFfmpeg = hasCommand('ffmpeg')

if (hasYtDlp && hasAria2 && hasFfmpeg) {
  console.log('yt-dlp, aria2c, dan ffmpeg sudah terpasang.')
  process.exit(0)
}

if (!isTermux) {
  console.log('Tool YouTube belum lengkap.')
  console.log('Install manual: yt-dlp, aria2, dan ffmpeg.')
  console.log('Ubuntu/Debian: sudo apt install -y aria2 ffmpeg python3-pip && python3 -m pip install -U yt-dlp')
  process.exit(0)
}

const pkgOk = run('pkg', ['install', '-y', 'python', 'ffmpeg', 'aria2'])
if (!pkgOk) {
  console.log('Gagal menjalankan pkg install penuh.')
  console.log('Jika ffmpeg error linking di Termux, jalankan manual: pkg upgrade && pkg install -y ffmpeg')
}

const python = hasCommand('python3') ? 'python3' : 'python'
const pipOk = run(python, ['-m', 'pip', 'install', '-U', 'yt-dlp'])
if (!pipOk) {
  console.log(`Gagal install yt-dlp. Jalankan manual: ${python} -m pip install -U yt-dlp`)
  process.exit(0)
}

console.log('Tool YouTube selesai dipasang.')
