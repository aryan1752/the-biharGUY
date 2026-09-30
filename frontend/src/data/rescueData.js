export const INITIAL_RESCUES = [
  {
    id: "1",
    title: "Neelkanth (Indian Roller) Trapped in Monofilament Net",
    species: "Indian Roller (State Bird of Bihar)",
    category: "Birds",
    rescueDate: "14 May 2024",
    location: "Samastipur, Bihar",
    sourceThreat: "Entangled in illegal nylon trapping nets",
    story: "Rescued Bihar's iconic state bird, the Neelkanth (Indian Roller), after it got severely tangled in poacher nets. Carefully untangled its bright turquoise-blue wings, checked for joint fractures, provided emergency hydration, and safely released it back into the forest canopy.",
    image: "/images/indian_roller_bihar_guy.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    id: "2",
    title: "Joint Poacher Net Seizure with Bihar Forest Police",
    species: "Wild Wetland Birds",
    category: "Birds",
    rescueDate: "28 Jan 2024",
    location: "Begusarai Wetland Marshlands, Bihar",
    sourceThreat: "Illegal poacher mist nets set across waterbodies",
    story: "Organized a joint ground strike with the Bihar Forest Department and local police officials to raid illegal bird poaching nets set across wetland marshlands. Cut down and burnt illegal nylon nets on the spot, freeing multiple trapped wild birds.",
    image: "/images/joint_police_rescue.jpg",
    status: "Nets Destroyed & Birds Released",
    featured: true
  },
  {
    id: "3",
    title: "Nocturnal Raptor & Owl Freed from Poacher Net",
    species: "Scops Owl / Wetland Raptor",
    category: "Owls",
    rescueDate: "18 Jun 2024",
    location: "Darbhanga Marshlands, Bihar",
    sourceThreat: "Suspended upside-down in high-tension net",
    story: "Discovered a majestic nocturnal bird suspended upside-down, struggling helplessly in a hidden poacher net over wet marshlands. Carefully sniped the fine net mesh around its talons without damaging primary flight feathers before flight rehabilitation.",
    image: "/images/entangled_owl_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: true
  },
  {
    id: "4",
    title: "Migratory Waterbird Rescued from Agricultural Mesh",
    species: "Wetland Migratory Bird",
    category: "Birds",
    rescueDate: "02 Nov 2024",
    location: "Gangetic Floodplains, Bihar",
    sourceThreat: "Entangled in fine monofilament crop net",
    story: "Rescued a small migratory wetland bird entangled in fine monofilament mesh surrounding crop fields. Patiently disentangled its delicate feet and beak, monitored its stamina, and returned it safely to its wetland flock.",
    image: "/images/wetland_waterbird_rescue.jpg",
    status: "Rehabilitated & Released",
    featured: true
  }
];

export const COLLABORATION_PARTNERS = [
  {
    id: "wti",
    name: "Wildlife Trust of India (WTI)",
    category: "Conservation NGO Partner",
    role: "Technical monitoring, scientific field protocols & joint emergency wildlife response in Bihar.",
    icon: "ShieldCheck",
    badge: "Official Collaboration"
  },
  {
    id: "bihar-govt",
    name: "Bihar Forest & Wildlife Department",
    category: "Government Body",
    role: "Legal coordination, rapid seizure of poached animals, sanctuary releases and habitat enforcement.",
    icon: "Landmark",
    badge: "Government Alliance"
  },
  {
    id: "panchayat",
    name: "Local Gram Panchayats & Sarpanchs",
    category: "Grassroots Community",
    role: "Village-level intelligence, quick emergency reporting, and breaking anti-wildlife superstitions at root level.",
    icon: "Users",
    badge: "Grassroots Network"
  },
  {
    id: "education",
    name: "Schools, Coaching Centers & Colleges",
    category: "Educational Awareness",
    role: "Conducting interactive seminars, workshops, birdwatching sessions and youth conservation clubs across Bihar.",
    icon: "GraduationCap",
    badge: "Youth & Awareness"
  }
];

export const CORE_PILLARS = [
  {
    id: "research",
    title: "Wildlife Research",
    hindiTitle: "वैज्ञानिक शोध व निगरानी",
    description: "Scientific field monitoring of Bihar's migratory birds, raptors, wetland ecosystems, and fragile native species habitats.",
    icon: "Microscope",
    image: "/images/entangled_owl_rescue.jpg",
    color: "from-emerald-500 to-green-600"
  },
  {
    id: "rescue",
    title: "Rescue & Rehab",
    hindiTitle: "रेस्क्यू और पुनर्वास",
    description: "24/7 ground response for animals caught in poacher nets, illegal trade, human conflict, or life-threatening distress.",
    icon: "HeartHandshake",
    image: "/images/indian_roller_bihar_guy.jpg",
    color: "from-green-600 to-emerald-700"
  },
  {
    id: "awareness",
    title: "Conservation Operations",
    hindiTitle: "वन विभाग व पुलिस कार्यवाही",
    description: "Joint ground anti-poaching operations with Bihar Forest Department & Police to destroy illegal netting networks.",
    icon: "Megaphone",
    image: "/images/joint_police_rescue.jpg",
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: "exploration",
    title: "Nature Exploration",
    hindiTitle: "प्राकृतिक खोज व वेटलैंड संरक्षण",
    description: "Unveiling Bihar's hidden biodiversity, unexplored wetlands, and rich natural beauty to inspire conservation pride.",
    icon: "Compass",
    image: "/images/wetland_waterbird_rescue.jpg",
    color: "from-teal-600 to-emerald-800"
  }
];
