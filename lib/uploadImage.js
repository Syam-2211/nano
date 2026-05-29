const fs = require('fs')
const path = require('path')
const { uploadPixhost } = require('./uploader')

/**
 * Upload image to PiXhost
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * - `image/gif`
 * @param {Buffer} buffer Image Buffer
 */
module.exports = async buffer => {
  const tempFile = path.join(__dirname, `../data/pixhost_${Date.now()}.jpg`)
  fs.writeFileSync(tempFile, buffer)
  try {
    const uploaded = await uploadPixhost(tempFile)
    return uploaded.direct_url || uploaded.show_url || uploaded.th_url
  } finally {
    try { fs.unlinkSync(tempFile) } catch {}
  }
}
