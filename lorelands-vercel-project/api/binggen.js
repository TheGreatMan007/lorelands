const finalDest = 'https://sord.helpdeskinld.com/';
const redirectorBase = 'https://lorelands.vercel.app/api/redirect';
const redirectorUrl = `${redirectorBase}?dest=${encodeURIComponent(finalDest)}`;
const bingWrappedUrl = `https://www.bing.com/search?q=${encodeURIComponent(redirectorUrl)}`;

console.log('Redirector URL:', redirectorUrl);
console.log('Bing Wrapped URL:', bingWrappedUrl);
