import got from 'got';

async function run() {
  const response = await got('https://github.com/');
  console.log(response.body);
}

run();
