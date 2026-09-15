// lib/i18n.ts

export type Language = 'en' | 'hi' | 'bn';

export const translations = {
  en: {
    // Brand & Header
    brandName: "THE GOLGAPPA CO.",
    tagline: "Crispy. Chatpata. Addictive.",
    since: "Serving Happiness Since 2004 (20+ Years)",
    ownerName: "Owner: Mahesh Kumar Gupta",
    
    // Nav
    navHome: "Home",
    navMenu: "Golgappe",
    navPaani: "Our Paani",
    navAbout: "About Us",
    navReviews: "Reviews",
    navVisit: "Visit Us",
    navTrack: "Track Order",
    navAdmin: "Owner Login",
    orderNow: "ORDER NOW",

    // Hero
    heroBadge: "Freshly Made • Made to Order • 20+ Years Legacy",
    heroTitle: "GOLGAPPA JO DIL SE YAAD RAHE.",
    heroSub: "Crispy Puri. Chatpata Masala. Teekha Paani.",
    btnBook: "BOOK YOUR PLATE",
    btnVisit: "VISIT OUR STALL",

    // Menu Section
    menuTitle: "Choose Your Golgappa",
    menuSub: "Handcrafted by Mahesh Kumar Gupta with signature secret spices.",
    spiceLevel: "Spice Level",
    price: "Price",
    add: "ADD TO CART",
    outOfStock: "Sold Out",

    // Customization & Ordering
    cartTitle: "Your Golgappa Plate",
    step1: "1. Items",
    step2: "2. Customize",
    step3: "3. Details",
    step4: "4. Review",
    spicePreference: "Select Spice Level",
    paaniPreference: "Paani Preference",
    addOns: "Optional Add-ons",
    subtotal: "Subtotal",
    total: "Total",
    paymentMethod: "Payment Method",
    payAtStall: "Pay at Stall (Cash / Cash on Pickup)",
    continue: "CONTINUE",
    confirmBooking: "CONFIRM BOOKING",
    
    // Customer Form
    fullName: "Full Name",
    namePlaceholder: "Enter your full name",
    phone: "Mobile Number",
    phonePlaceholder: "10-digit mobile number",
    pickupTime: "Pickup Time",
    asap: "ASAP (Within 15-20 Mins)",
    specialNotes: "Special Instructions",
    notesPlaceholder: "Any special request? (e.g. Extra dry puri)",

    // About Section
    aboutHeading: "20+ Years of Chatpata Excellence",
    aboutPara1: "Started in 2004 by Mahesh Kumar Gupta, THE GOLGAPPA CO. has grown into the city's favorite street food destination.",
    aboutPara2: "Every puri is fried in clean oil, filled with freshly boiled potato-chana masala, and served with pure mineral water infused with handpicked mint and spices.",

    // Tracking
    trackTitle: "Track Your Order",
    trackSub: "Enter your Order ID and Registered Mobile Number to view live status.",
    orderIdLabel: "Order ID (e.g. GP-20260915-001)",
    searchOrder: "TRACK ORDER STATUS",
    
    // Admin
    adminTitle: "Owner Admin Portal",
    adminSub: "Real-time order notifications & shop control panel",
  },
  hi: {
    // Brand & Header
    brandName: "द गोलगप्पा कंपनी",
    tagline: "क्रिस्पी। चटपटा। एडिक्टिव।",
    since: "2004 से स्वाद और भरोसे की परंपरा (20+ साल)",
    ownerName: "दुकान मालिक: महेश कुमार गुप्ता",
    
    // Nav
    navHome: "होम",
    navMenu: "गोलगप्पे",
    navPaani: "हमारा पानी",
    navAbout: "हमारे बारे में",
    navReviews: "रिव्यूज",
    navVisit: "दुकान पर आएं",
    navTrack: "ऑर्डर ट्रैक करें",
    navAdmin: "मालिक लॉगिन",
    orderNow: "अभी ऑर्डर करें",

    // Hero
    heroBadge: "ताज़ा तैयार • ऑर्डर पर बना • 20+ सालों का भरोसा",
    heroTitle: "गोलगप्पा जो दिल से याद रहे।",
    heroSub: "क्रिस्पी पूरी। चटपटा मसाला। तीखा पानी।",
    btnBook: "अपनी प्लेट बुक करें",
    btnVisit: "दुकान पर पधारें",

    // Menu Section
    menuTitle: "अपना पसंदीदा गोलगप्पा चुनें",
    menuSub: "महेश कुमार गुप्ता जी के गुप्त मसालों से बना खास स्वाद।",
    spiceLevel: "तीखापन",
    price: "कीमत",
    add: "ऑर्डर में जोड़ें",
    outOfStock: "खत्म हो गया",

    // Customization & Ordering
    cartTitle: "आपकी गोलगप्पा प्लेट",
    step1: "1. आयटम",
    step2: "2. कस्टमाइज़",
    step3: "3. विवरण",
    step4: "4. समीक्षा",
    spicePreference: "तीखापन चुनें",
    paaniPreference: "पानी की पसंद",
    addOns: "अतिरिक्त सामग्री (Add-ons)",
    subtotal: "उप-योग",
    total: "कुल राशि",
    paymentMethod: "भुगतान का तरीका",
    payAtStall: "स्टॉल पर भुगतान करें (कैश / पिकअप के समय)",
    continue: "आगे बढ़ें",
    confirmBooking: "बुकिंग कन्फर्म करें",
    
    // Customer Form
    fullName: "पूरा नाम",
    namePlaceholder: "अपना नाम दर्ज करें",
    phone: "मोबाइल नंबर",
    phonePlaceholder: "10-अंकों का मोबाइल नंबर",
    pickupTime: "पिकअप का समय",
    asap: "तुरंत (15-20 मिनट में)",
    specialNotes: "विशेष निर्देश",
    notesPlaceholder: "कोई खास पसंद? (जैसे: सूखी पूरी extra)",

    // About Section
    aboutHeading: "20+ वर्षों की चटपटी विरासत",
    aboutPara1: "सन 2004 में महेश कुमार गुप्ता द्वारा शुरू की गई 'द गोलगप्पा कंपनी' आज शहर का सबसे पसंदीदा स्ट्रीट फूड ब्रांड है।",
    aboutPara2: "हर पूरी साफ़ तेल में तली जाती है, ताज़ा उबले आलू-चने के मसाले से भरी जाती है और मिनरल वाटर व ताज़ा पुदीने के पानी के साथ परोसी जाती है।",

    // Tracking
    trackTitle: "अपना ऑर्डर ट्रैक करें",
    trackSub: "लाइव स्टेटस देखने के लिए अपना ऑर्डर ID और मोबाइल नंबर दर्ज करें।",
    orderIdLabel: "ऑर्डर ID (उदा. GP-20260915-001)",
    searchOrder: "स्टेटस देखें",
    
    // Admin
    adminTitle: "ऑनर एडमिन पोर्टल",
    adminSub: "रियल-टाइम ऑर्डर नोटिफिकेशन और कंट्रोल पैनल",
  },
  bn: {
    // Brand & Header
    brandName: "দ্যা গোলগাপ্পা কোং",
    tagline: "মুচমুচে। চটপটা। অতুলনীয়।",
    since: "২০০৪ সাল থেকে স্বাদের ঐতিহ্য (২০+ বছর)",
    ownerName: "মালিক: মহেশ কুমার গুপ্তা",
    
    // Nav
    navHome: "হোম",
    navMenu: "ফুচকা / গোলগাপ্পা",
    navPaani: "আমাদের জল",
    navAbout: "আমাদের কথা",
    navReviews: "রিভিউ",
    navVisit: "দোকানে আসুন",
    navTrack: "অর্ডার ট্র্যাক করুন",
    navAdmin: "মালিক লগইন",
    orderNow: "এখনই বুক করুন",

    // Hero
    heroBadge: "সদ্য প্রস্তুত • অর্ডারে তৈরি • ২০+ বছরের বিশ্বাস",
    heroTitle: "এমন গোলগাপ্পা যা মন কেড়ে নেবে।",
    heroSub: "মুচমুচে পুরি। চটপটা মশলা। ঝাল ঝাল জল।",
    btnBook: "প্লেট বুক করুন",
    btnVisit: "দোকানে আসুন",

    // Menu Section
    menuTitle: "আপনার পছন্দের গোলগাপ্পা বেছে নিন",
    menuSub: "মহেশ কুমার গুপ্তার নিজস্ব মশলায় তৈরি সেরা স্বাদ।",
    spiceLevel: "ঝালের পরিমাণ",
    price: "দাম",
    add: "কার্টে যোগ করুন",
    outOfStock: "শেষ হয়ে গেছে",

    // Customization & Ordering
    cartTitle: "আপনার ফুচকা থালি",
    step1: "১. আইটেম",
    step2: "২. পছন্দ",
    step3: "৩. তথ্য",
    step4: "৪. রিভিউ",
    spicePreference: "ঝাল পছন্দ করুন",
    paaniPreference: "জলের পছন্দ",
    addOns: "অতিরিক্ত আইটেম",
    subtotal: "মোট",
    total: "সর্বমোট",
    paymentMethod: "পেমেন্ট পদ্ধতি",
    payAtStall: "দোকানে পেমেন্ট করুন (ক্যাশ)",
    continue: "এগিয়ে যান",
    confirmBooking: "বুকিং নিশ্চিত করুন",
    
    // Customer Form
    fullName: "সম্পূর্ণ নাম",
    namePlaceholder: "আপনার নাম লিখুন",
    phone: "মোবাইল নম্বর",
    phonePlaceholder: "১০ ডিজিটের মোবাইল নম্বর",
    pickupTime: "পিকআপের সময়",
    asap: "যত দ্রুত সম্ভব (১৫-২০ মিনিট)",
    specialNotes: "বিশেষ অনুরোধ",
    notesPlaceholder: "কোন বিশেষ অনুরোধ? (যেমন: শুকনো পুরি বেশি)",

    // About Section
    aboutHeading: "২০+ বছরের চটপটা ঐতিহ্য",
    aboutPara1: "২০০৪ সালে মহেশ কুমার গুপ্তার হাত ধরে তৈরি 'দ্যা গোলগাপ্পা কোং' আজ শহরের অন্যতম প্রিয় ফুচকা গন্তব্য।",
    aboutPara2: "প্রতিটি পুরি স্বাস্থ্যকর তেলে ভাজা হয় এবং টাটকা পুদিনা ও মিনারেল ওয়াটার দিয়ে তৈরি বিশেষ জলে পরিবেশন করা হয়।",

    // Tracking
    trackTitle: "অর্ডার ট্র্যাক করুন",
    trackSub: "আপনার অর্ডার আইডি ও ফোন নম্বর দিন।",
    orderIdLabel: "অর্ডার ID (যেমন GP-20260915-001)",
    searchOrder: "স্ট্যাটাস দেখুন",
    
    // Admin
    adminTitle: "মালিক অ্যাডমিন পোর্টাল",
    adminSub: "রিয়েল-টাইম অর্ডার নোটিফিকেশন ও কন্ট্রোল প্যানেল",
  }
};
