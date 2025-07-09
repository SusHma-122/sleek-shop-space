const Product = require('../models/Product');
const Sentiment = require('sentiment');
// const { Configuration, OpenAIApi } = require('openai'); // Uncomment if using OpenAI

const sentiment = new Sentiment();

exports.queryAssistant = async (req, res) => {
  try {
    const { productId, query } = req.body;
    const product = await Product.findById(productId).populate('reviews');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // Find alternatives in same category
    const alternatives = await Product.find({ category: product.category, _id: { $ne: productId } }).limit(3);
    // Sentiment analysis on reviews
    const reviews = product.reviews || [];
    const sentiments = reviews.map(r => sentiment.analyze(r.comment || ''));
    const avgScore = sentiments.length ? (sentiments.reduce((a, b) => a + b.score, 0) / sentiments.length) : 0;
    const sentimentSummary = avgScore > 1 ? 'Mostly Positive' : avgScore < -1 ? 'Mostly Negative' : 'Mixed';
    // (Optional) Call OpenAI for advanced comparison
    // const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
    // const aiResponse = await openai.createChatCompletion({ ... });
    // Build response
    res.json({
      product: {
        name: product.name,
        price: product.price,
        specs: product,
      },
      alternatives: alternatives.map(a => ({ name: a.name, price: a.price, id: a._id })),
      sentiment: sentimentSummary,
      pros: reviews.filter((r, i) => sentiments[i].score > 0).map(r => r.comment),
      cons: reviews.filter((r, i) => sentiments[i].score < 0).map(r => r.comment),
      recommendation: avgScore < -1 ? 'Not Recommended' : 'Recommended',
      // ai: aiResponse?.data?.choices?.[0]?.message?.content || null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 