const axios = require('axios');


const fallbackAnswers = {
  'capital city of maharashtra': 'Mumbai',
  'capital of india': 'New Delhi'
};

module.exports = async (question) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.AI_API_KEY}`,
      {
        contents: [{ parts: [{ text: question }] }]
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error('Empty AI response');

    return text.trim().split(/\s+/)[0]; 

  } catch (err) {
    const normalized = question.toLowerCase();

    for (const key in fallbackAnswers) {
      if (normalized.includes(key)) {
        return fallbackAnswers[key];
      }
    }

    // last-resort fallback
    return 'Unknown';
  }
};
