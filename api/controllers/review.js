import Review from "../models/Review.js";

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new review
const createReview = async (req, res) => {
  const { name, email, rating, comment } = req.body;

  try {
    const review = new Review({
      name,
      email,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
export { getReviews, createReview };
