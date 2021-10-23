module.exports = function sleep(seconds) {
  new Promise((res) => setTimeout(res, seconds));
};

async function delayPrint() {
  await sleep(1000);
  console.log('Delayed print');
}
