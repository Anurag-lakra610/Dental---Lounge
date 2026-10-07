const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  "https://image.pollinations.ai/prompt/Friendly%20professional%20dentist%20working%20on%20patient%20in%20luxury%20clinic%20medical%20photography?width=1920&height=1080&nologo=true&seed=201",
  "https://image.pollinations.ai/prompt/High%20quality%20macro%20shot%20of%20a%20modern%20dental%20implant%20model%20on%20a%20clean%20medical%20tray?width=1920&height=1080&nologo=true&seed=202",
  "https://image.pollinations.ai/prompt/Advanced%20dental%20endodontic%20root%20canal%20tools%20in%20a%20modern%20bright%20clinic%20macro?width=1920&height=1080&nologo=true&seed=203",
  "https://image.pollinations.ai/prompt/Close%20up%20of%20a%20beautiful%20perfect%20smile%20with%20modern%20orthodontic%20braces?width=1920&height=1080&nologo=true&seed=204",
  "https://image.pollinations.ai/prompt/Close%20up%20of%20an%20incredibly%20bright%20white%20perfect%20healthy%20smile%20after%20teeth%20whitening?width=1920&height=1080&nologo=true&seed=205",
  "https://image.pollinations.ai/prompt/Stunningly%20beautiful%20woman%20with%20a%20perfect%20straight%20white%20smile%20makeover?width=1920&height=1080&nologo=true&seed=206",
  "https://image.pollinations.ai/prompt/Luxury%20aesthetic%20dentistry%20porcelain%20veneers%20perfect%20smile?width=1920&height=1080&nologo=true&seed=207"
];

const dir = path.join(__dirname, 'public', 'images', 'treatments');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAll() {
  for (let i = 0; i < urls.length; i++) {
    console.log(`Downloading image ${i}...`);
    try {
      await downloadImage(urls[i], path.join(dir, `t${i}.jpg`));
      console.log(`Saved t${i}.jpg`);
    } catch (e) {
      console.error(`Failed t${i}.jpg:`, e);
    }
    if (i < urls.length - 1) {
      console.log('Waiting 10 seconds...');
      await new Promise(r => setTimeout(r, 10000));
    }
  }
  console.log('All downloads finished!');
}

downloadAll();
