const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

const inMemorySubscribers = [];

// POST /api/subscribers/subscribe
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    try {
      const existing = await Subscriber.findOne({ email });
      if (existing) {
        return res.json({ success: true, message: 'Aap pehle se hi Bihar Guy Wildlife Mission ke subscriber hain! Dhanyawad!' });
      }
      const sub = new Subscriber({ email });
      await sub.save();
      return res.status(201).json({ success: true, message: 'Subscribe karne ke liye dhanyawad! Bihar ki wildlife conservation drive se judne ke liye aabhar.' });
    } catch (err) {
      if (!inMemorySubscribers.includes(email)) {
        inMemorySubscribers.push(email);
      }
      return res.status(201).json({ success: true, message: 'Subscribe karne ke liye dhanyawad! Bihar ki wildlife conservation drive se judne ke liye aabhar.' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to process subscription.' });
  }
});

module.exports = router;
