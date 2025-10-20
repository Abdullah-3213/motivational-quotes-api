export default function handler(req, res) {
  const quotes = [
    { text: "Push yourself, because no one else will.", author: "Unknown" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
    { text: "You are stronger than you think.", author: "Unknown" },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  ];

  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(random);
}
