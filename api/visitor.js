// File: api/visitor.js

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const timestamp = new Date().toISOString();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    ip,
    userAgent,
    timestamp,
    message: "Visitor info captured successfully"
  });
}