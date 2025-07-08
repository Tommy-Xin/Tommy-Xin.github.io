// File: api/visitor.js

export default function handler(req, res) {
  // 获取访客 IP（支持 X-Forwarded-For）
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.connection?.remoteAddress ||
    'IP not found';

  const userAgent = req.headers['user-agent'] || 'Unknown';
  const timestamp = new Date().toISOString();

  console.log(`📌 IP: ${ip} | UA: ${userAgent} | Time: ${timestamp}`);

  res.status(200).json({
    ip,
    userAgent,
    timestamp,
    message: "Visitor info recorded ✅",
  });
}