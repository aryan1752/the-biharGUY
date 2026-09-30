const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Rescue = require('./models/Rescue');

dotenv.config();

const rescues = [
  {
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
    title: "Wild Hare Saved from Grass Cutters",
    species: "Indian Wild Hare",
    category: "Mammals",
    rescueDate: "19 Jun 2024",
    location: "Forest Fringe, Bihar",
    sourceThreat: "Accidental encounter with grass cutters",
    story: "Local agricultural workers encountered a young wild hare while clearing dense forest brush. Intervened before it could be harmed or captured.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
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
    title: "Rhesus Monkey Freed from Street Performer",
    species: "Rhesus Macaque",
    category: "Mammals",
    rescueDate: "3 Aug 2024",
    location: "Urban Bihar",
    sourceThreat: "Illegal captivity & street exploitation",
    story: "Spotted a young monkey bound in heavy metal chains by a street performer. Educated the owner and successfully rescued the monkey.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Handed over to Forest Dept",
    featured: false
  },
  {
    title: "2 Myna Nestling Babies Rescued",
    species: "Common Myna (2 Chicks)",
    category: "Birds",
    rescueDate: "30 Jul 2024",
    location: "Deep Forest Zone, Bihar",
    sourceThreat: "Fallen nest due to monsoon storm",
    story: "Found two helpless nestlings on the forest floor after heavy rain destroyed their tree cavity. Hand-fed insect diet until fledged.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Venomous Krait Snake Removed from House",
    species: "Common Krait (Bungarus caeruleus)",
    category: "Snakes & Reptiles",
    rescueDate: "13 Sep 2024",
    location: "Village House, Bihar",
    sourceThreat: "Human-wildlife conflict",
    story: "Villagers panicked after discovering one of Asia's most venomous snakes hiding inside a residential kitchen. Used snake hook to safely capture.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Safely Released to Wild",
    featured: true
  },
  {
    title: "Black Drongos Freed from Local Traps",
    species: "Black Drongo",
    category: "Birds",
    rescueDate: "3 Oct 2024",
    location: "Panchayat Village, Bihar",
    sourceThreat: "Bird trapping snares",
    story: "Discovered active bird snares placed along agricultural boundaries. Rescued trapped Black Drongos, treated leg abrasions.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Cormorant Rescued from Meat Market",
    species: "Little Cormorant",
    category: "Birds",
    rescueDate: "4 Nov 2024",
    location: "Local Meat Market, Bihar",
    sourceThreat: "Illegal wild meat trade",
    story: "In a raid on illegal wild bird vendors at a village market, rescued a live Cormorant bound with string.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    title: "Cobra Snake Rescued During Chhath Festival",
    species: "Spectacled Cobra",
    category: "Snakes & Reptiles",
    rescueDate: "8 Nov 2024",
    location: "Chhath Ghat Function, Bihar",
    sourceThreat: "Human threat & crowd panic",
    story: "During holy Chhath Puja gatherings along riverbank, a large Cobra emerged near devotees. Prevented panic and safely bagged the snake.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Safely Released to Wild",
    featured: true
  },
  {
    title: "Indian Crested Porcupine Rescued",
    species: "Indian Crested Porcupine",
    category: "Mammals",
    rescueDate: "13 Dec 2024",
    location: "Private Residence, Bihar",
    sourceThreat: "Illegal pet confinement",
    story: "Received a tip-off about a nocturnal porcupine kept in a cramped iron cage. Worked alongside Bihar Forest Officers to confiscate.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Scops Owl Rescue in Sarai Ranjan",
    species: "Scops Owl",
    category: "Owls",
    rescueDate: "28 Dec 2024",
    location: "Sarai Ranjan, Bihar",
    sourceThreat: "Human conflict & minor trauma",
    story: "Rescued an injured Scops Owl in Sarai Ranjan village. Provided antiseptic care for wing scratches.",
    image: "/images/owl_in_net.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Indian Ringneck Parrot Baby Rescued",
    species: "Rose-ringed Parakeet (Baby)",
    category: "Birds",
    rescueDate: "5 Mar 2025",
    location: "Market Corridor, Bihar",
    sourceThreat: "Poaching after severe hassling",
    story: "Endured hours of intense confrontation with poachers trying to sell stolen parrot nestlings. Secured the baby parrot.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Wild Deer Rescued from Village Panic",
    species: "Spotted Deer (Chital)",
    category: "Mammals",
    rescueDate: "13 Jul 2025",
    location: "Rural Village, Bihar",
    sourceThreat: "Strayed into village, stray dog attacks",
    story: "A wild deer strayed into farmland and was chased by stray dogs. Formed a protective perimeter and guided it back to forest.",
    image: "/images/rescue_bird_net_police.jpg",
    status: "Safely Relocated to Forest",
    featured: true
  },
  {
    title: "Neelkanth (Indian Roller) Rescued from Wetland Net",
    species: "Indian Roller (Coracias benghalensis)",
    category: "Birds",
    rescueDate: "9 Aug 2025",
    location: "Wetland Lake, Bihar",
    sourceThreat: "Entangled in illegal poaching mist net",
    story: "Spotted the iconic state bird of Bihar (Neelkanth / Indian Roller) trapped high up in a poacher's net. Extracted wing feathers and released it.",
    image: "/images/indian_roller.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    title: "Spotted Owlet Extricated from Poaching Mesh",
    species: "Spotted Owlet",
    category: "Owls",
    rescueDate: "12 Aug 2025",
    location: "Wetland Perimeter, Bihar",
    sourceThreat: "Trapped in hunter's net",
    story: "Discovered another owlet caught in fine mesh near a lake. Carefully disentangled every thread and released it at dusk.",
    image: "/images/owl_in_net.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "2 Rose-ringed Parakeets Saved from House Confinement",
    species: "Rose-ringed Parakeet (2)",
    category: "Birds",
    rescueDate: "23 Aug 2025",
    location: "Residential Home, Bihar",
    sourceThreat: "Illegal keeping of protected wild birds",
    story: "Convinced house owners to hand over two captive parakeets, which were acclimated and released back into wild flocks.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: false
  },
  {
    title: "Indian Rock Python Rescued from Nomadic Sapera",
    species: "Indian Rock Python (Python molurus)",
    category: "Snakes & Reptiles",
    rescueDate: "21 Sep 2025",
    location: "Nomadic Camp, Bihar",
    sourceThreat: "Exploitation by constantly moving snake charmer",
    story: "Tracked down a nomadic snake charmer exploiting an 8-foot Indian Rock Python. Coordinated with forest authorities to rescue and release.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Safely Released to Forest",
    featured: true
  },
  {
    title: "Newborn Lamb Saved from Meat Shop",
    species: "Sheep's Kid (Newborn)",
    category: "Mammals",
    rescueDate: "13 Oct 2025",
    location: "Meat Shop, Bihar",
    sourceThreat: "Impending slaughter of newborn infant",
    story: "Spotted a tiny newborn lamb brought to a meat vendor. Negotiated and rescued the infant, providing warmth and milk replacement.",
    image: "/images/wetland_bird_rescue.jpg",
    status: "Adopted & Safe in Farm",
    featured: false
  },
  {
    title: "Kidnapped Newborn Spotted Owlet Restored",
    species: "Spotted Owlet (Newborn)",
    category: "Owls",
    rescueDate: "8 Nov 2025",
    location: "Village outskirts, Bihar",
    sourceThreat: "Kidnapped directly from tree hollow nest",
    story: "Unscrupulous individuals stole a day-old owlet. Rescued the chick and constructed an artificial nest box near its parents.",
    image: "/images/owl_in_net.jpg",
    status: "Re-nested & Thriving",
    featured: true
  },
  {
    title: "Greater Coucal (Kokal) Rescued from Superstition",
    species: "Greater Coucal (Centropus sinensis)",
    category: "Birds",
    rescueDate: "10 Dec 2025",
    location: "Village in Bihar",
    sourceThreat: "Kidnapped due to false myth about asthma cure",
    story: "A Greater Coucal (Kokal) was kidnapped due to local superstition that its flesh cures asthma. Held an emergency meeting with Sarpanch, busted myth, and freed bird.",
    image: "/images/greater_coucal.jpg",
    status: "Rescued & Superstition Busted",
    featured: true
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/biharguy_db');
    await Rescue.deleteMany({});
    await Rescue.insertMany(rescues);
    console.log('Seed completed successfully! 21 rescue stories added.');
    process.exit();
  } catch (err) {
    console.error('Error seeding DB:', err);
    process.exit(1);
  }
};

seedDB();
