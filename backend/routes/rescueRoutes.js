const express = require('express');
const router = express.Router();
const Rescue = require('../models/Rescue');

const defaultRescues = [
  {
    _id: "1",
    title: "Scops Owl Rescue from Hunter",
    species: "Scops Owl",
    category: "Owls",
    rescueDate: "17 Apr 2024",
    location: "Rural Samastipur, Bihar",
    sourceThreat: "Trapped by illegal wild bird hunter",
    story: "Received urgent info about an illegal bird trapper holding a rare Scops Owl. Promptly reached the spot, negotiated with local authorities and secured the owl.",
    image: "/images/owl_in_net.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    _id: "2",
    title: "Barn Owl Trapped in Wetland Netting",
    species: "Barn Owl",
    category: "Owls",
    rescueDate: "24 Jun 2024",
    location: "Wetland Marshlands, Bihar",
    sourceThreat: "Entangled in poacher net",
    story: "Found deep inside a remote wetland area while conducting scientific bird monitoring. A majestic Barn Owl was hanging upside down, tangled in nylon netting.",
    image: "/images/owl_in_net.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    _id: "3",
    title: "Wild Hare Saved from Grass Cutters",
    species: "Indian Wild Hare",
    category: "Mammals",
    rescueDate: "19 Jun 2024",
    location: "Forest Fringe, Bihar",
    sourceThreat: "Accidental encounter with grass cutters",
    story: "Local agricultural workers encountered a young wild hare while clearing dense forest brush. Intervened before it could be harmed or captured.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    _id: "4",
    title: "2 Fox Babies Rescued from Trapper",
    species: "Bengal Fox (2 Pups)",
    category: "Mammals",
    rescueDate: "27 Apr 2024",
    location: "Darbhanga Belt, Bihar",
    sourceThreat: "Illegal wildlife trading attempt",
    story: "Two defenseless baby fox kits were seized from poachers trying to sell them. Provided round-the-clock shelter and milk feeds.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    _id: "5",
    title: "Rhesus Monkey Freed from Street Performer (Madaari)",
    species: "Rhesus Macaque",
    category: "Mammals",
    rescueDate: "3 Aug 2024",
    location: "Urban Bihar",
    sourceThreat: "Illegal captivity & street exploitation",
    story: "Spotted a young monkey bound in heavy metal chains by a street performer. Educated the owner and successfully rescued the monkey.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Handed over to Forest Dept",
    featured: true
  }
];

// GET /api/rescues
router.get('/', async (req, res) => {
  try {
    const rescues = await Rescue.find({}).sort({ createdAt: -1 });
    if (rescues.length > 0) {
      return res.json(rescues);
    }
    return res.json(defaultRescues);
  } catch (err) {
    return res.json(defaultRescues);
  }
});

// GET /api/rescues/:id
router.get('/:id', async (req, res) => {
  try {
    const rescue = await Rescue.findById(req.params.id);
    if (rescue) return res.json(rescue);
    const item = defaultRescues.find(r => r._id === req.params.id);
    if (item) return res.json(item);
    return res.status(404).json({ message: 'Rescue story not found' });
  } catch (err) {
    const item = defaultRescues.find(r => r._id === req.params.id);
    if (item) return res.json(item);
    return res.status(404).json({ message: 'Rescue story not found' });
  }
});

// POST /api/rescues
router.post('/', async (req, res) => {
  try {
    const newRescue = new Rescue(req.body);
    const saved = await newRescue.save();
    return res.status(201).json(saved);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
