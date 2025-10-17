import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const quotes = [
  { text: "Push yourself, because no one else will.", author: "Unknown" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
  { text: "You are stronger than you think.", author: "Unknown" },
  { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
];

// ✅ Root route just gives a friendly message
app.get("/", (req, res) => {
  res.send("🎉 Motivational Quotes API is running! Visit /api/quote to get a quote.");
});

// ✅ Actual quote API route
app.get("/api/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

// ✅ Use Railway’s provided port, or fallback to 4000 for local dev
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ API running on port ${PORT}`));
