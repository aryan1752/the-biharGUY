const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// In-memory array fallback if MongoDB is not active
const inMemoryContacts = [];

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, type, location, message } = req.body;
    
    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Please provide Name, Phone Number, and Details/Message.' });
    }

    try {
      const contactDoc = new Contact({ name, phone, email, type, location, message });
      const saved = await contactDoc.save();
      return res.status(201).json({ success: true, message: 'Your emergency alert / message has been registered successfully! Bihar Guy team will respond immediately.', data: saved });
    } catch (dbErr) {
      const entry = { id: Date.now().toString(), name, phone, email, type, location, message, createdAt: new Date() };
      inMemoryContacts.push(entry);
      return res.status(201).json({ success: true, message: 'Your emergency alert / message has been registered successfully! Bihar Guy team will respond immediately.', data: entry });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error processing contact form.' });
  }
});

// GET /api/contact (admin view)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    if (contacts.length > 0) return res.json(contacts);
    return res.json(inMemoryContacts);
  } catch (err) {
    return res.json(inMemoryContacts);
  }
});

module.exports = router;
