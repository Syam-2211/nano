let axios = require('axios')
let BodyForm = require('form-data')
let { fromBuffer } = require('file-type')
let fetch = require('node-fetch')
let fs = require('fs')
let cheerio = require('cheerio')

async function resolvePixhostDirectUrl(showUrl, fallbackUrl = '') {
	if (!showUrl) return fallbackUrl || ''
	try {
		const response = await fetch(showUrl, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
			}
		})
		const html = await response.text()
		const match = html.match(/https:\/\/img\d+\.pixhost\.to\/images\/[^\s"'<>]+/i)
		return match ? match[0] : (fallbackUrl || showUrl)
	} catch {
		return fallbackUrl || showUrl
	}
}

async function uploadPixhost(Path, options = {}) {
	if (!fs.existsSync(Path)) throw new Error('File not Found')
	const form = new BodyForm()
	form.append('img', fs.createReadStream(Path))
	form.append('content_type', String(options.content_type ?? 0))
	form.append('max_th_size', String(options.max_th_size ?? 420))

	const { data } = await axios({
		url: 'https://api.pixhost.to/images',
		method: 'POST',
		headers: {
			Accept: 'application/json',
			...form.getHeaders()
		},
		data: form,
		maxContentLength: Infinity,
		maxBodyLength: Infinity
	})

	if (!data?.show_url && !data?.th_url) {
		throw new Error('Upload gagal ke PiXhost')
	}

	const direct_url = await resolvePixhostDirectUrl(data.show_url, data.th_url)
	return {
		...data,
		direct_url,
		url: direct_url || data.show_url || data.th_url
	}
}

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const uploaded = await uploadPixhost(Path)
			return resolve(uploaded.direct_url || uploaded.show_url || uploaded.th_url)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new BodyForm()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Xeorz",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function floNime(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new BodyForm()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://flonime.my.id/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File, floNime, uploadPixhost, resolvePixhostDirectUrl }
