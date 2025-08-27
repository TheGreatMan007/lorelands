// api/redirect.js
export default function handler(req, res) {
  const { dest } = req.query;

  if (!dest) {
    return res.status(400).send('Missing "dest" query parameter');
  }

  try {
    const redirectUrl = new URL(dest);
    res.writeHead(302, { Location: redirectUrl.toString() });
    res.end();
  } catch {
    res.status(400).send('Invalid URL');
  }
}
