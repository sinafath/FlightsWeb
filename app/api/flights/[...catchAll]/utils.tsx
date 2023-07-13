function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function generateTime(time: string) {
  const now = new Date();
  const [h, m] = time.split(':');
  now.setHours(Number(h));
  now.setMinutes(Number(m));
  const minutes = Math.floor(Math.random() * 21) + 20;
  now.setMinutes(now.getMinutes() + minutes);
  return now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
}
const agencies = ['ایران ایر', 'هما', 'پیما'];

export { getRandomInt, generateTime, agencies };
