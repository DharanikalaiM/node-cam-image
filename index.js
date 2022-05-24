// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {
    data: { text },
  } = await worker.recognize(
    'https://5.imimg.com/data5/SELLER/Default/2020/12/XT/FB/FR/25411319/provision-store-billing-software-500x500.jpeg'
  );
  console.log(text);
  await worker.terminate();
})();
