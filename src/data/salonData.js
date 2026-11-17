// Hair By David & Co. - Data Store
// 477 Richmond St W #501, Toronto, ON M5V 3E7, Canada
// 4.8 Rating (511 Google Reviews)

export const SALON_INFO = {
  name: "Hair By David & Co.",
  tagline: "Celebrating 23 Years in Toronto's Fashion District",
  subtitle: "Specializing in short to medium haircut lengths, bespoke hair colour, balayage, and Cezanne keratin treatments.",
  rating: 4.8,
  reviewCount: 511,
  yearsInBusiness: 23,
  address: {
    street: "477 Richmond St W #501",
    city: "Toronto",
    province: "ON",
    postalCode: "M5V 3E7",
    country: "Canada",
    neighborhood: "Fashion District / Entertainment District",
    building: "Historic 477 Richmond Heritage Loft, Suite 501",
    full: "477 Richmond St W #501, Toronto, ON M5V 3E7, Canada"
  },
  phones: {
    primary: "+1 416-913-2146",
    primaryDisplay: "(416) 913-2146",
    secondary: "+1 437-329-4848",
    secondaryDisplay: "(437) 329-4848",
    telLink: "tel:+14169132146"
  },
  email: "appointments@hairbydavidandco.com",
  instagram: {
    handle: "@hairbydavidandco",
    url: "https://www.instagram.com/hairbydavidandco/?hl=en",
    followers: "1.8K+"
  },
  bookingUrl: "https://www.hairbydavidandco.com/?rwg_token=ALcMQYbGx7tgFx9uzgIlHWMP_JEwGn3nQGDPj9BjefN-Let2LbCxZlFUk1Ltnp1sCuYTpAcygfPULT00V6PCAtEJmf3oAGjBHw%3D%3D",
  officialWebsite: "https://hairbydavidandco.com/",
  googleMapsUrl: "https://maps.google.com/maps?udm&fvr=1&pvq=Cg0vZy8xMWJ4ZHk0cmd5IhAKCmhhaXIgc2Fsb24QAhgD&lqi=ChFoYWlyIHNhbG9uIGNhbmFkYUjdu8nO8aqAgAhaIRAAEAEYACIRaGFpciBzYWxvbiBjYW5hZGEqBggDEAAQAZIBEnVuaXNleF9oYWlyZHJlc3Nlcg&vet=10CAAQoqAOahcKEwiond6KoY6YAxUAAAAAHQAAAAAQBw..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x882b34dc6c23193f:0xa52d6a01ca50aa71",
  hours: [
    { day: "Tuesday", open: "10:30 am", close: "7:30 pm", isOpen: true },
    { day: "Wednesday", open: "10:30 am", close: "7:30 pm", isOpen: true },
    { day: "Thursday", open: "10:30 am", close: "8:00 pm", isOpen: true },
    { day: "Friday", open: "10:30 am", close: "7:30 pm", isOpen: true },
    { day: "Saturday", open: "9:30 am", close: "6:00 pm", isOpen: true },
    { day: "Sunday", open: "Closed", close: "Private events on request", isOpen: false },
    { day: "Monday", open: "Closed", close: "Private education & prep", isOpen: false },
  ],
  statusNote: "Closed · Opens 10:30 am"
};

export const SERVICES = [
  // COLOUR & BALAYAGE
  {
    id: "balayage-signature",
    name: "Signature Balayage & French Foilayage",
    category: "Hair Colour & Balayage",
    price: 245,
    duration: "180 min",
    popular: true,
    description: "Custom hand-painted French balayage seamlessly tailored to your facial bone structure and natural base. Includes bespoke gloss toner, Olaplex bond repair, and signature blowout.",
    tags: ["Custom Blend", "Low Maintenance", "Seamless Melt", "Gloss Included"],
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "highlights-balayage",
    name: "Highlights Balayage Hybrid",
    category: "Hair Colour & Balayage",
    price: 275,
    duration: "210 min",
    popular: true,
    description: "The ultimate dimensional blonding experience. Combines ultra-fine micro-foiling around the hairline (money piece) with soft open-air balayage throughout the mid-lengths and ends.",
    tags: ["High Dimension", "Max Lift", "Root Melt"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "full-head-highlights",
    name: "Full Head Highlights",
    category: "Hair Colour & Balayage",
    price: 230,
    duration: "180 min",
    popular: false,
    description: "Complete multidimensional coverage from nape to crown. Ideal for bright blonde transformations, icy platinum babylights, or rich multi-tonal brunette dimension.",
    tags: ["Full Coverage", "Precision Foils", "Custom Toner"],
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "base-colour-highlights",
    name: "Base Colour With Highlights",
    category: "Hair Colour & Balayage",
    price: 215,
    duration: "150 min",
    popular: false,
    description: "100% gray coverage or depth enhancement at the roots paired with strategically placed face-framing and crown highlights for luminous, natural-looking dimension.",
    tags: ["Grey Coverage", "Dimension", "Rich Pigment"],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bleach-tone",
    name: "Bleach & Tone (Global Blonde)",
    category: "Hair Colour & Balayage",
    price: 260,
    duration: "210 min",
    popular: false,
    description: "All-over on-scalp lightener application followed by custom formulation toning for platinum, champagne, pearl, or pastel blonde perfection. Includes restorative bond protection.",
    tags: ["Platinum", "Double Process", "Bond Builder"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ombre-hair-colour",
    name: "Ombre Hair Colour & Melt",
    category: "Hair Colour & Balayage",
    price: 220,
    duration: "165 min",
    popular: false,
    description: "A gorgeous gradient transition from deep rich roots into luminous golden or icy ends with seamless diffusion and zero harsh demarcation lines.",
    tags: ["Gradient", "Low Regrowth", "Statement Look"],
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "custom-colour-changes",
    name: "Custom Colour & Colour Changes",
    category: "Hair Colour & Balayage",
    price: 295,
    duration: "240 min",
    popular: false,
    description: "Expert colour correction and dramatic transitions (dark to blonde, brass removal, or box dye correction). Comprehensive diagnostic consultation required.",
    tags: ["Correction", "Transformative", "Color Specialist"],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "root-touch-up",
    name: "Root Touch Up & Gloss Glaze",
    category: "Hair Colour & Balayage",
    price: 125,
    duration: "90 min",
    popular: false,
    description: "Precise regrowth colour application (up to 1.5 inches) matched to your signature shade, accompanied by an all-over acid gloss for high-wattage shine.",
    tags: ["Maintenance", "Gray Blending", "Quick Service"],
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
  },

  // PRECISION HAIRCUTS & STYLING
  {
    id: "signature-cut-style",
    name: "David's Signature Cut & Style",
    category: "Haircuts & Styling",
    price: 95,
    duration: "60 min",
    popular: true,
    description: "A bespoke haircut tailored to your lifestyle, bone structure, and texture. Includes aromatherapy scalp wash, precision dry/wet scissor & razor shaping, and signature round-brush blowout.",
    tags: ["Flagship", "Custom Shape", "Blowout Included"],
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "short-medium-haircut",
    name: "Short to Medium Length Haircut Specialist",
    category: "Haircuts & Styling",
    price: 90,
    duration: "60 min",
    popular: true,
    description: "Our signature salon forte for 23 years. Precision French bobs, Italian textured lobs, modern bixies, and architectural shags engineered to grow out effortlessly.",
    tags: ["Salon Specialty", "Fashion District Pick", "Effortless"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "medium-long-haircut",
    name: "Medium To Long Haircut & Layering",
    category: "Haircuts & Styling",
    price: 105,
    duration: "75 min",
    popular: false,
    description: "Removes split ends and heaviness while preserving length. Creates cascading curtain bangs, butterfly movement, and effortless bounce with internal invisible layers.",
    tags: ["Weight Removal", "Curtain Bangs", "Bouncy Layers"],
    image: "https://images.unsplash.com/photo-1519742866993-661304602f06?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "curly-hair-cut",
    name: "Curly Hair Specialist Cut & Definition",
    category: "Haircuts & Styling",
    price: 115,
    duration: "75 min",
    popular: true,
    description: "Specialized dry and wet curl carving respecting natural bounce patterns (Types 2A–4C). Includes deep hydration wash, micro-curl shaping, and diffuser styling.",
    tags: ["Texture Specialist", "Curl Care", "Hydration"],
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "extra-long-haircut",
    name: "Extra Long Haircut & Deep Conditioning",
    category: "Haircuts & Styling",
    price: 120,
    duration: "80 min",
    popular: false,
    description: "Comprehensive care for lengths passing the mid-back. Precision end dusting, healthy weight redistribution, and rich intensive mask treatment.",
    tags: ["Extra Length", "Split End Repair", "Density Balance"],
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "children-cuts",
    name: "Children's & Kid's Cuts",
    category: "Haircuts & Styling",
    price: 55,
    duration: "40 min",
    popular: false,
    description: "Gentle, fun, and patient precision cuts for children under 12. Styled with lightweight child-safe products in our warm, welcoming loft space.",
    tags: ["Under 12", "Gentle & Fast", "Neat Style"],
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
  },

  // CEZANNE KERATIN & TEXTURE
  {
    id: "cezanne-keratin",
    name: "Cezanne Keratin Smoothing Treatment",
    category: "Cezanne Keratin & Treatments",
    price: 320,
    duration: "180 min",
    popular: true,
    description: "100% Formaldehyde-free, non-toxic smoothing treatment that transforms frizzy, unmanageable hair into silky, sleek tresses. Safe for color-treated hair; reduces blow-dry time by 50% for up to 5 months.",
    tags: ["Formaldehyde Free", "Zero Frizz", "Lasts 5 Months", "Award Winning"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "keratin-smoothing-express",
    name: "Cezanne Express Keratin Polish",
    category: "Cezanne Keratin & Treatments",
    price: 175,
    duration: "90 min",
    popular: false,
    description: "An express formula perfect for quick frizz control before humidity seasons or vacations. Gives mirror-like shine and humidity resistance for 6 to 8 weeks.",
    tags: ["Express", "Holiday Prep", "High Shine"],
    image: "https://images.unsplash.com/photo-1522337094346-290f26a121f0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-texture-treatment",
    name: "Hair Texture Restructuring & Perming",
    category: "Cezanne Keratin & Treatments",
    price: 195,
    duration: "120 min",
    popular: false,
    description: "Modern beach wave body perming or texture relaxation using gentle cysteamine-based solutions for natural-looking volume and effortless wave patterns.",
    tags: ["Modern Wave", "Gentle Formula", "Natural Volume"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "shampoo-conditioning-ritual",
    name: "Deep Shampoo & Restorative Conditioning Ritual",
    category: "Cezanne Keratin & Treatments",
    price: 70,
    duration: "45 min",
    popular: false,
    description: "A restorative head spa experience: invigorating botanical scalp cleanse, warm towel steam wrap, micro-mist peptide infusion, and relaxing neck massage.",
    tags: ["Scalp Spa", "Head Massage", "Hydration Bath"],
    image: "https://images.unsplash.com/photo-1512290900672-1f558a2c9763?auto=format&fit=crop&w=800&q=80"
  },

  // BLOWOUTS, BRIDAL & EXTENSIONS
  {
    id: "signature-blowout-style",
    name: "Signature Blowout & Hot Tool Finish",
    category: "Blowouts & Special Events",
    price: 65,
    duration: "45 min",
    popular: true,
    description: "Voluminous, long-lasting blowout utilizing ionic ceramic brushes and luxury serums. Finished with polished bevels, beach waves, or glass-sleek straight finish.",
    tags: ["Bouncy Finish", "Event Ready", "Heat Defense"],
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bridal-hair",
    name: "Bridal Hair & Veil Placement",
    category: "Blowouts & Special Events",
    price: 185,
    duration: "90 min",
    popular: true,
    description: "Exclusive bridal couture hair design. From timeless royal chignons to bohemian undone waves, executed with all-day structural hold and veil integration.",
    tags: ["Bridal Specialist", "All-Day Hold", "Veil Fitting"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "special-events-updos",
    name: "Red Carpet Updos & Formal Styling",
    category: "Blowouts & Special Events",
    price: 125,
    duration: "60 min",
    popular: false,
    description: "Sophisticated styling for galas, TIFF premieres, fashion shows, and anniversaries. Customized to complement your dress neckline and personal aesthetic.",
    tags: ["TIFF / Gala", "Architectural", "Editorial"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-extensions-consult",
    name: "Hair Extensions (Custom Tape-in / K-Tip)",
    category: "Blowouts & Special Events",
    price: 450,
    duration: "180 min",
    popular: false,
    description: "100% Remy human hair extensions for unmatched volume, density, and seamless length. Color-matched in-studio with precision blending haircut.",
    tags: ["100% Remy", "Seamless Blend", "Volume & Length"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  }
];

export const CATEGORIES = [
  "All Services",
  "Hair Colour & Balayage",
  "Haircuts & Styling",
  "Cezanne Keratin & Treatments",
  "Blowouts & Special Events"
];

export const REVIEWS = [
  {
    id: 1,
    author: "Elena Rostova",
    rating: 5,
    date: "2 weeks ago",
    service: "Signature Balayage & French Foilayage",
    quote: "Great service, location and staff!",
    content: "David and his team are true artists in Toronto's Fashion District. I came in with brassy, damaged over-bleached hair and left with the softest, most dimensional sun-kissed balayage I've ever had. The studio loft on Richmond is so chic and bright!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    author: "Marcella V.",
    rating: 5,
    date: "1 month ago",
    service: "Short to Medium Length Haircut",
    quote: "She gave me a suggestion to tweek my regular style a bit and it was perfect.",
    content: "I have been coming to Hair By David & Co for 4 years now. Every visit is consistent, thoughtful, and relaxing. She gave me a suggestion to tweek my regular style a bit and it was perfect—my bob sits effortlessly without even needing to blow dry daily!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    author: "Chloe Desjardins",
    rating: 5,
    date: "3 weeks ago",
    service: "Cezanne Keratin Smoothing Treatment",
    quote: "It’s so clean and prices are right for the quality of services offered.",
    content: "After searching Toronto for a trustworthy salon for Cezanne keratin, I found David's salon. It’s so clean and prices are right for the quality of services offered. No toxic chemical smell, hair is silky smooth, and humidity in Toronto doesn't ruin my hair anymore!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    author: "Anthony K.",
    rating: 5,
    date: "2 months ago",
    service: "David's Signature Cut & Style",
    quote: "Master of scissor precision. Celebrating 23 years for a reason!",
    content: "David has been cutting hair in this building for over two decades and you can immediately sense the mastery. The loft space at 477 Richmond is peaceful, serene, and free of the usual salon chaos. Best cut in downtown Toronto.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    author: "Samantha Lee",
    rating: 5,
    date: "Just recently",
    service: "Highlights Balayage Hybrid",
    quote: "The money-piece blonde and toner blend are chef's kiss.",
    content: "The consultation was so thorough! We looked through swatches and photos, discussed how often I can come in for maintenance, and tailored the formula. 4.8 stars with 500+ reviews is well earned.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    author: "Jessica M.",
    rating: 5,
    date: "1 month ago",
    service: "Bridal Hair & Updo",
    quote: "My wedding hair lasted through 12 hours of dancing and photos!",
    content: "David and the team made getting ready on my wedding morning so calming and fun. The updo was romantic, architectural, and did not budge an inch. All my bridesmaids looked phenomenal.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "David",
    role: "Founder & Master Hairdresser",
    experience: "23+ Years Experience",
    bio: "Established Hair By David & Co in 2003 in Toronto's Fashion District. Renowned across Canada for precision short-to-medium haircut architecture, French scissor balance, and bespoke styling.",
    specialties: ["Precision French Bobs", "Custom Layering", "Cezanne Master Certified"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Valerie",
    role: "Senior Colour Director & Balayage Specialist",
    experience: "12 Years Experience",
    bio: "Specializes in effortless lived-in blondes, high-lift micro-foils, and seamless face-framing balayage that grows out with zero harsh lines.",
    specialties: ["Signature Balayage", "Blonde Melt", "Colour Correction"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Julian",
    role: "Keratin & Texture Restructuring Artisan",
    experience: "9 Years Experience",
    bio: "Passionate about hair health, moisture restoration, and non-toxic Cezanne smoothing treatments tailored to eliminate frizz while keeping hair body.",
    specialties: ["Cezanne Keratin", "Curly Carving", "Scalp Rituals"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Maya",
    role: "Lead Bridal & Red Carpet Stylist",
    experience: "8 Years Experience",
    bio: "Creates timeless bridal updos, modern textured chignons, and editorial blowouts seen at Toronto Fashion Week and TIFF premieres.",
    specialties: ["Bridal Updos", "Hollywood Waves", "Volume Blowouts"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  }
];

export const TRANSFORMATIONS = [
  {
    id: "trans-1",
    title: "Brass to Dimensional Sun-Kissed Balayage",
    category: "Hair Colour & Balayage",
    beforeText: "Over-processed brassy yellow with dark regrowth bands",
    afterText: "Seamless honey-blonde balayage with shadow root & Olaplex gloss",
    beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    stylist: "Valerie",
    duration: "3.5 Hours"
  },
  {
    id: "trans-2",
    title: "Heavy Dull Lengths to French Textured Bob",
    category: "Haircuts & Styling",
    beforeText: "Weighed-down long hair with split ends and no movement",
    afterText: "Architectural French bob with interior air layers and face frame",
    beforeImg: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80",
    stylist: "David",
    duration: "1 Hour"
  },
  {
    id: "trans-3",
    title: "Frizzy Unruly Wave to Mirror-Sleek Cezanne Keratin",
    category: "Cezanne Keratin & Treatments",
    beforeText: "Severe humidity frizz, porous cuticle, difficult 45-min dry time",
    afterText: "Silky, reflective, humidity-proof mane with natural bounce intact",
    beforeImg: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    stylist: "Julian",
    duration: "2.5 Hours"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80",
    likes: 482,
    caption: "Sunlit balayage tones on a Toronto autumn afternoon. Suite 501 views ✨ #balayagetoronto #hairbydavidandco"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80",
    likes: 619,
    caption: "The French bob never goes out of style. Clean scissor lines by David. #torontofashiondistrict #shortbob"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    likes: 395,
    caption: "Formaldehyde-free Cezanne Keratin smoothing. Zero frizz, 100% shine. Ready for any weather. #cezannetoronto"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    likes: 540,
    caption: "Bridal test run in the loft! Soft romantic textured updo for our gorgeous bride. #torontoweddinghair"
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    likes: 728,
    caption: "Icy pearl blonde global bleach & tone. Bond protection is everything! #platinumblonde #torontohairsalon"
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    likes: 611,
    caption: "Dimensional honey babylights + curtain bangs. Effortless low-maintenance luxury. #hairgoals #477richmond"
  }
];

export const FAQS = [
  {
    question: "Where is Hair By David & Co. located and what are the parking options?",
    answer: "We are located at 477 Richmond St W, Suite #501 in Toronto's vibrant Fashion District (near Richmond & Spadina). When you arrive, take the elevators up to the 5th floor. Street parking is available along Richmond and Camden St, and there are two Green P parking garages within a 2-minute walk on Richmond and on Augusta Ave."
  },
  {
    question: "What makes Cezanne Keratin different from traditional Brazilian Blowouts?",
    answer: "Unlike traditional smoothing treatments that contain toxic formaldehyde or methylene glycol, Cezanne is 100% non-toxic, formaldehyde-free, and hypoallergenic. It works from the inside out using sericin (silk protein) and keratin to smooth frizz, enhance shine, and reduce blow-dry time by 50% without flattening your natural volume or altering your curl pattern permanently."
  },
  {
    question: "What is David's specialty in haircuts?",
    answer: "Celebrating 23 years in the Fashion District, David is acclaimed for short to medium haircut lengths—including precision French bobs, textured lobs, shags, and pixies. His cutting technique focuses on bone structure harmony, hair density management, and cuts that grow out beautifully with minimal daily styling effort."
  },
  {
    question: "How long does a full Balayage appointment take?",
    answer: "A signature balayage session typically takes between 2.5 to 3.5 hours. This includes in-depth consultation, custom hand-painting or foilayage placement, gentle processing, bond repair treatment (Olaplex), customized gloss glaze toner, and our signature blow-dry styling."
  },
  {
    question: "Do I need a consultation before a major colour change or correction?",
    answer: "Yes, for dramatic changes (such as dark brunette to platinum blonde or correcting previous box dye), we highly recommend a 15-minute consultation. We evaluate your hair's tensile health, perform a strand test if required, and map out a realistic path to your dream shade while preserving hair integrity."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our online booking engine on this site, visit our official booking portal at hairbydavidandco.com, or call our studio front desk directly at (416) 913-2146 or (437) 329-4848."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your current hair length?",
    options: [
      { label: "Short (Pixie to Chin)", value: "short", icon: "✂️" },
      { label: "Medium (Bob, Lob to Shoulders)", value: "medium", icon: "💇‍♀️" },
      { label: "Long (Collarbone to Mid-back)", value: "long", icon: "✨" },
      { label: "Extra Long (Past Mid-back)", value: "extra-long", icon: "👑" }
    ]
  },
  {
    id: 2,
    question: "What is your primary hair transformation goal?",
    options: [
      { label: "Lived-In Dimensional Balayage / Blonding", value: "balayage", icon: "🎨" },
      { label: "Precision Haircut & Modern Face-Framing Shape", value: "cut", icon: "📐" },
      { label: "Frizz Elimination & Gloss with Cezanne Keratin", value: "keratin", icon: "💧" },
      { label: "Bridal, TIFF Gala or Event Glamour Styling", value: "bridal", icon: "🥂" }
    ]
  },
  {
    id: 3,
    question: "What is your hair's current texture & condition?",
    options: [
      { label: "Fine to Normal, Virgin or Minimally Processed", value: "virgin", icon: "🌿" },
      { label: "Thick, Curly or Frizz-Prone in Humidity", value: "curly-frizzy", icon: "🌀" },
      { label: "Bleached, Highlighted or Previously Colored", value: "colored", icon: "⚡" },
      { label: "Dry or Prone to Split Ends & Heat Damage", value: "damaged", icon: "🛡️" }
    ]
  },
  {
    id: 4,
    question: "What is your preferred salon maintenance frequency?",
    options: [
      { label: "Low Maintenance (Every 4–6 months)", value: "low", icon: "☕" },
      { label: "Medium Maintenance (Every 8–12 weeks)", value: "med", icon: "📅" },
      { label: "High Precision & Sharp (Every 4–6 weeks)", value: "high", icon: "⭐" },
      { label: "Special Event Only (One-time perfection)", value: "event", icon: "🎉" }
    ]
  }
];

