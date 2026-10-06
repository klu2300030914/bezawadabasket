export type Language = 'en' | 'te';

export type TranslationKey =
  | 'nav_home'
  | 'nav_categories'
  | 'nav_catalogue'
  | 'nav_clients'
  | 'nav_packages'
  | 'nav_how'
  | 'nav_quote'
  | 'nav_contact'
  | 'hero_badge'
  | 'hero_title'
  | 'hero_tagline'
  | 'hero_delivery'
  | 'hero_stat_branches'
  | 'hero_stat_showrooms'
  | 'hero_stat_delivery'
  | 'hero_quote_btn'
  | 'hero_whatsapp_btn'
  | 'why_title'
  | 'why_subtitle'
  | 'why_1_title'
  | 'why_1_desc'
  | 'why_2_title'
  | 'why_2_desc'
  | 'why_3_title'
  | 'why_3_desc'
  | 'why_4_title'
  | 'why_4_desc'
  | 'why_5_title'
  | 'why_5_desc'
  | 'why_6_title'
  | 'why_6_desc'
  | 'why_7_title'
  | 'why_7_desc'
  | 'categories_title'
  | 'categories_subtitle'
  | 'cat_1_title'
  | 'cat_1_desc'
  | 'cat_2_title'
  | 'cat_2_desc'
  | 'cat_3_title'
  | 'cat_3_desc'
  | 'cat_4_title'
  | 'cat_4_desc'
  | 'cat_5_title'
  | 'cat_5_desc'
  | 'catalogue_title'
  | 'catalogue_subtitle'
  | 'catalogue_note'
  | 'cat_tab_stationery'
  | 'cat_tab_sanitary'
  | 'cat_tab_party'
  | 'clients_title'
  | 'clients_subtitle'
  | 'client_banks_title'
  | 'client_banks_desc'
  | 'client_gov_title'
  | 'client_gov_desc'
  | 'client_showroom_title'
  | 'client_showroom_desc'
  | 'client_showroom_highlight'
  | 'client_corporate_title'
  | 'client_corporate_desc'
  | 'packages_title'
  | 'packages_subtitle'
  | 'pkg_1_title'
  | 'pkg_1_desc'
  | 'pkg_2_title'
  | 'pkg_2_desc'
  | 'how_title'
  | 'how_subtitle'
  | 'how_1'
  | 'how_1_desc'
  | 'how_2'
  | 'how_2_desc'
  | 'how_3'
  | 'how_3_desc'
  | 'how_4'
  | 'how_4_desc'
  | 'quote_title'
  | 'quote_subtitle'
  | 'form_name'
  | 'form_organisation'
  | 'form_phone'
  | 'form_email'
  | 'form_items'
  | 'form_date'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'app_title'
  | 'app_subtitle'
  | 'contact_title'
  | 'contact_subtitle'
  | 'contact_phone'
  | 'contact_email'
  | 'contact_address'
  | 'footer_about'
  | 'footer_links'
  | 'footer_contact'
  | 'footer_rights'
  | 'footer_gst'
  | 'contact_cofounder'
  | 'download_catalogue';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    nav_home: 'Home',
    nav_categories: 'Categories',
    nav_catalogue: 'Catalogue',
    nav_clients: 'Clients',
    nav_packages: 'Packages',
    nav_how: 'How It Works',
    nav_quote: 'Get a Quote',
    nav_contact: 'Contact',
    hero_badge: 'Bezawada Basket',
    hero_title: 'Srindhu Enterprises',
    hero_tagline: 'Your Everyday Needs, Delivered',
    hero_delivery: 'Delivering across Vijayawada',
    hero_stat_branches: 'Bank Branches & Offices',
    hero_stat_showrooms: 'Car Showrooms',
    hero_stat_delivery: 'Local Delivery',
    hero_quote_btn: 'Request a Quote',
    hero_whatsapp_btn: 'WhatsApp Us',
    why_title: 'Why Choose Us',
    why_subtitle: 'One trusted partner for all your office, sanitary, and celebration needs',
    why_1_title: 'One Vendor, One Invoice',
    why_1_desc: 'Stationery, sanitary, and party items from a single supplier — one delivery, one bill, one point of contact.',
    why_2_title: 'Wide Product Range',
    why_2_desc: 'Hundreds of items across stationery, cleaning, disposables, computer accessories, and party supplies.',
    why_3_title: 'Quality Assured',
    why_3_desc: 'We stock reliable, trusted brands so your office and showroom always look professional.',
    why_4_title: 'Reliable Service',
    why_4_desc: 'Consistent supply, dependable delivery, and responsive support for every order, big or small.',
    why_5_title: 'Fast Local Delivery',
    why_5_desc: 'Quick delivery anywhere within Vijayawada, so you never run out of essentials.',
    why_6_title: 'Bulk & Monthly Supply',
    why_6_desc: 'Regular monthly supply contracts for banks, government offices, and corporate clients.',
    why_7_title: 'Showroom-Ready',
    why_7_desc: 'Quick last-minute supply of party poppers, balloons, and decorations for car delivery days.',
    categories_title: 'Our Categories',
    categories_subtitle: 'Everything your organisation needs, organised in one place',
    cat_1_title: 'Office Stationery & Essentials',
    cat_1_desc: 'Paper, files, pens, desk supplies, binding, and stamping materials',
    cat_2_title: 'Cleaning Items',
    cat_2_desc: 'Cleaning agents, mops, brushes, detergents, and disinfectants',
    cat_3_title: 'Party & Decoration Items',
    cat_3_desc: 'Poppers, balloons, banners, ribbons, and celebration decorations',
    cat_4_title: 'Disposables & Paper Products',
    cat_4_desc: 'Tissues, paper cups, plates, napkins, and garbage bags',
    cat_5_title: 'Computer & Printer Accessories',
    cat_5_desc: 'Keyboards, mouse, pen drives, toners, and cartridges',
    catalogue_title: 'Product Catalogue',
    catalogue_subtitle: 'Browse our full range — tap any category to expand',
    catalogue_note: 'We also arrange any item not listed here, as per your requirement.',
    cat_tab_stationery: 'Stationery',
    cat_tab_sanitary: 'Sanitary',
    cat_tab_party: 'Party & Decoration',
    clients_title: 'Who We Serve',
    clients_subtitle: 'Trusted by organisations across Vijayawada',
    client_banks_title: 'Banks',
    client_banks_desc: 'Monthly stationery and housekeeping supplies delivered together.',
    client_gov_title: 'Government Offices',
    client_gov_desc: 'Reliable supply of files, paper, and cleaning materials.',
    client_showroom_title: 'Car Showrooms',
    client_showroom_desc: 'Everything for your showroom in one order.',
    client_showroom_highlight:
      'Everything your showroom needs in one order: office stationery, housekeeping and cleaning supplies, and party and celebration items for car delivery events.',
    client_corporate_title: 'Corporate Offices',
    client_corporate_desc: 'End-to-end office and sanitary supplies with single-vendor convenience.',
    packages_title: 'Special Packages',
    packages_subtitle: 'Combined supply packages designed for your workflow',
    pkg_1_title: 'Bank & Office Package',
    pkg_1_desc: 'Monthly stationery + housekeeping supplies in one combined delivery with a single invoice.',
    pkg_2_title: 'Car Showroom Package',
    pkg_2_desc: 'Party poppers, balloons, ribbons, plus stationery and cleaning supplies — all in one delivery for car delivery events.',
    how_title: 'How It Works',
    how_subtitle: 'Getting your supplies is simple',
    how_1: 'Send Your List',
    how_1_desc: 'Share your item list via the quote form or WhatsApp.',
    how_2: 'Get Quotation',
    how_2_desc: 'We send you a detailed quotation quickly.',
    how_3: 'Confirm Order',
    how_3_desc: 'Approve the quote and confirm your order.',
    how_4: 'Delivery',
    how_4_desc: 'We deliver to your office or showroom in Vijayawada.',
    quote_title: 'Request a Quote',
    quote_subtitle: 'Send us your requirements and we\'ll get back to you quickly',
    form_name: 'Your Name',
    form_organisation: 'Organisation',
    form_phone: 'Phone Number',
    form_email: 'Email (optional)',
    form_items: 'Items Needed',
    form_date: 'Preferred Delivery Date',
    form_submit: 'Submit Request',
    form_success: 'Thank you! Your quote request has been received. We\'ll contact you shortly.',
    form_error: 'Something went wrong. Please try again or WhatsApp us directly.',
    app_title: 'Download Our App',
    app_subtitle: 'Order on the go with the Bezawada Basket mobile app',
    contact_title: 'Get in Touch',
    contact_subtitle: 'We\'re here to help with all your supply needs',
    contact_phone: 'Call Us',
    contact_email: 'Email Us',
    contact_address: 'Visit Us',
    footer_about: 'Your one-stop solution for office stationery, sanitary items, and party supplies in Vijayawada.',
    footer_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    footer_gst: 'GST No: 37AFNFS0764B1ZX',
    contact_cofounder: 'Co-Founder',
    download_catalogue: 'Download Catalogue (PDF)',
  },
  te: {
    nav_home: 'హోమ్',
    nav_categories: 'వర్గాలు',
    nav_catalogue: 'క్యాటలాగ్',
    nav_clients: 'క్లయింట్లు',
    nav_packages: 'ప్యాకేజీలు',
    nav_how: 'ఎలా పనిచేస్తుంది',
    nav_quote: 'కోట్ పొందండి',
    nav_contact: 'సంప్రదించండి',
    hero_badge: 'బెజవాడ బాస్కెట్',
    hero_title: 'శ్రీంధు ఎంటర్‌ప్రైజెస్',
    hero_tagline: 'మీ రోజువారీ అవసరాలు, డెలివరీ చేయబడతాయి',
    hero_delivery: 'విజయవాడ అంతటా డెలివరీ',
    hero_stat_branches: 'బ్యాంక్ శాఖలు & కార్యాలయాలు',
    hero_stat_showrooms: 'కార్ షోరూమ్‌లు',
    hero_stat_delivery: 'స్థానిక డెలివరీ',
    hero_quote_btn: 'కోట్ అభ్యర్థించండి',
    hero_whatsapp_btn: 'వాట్సాప్ చేయండి',
    why_title: 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి',
    why_subtitle: 'మీ ఆఫీస్, పారిశుద్ధ్య, వేడుకల అవసరాలన్నింటికీ ఒకే విశ్వసనీయ భాగస్వామి',
    why_1_title: 'ఒక వెండర్, ఒక ఇన్వాయిస్',
    why_1_desc: 'స్టేషనరీ, పారిశుద్ధ్య, పార్టీ వస్తువులు ఒకే సరఫరాదారు నుండి — ఒక డెలివరీ, ఒక బిల్లు.',
    why_2_title: 'విస్తృత ఉత్పత్తుల శ్రేణి',
    why_2_desc: 'స్టేషనరీ, క్లీనింగ్, డిస్పోజబుల్, కంప్యూటర్ యాక్ససరీస్, పార్టీ సప్లైస్.',
    why_3_title: 'నాణ్యత హామీ',
    why_3_desc: 'మీ ఆఫీస్ మరియు షోరూమ్ ఎల్లప్పుడూ ప్రొఫెషనల్‌గా కనిపించేలా నమ్మకమైన బ్రాండ్‌లు.',
    why_4_title: 'విశ్వసనీయ సేవ',
    why_4_desc: 'ఏ పరిమాణంలోనైనా నిలకడైన సరఫరా మరియు స్పందనాశీల మద్దతు.',
    why_5_title: 'వేగవంతమైన స్థానిక డెలివరీ',
    why_5_desc: 'విజయవాడలో ఎక్కడైనా త్వరిత డెలివరీ.',
    why_6_title: 'బల్క్ & నెలవారీ సరఫరా',
    why_6_desc: 'బ్యాంకులు, ప్రభుత్వ కార్యాలయాలకు రెగ్యులర్ నెలవారీ సరఫరా.',
    why_7_title: 'షోరూమ్-రెడీ',
    why_7_desc: 'కార్ డెలివరీ రోజుల కోసం పార్టీ పాపర్స్, బెలూన్లు, డెకరేషన్లు.',
    categories_title: 'మా వర్గాలు',
    categories_subtitle: 'మీ సంస్థకు కావలసినవన్నీ ఒకేచోట',
    cat_1_title: 'ఆఫీస్ స్టేషనరీ & ఎసెన్షియల్స్',
    cat_1_desc: 'పేపర్, ఫైళ్లు, పెన్స్, డెస్క్ సప్లైస్, బైండింగ్, స్టాంపింగ్',
    cat_2_title: 'క్లీనింగ్ వస్తువులు',
    cat_2_desc: 'క్లీనింగ్ ఏజెంట్లు, మాప్స్, బ్రష్‌లు, డిటర్జెంట్లు',
    cat_3_title: 'పార్టీ & డెకరేషన్ వస్తువులు',
    cat_3_desc: 'పాపర్స్, బెలూన్లు, బ్యానర్లు, రిబ్బన్లు, డెకరేషన్లు',
    cat_4_title: 'డిస్పోజబుల్స్ & పేపర్ ప్రొడక్ట్స్',
    cat_4_desc: 'టిష్యూలు, పేపర్ కప్పులు, ప్లేట్లు, నాప్కిన్లు, గార్బేజ్ బ్యాగ్‌లు',
    cat_5_title: 'కంప్యూటర్ & ప్రింటర్ యాక్ససరీస్',
    cat_5_desc: 'కీబోర్డ్‌లు, మౌస్, పెన్ డ్రైవ్‌లు, టోనర్‌లు, కార్ట్రిడ్జ్‌లు',
    catalogue_title: 'ప్రొడక్ట్ క్యాటలాగ్',
    catalogue_subtitle: 'మా పూర్తి శ్రేణిని బ్రౌజ్ చేయండి — ఏ వర్గాన్నైనా విస్తరించడానికి ట్యాప్ చేయండి',
    catalogue_note: 'మేము ఇక్కడ జాబితా చేయని ఏ వస్తువునైనా మీ అవసరానికి అమర్చుతాము.',
    cat_tab_stationery: 'స్టేషనరీ',
    cat_tab_sanitary: 'పారిశుద్ధ్య',
    cat_tab_party: 'పార్టీ & డెకరేషన్',
    clients_title: 'మేము ఎవరికి సేవ చేస్తాము',
    clients_subtitle: 'విజయవాడలోని సంస్థల నుండి విశ్వసించబడినది',
    client_banks_title: 'బ్యాంకులు',
    client_banks_desc: 'నెలవారీ స్టేషనరీ మరియు హౌస్ కీపింగ్ సప్లైస్.',
    client_gov_title: 'ప్రభుత్వ కార్యాలయాలు',
    client_gov_desc: 'ఫైళ్లు, పేపర్, క్లీనింగ్ మెటీరియల్ నమ్మకమైన సరఫరా.',
    client_showroom_title: 'కార్ షోరూమ్‌లు',
    client_showroom_desc: 'మీ షోరూమ్‌కు కావలసినవన్నీ ఒకే ఆర్డర్‌లో.',
    client_showroom_highlight:
      'మీ షోరూమ్‌కు కావలసినవన్నీ ఒకే ఆర్డర్‌లో: ఆఫీస్ స్టేషనరీ, హౌస్ కీపింగ్ మరియు క్లీనింగ్ సప్లైస్, కార్ డెలివరీ వేడుకల కోసం పార్టీ మరియు సెలబ్రేషన్ వస్తువులు.',
    client_corporate_title: 'కార్పొరేట్ ఆఫీసులు',
    client_corporate_desc: 'సింగల్-వెండర్ సౌకర్యంతో ఆఫీస్ మరియు పారిశుద్ధ్య సప్లైస్.',
    packages_title: 'స్పెషల్ ప్యాకేజీలు',
    packages_subtitle: 'మీ వర్క్‌ఫ్లో కోసం రూపొందించిన కంబైన్డ్ సప్లై ప్యాకేజీలు',
    pkg_1_title: 'బ్యాంక్ & ఆఫీస్ ప్యాకేజీ',
    pkg_1_desc: 'నెలవారీ స్టేషనరీ + హౌస్ కీపింగ్ సప్లైస్ ఒకే డెలివరీలో.',
    pkg_2_title: 'కార్ షోరూమ్ ప్యాకేజీ',
    pkg_2_desc: 'పార్టీ పాపర్స్, బెలూన్లు, రిబ్బన్లు, స్టేషనరీ మరియు క్లీనింగ్ సప్లైస్ — అన్నీ ఒకే డెలివరీలో.',
    how_title: 'ఎలా పనిచేస్తుంది',
    how_subtitle: 'మీ సప్లైస్ పొందడం సులభం',
    how_1: 'మీ జాబితా పంపండి',
    how_1_desc: 'కోట్ ఫారమ్ లేదా వాట్సాప్ ద్వారా మీ వస్తువుల జాబితాను పంపండి.',
    how_2: 'క్వోటేషన్ పొందండి',
    how_2_desc: 'మేము మీకు త్వరగా వివరణాత్మక క్వోటేషన్ పంపుతాము.',
    how_3: 'ఆర్డర్ నిర్ధారించండి',
    how_3_desc: 'కోట్‌ను ఆమోదించండి మరియు ఆర్డర్ నిర్ధారించండి.',
    how_4: 'డెలివరీ',
    how_4_desc: 'మేము మీ ఆఫీస్ లేదా షోరూమ్‌కు డెలివరీ చేస్తాము.',
    quote_title: 'కోట్ అభ్యర్థించండి',
    quote_subtitle: 'మీ అవసరాలను పంపండి, మేము త్వరగా సంప్రదిస్తాము',
    form_name: 'మీ పేరు',
    form_organisation: 'సంస్థ',
    form_phone: 'ఫోన్ నంబర్',
    form_email: 'ఇమెయిల్ (ఐచ్ఛికం)',
    form_items: 'కావలసిన వస్తువులు',
    form_date: 'ప్రాధాన్య డెలివరీ తేదీ',
    form_submit: 'అభ్యర్థన సమర్పించండి',
    form_success: 'ధన్యవాదాలు! మీ కోట్ అభ్యర్థన స్వీకరించబడింది.',
    form_error: 'ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    app_title: 'మా యాప్ డౌన్‌లోడ్ చేయండి',
    app_subtitle: 'బెజవాడ బాస్కెట్ మొబైల్ యాప్‌తో ఆన్-ది-గో ఆర్డర్ చేయండి',
    contact_title: 'సంప్రదించండి',
    contact_subtitle: 'మీ అవసరాలకు సహాయం చేయడానికి మేము ఇక్కడ ఉన్నాము',
    contact_phone: 'కాల్ చేయండి',
    contact_email: 'ఇమెయిల్ చేయండి',
    contact_address: 'సందర్శించండి',
    footer_about: 'విజయవాడలో ఆఫీస్ స్టేషనరీ, పారిశుద్ధ్య వస్తువులు, పార్టీ సప్లైస్ కోసం మీ వన్-స్టాప్ సొల్యూషన్.',
    footer_links: 'క్విక్ లింకులు',
    footer_contact: 'సంప్రదించండి',
    footer_rights: 'హక్కులు అన్నీ రిజర్వ్ చేయబడ్డాయి.',
    footer_gst: 'GST నంబర్: 37AFNFS0764B1ZX',
    contact_cofounder: 'సహ వ్యవస్థాపకులు',
    download_catalogue: 'క్యాటలాగ్ డౌన్‌లోడ్ (PDF)',
  },
};
