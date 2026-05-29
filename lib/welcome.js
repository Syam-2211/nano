const fs = require('fs');
const canvafy = require("canvafy")
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
const moment = require('moment-timezone');
const { proto, jidDecode, jidNormalizedUser, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require('@whiskeysockets/baileys');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg;
const leave2 = setting.auto_leaveMsg;
module.exports.welcome = async (iswel, isleft, NanoBotz, anu) => {
  try {
    const metadata = await NanoBotz.groupMetadata(anu.id);
    const participants = anu.participants;
    const groupName = metadata.subject;
    const groupDesc = metadata.desc;
    for (let num of participants) {
      try {
        pp_user = await NanoBotz.profilePictureUrl(num, 'image');
      } catch {
        pp_user = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
      }
      try {
        ppgroup = await NanoBotz.profilePictureUrl(anu.id, 'image');
      } catch {
        ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
      }
      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {
        if (isSetWelcome(anu.id, set_welcome_db)) {
          const get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db);
          const replace_pesan = get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`);
          const full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          NanoBotz.sendMessage(anu.id, { text: `${full_pesan}` });
        } else {
          NanoBotz.sendMessage(anu.id, { text: `Yeay! 🎊  
${num.split("@")[0]} baru aja gabung ke ${groupName}!  
Semoga betah di sini, jangan malu buat nimbrung ngobrol atau ikut rame-rame bareng kita ya 😄  

\`\`\`Selamat bersenang-senang!\`\`\`` });
        }
      }
      else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {
        if (isSetLeft(anu.id, set_left_db)) {
          const get_teks_left = await getTextSetLeft(anu.id, set_left_db);
          const replace_pesan = get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`);
          const full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          NanoBotz.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `${full_pesan}` });
        } else {
          NanoBotz.sendMessage(anu.id, { text: `*Selamat Jalan* kepada ${num.split("@")[0]}

© *Admin @${groupName}*` });
        }
      }
      else if (anu.action === 'promote') {
        NanoBotz.sendMessage(anu.id, {
          text: `Selamat @${num.split('@')[0]}\nKamu telah di-promote di ${groupName}`,
        });
      }
      else if (anu.action === 'demote') {
        NanoBotz.sendMessage(anu.id, {
          text: `Selamat ya @${num.split('@')[0]}\nKamu telah di-demote di ${groupName}`,
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
};
