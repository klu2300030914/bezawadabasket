export const BUSINESS = {
  name: 'Srindhu Enterprises',
  brand: 'Bezawada Basket',
  tagline: 'Your Everyday Needs, Delivered',
  phone: '86886 58358',
  phoneRaw: '918688658358',
  email: 'srindhuenterprises@gmail.com',
  address: '13-7/343-3, Kamayyathopu, Kanuru, Vijayawada, 520007',
  gst: '37AFNFS0764B1ZX',
  founder: 'V Sai Vivek',
  cofounder: 'V Sai Shanmukh',
  whatsappLink:
    'https://wa.me/918688658358?text=Hello%20Srindhu%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20supplies.',
  mapsEmbed:
    'https://www.google.com/maps?q=Kanuru,Vijayawada&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Kanuru+Vijayawada',
};

export type CatalogueCategory = {
  name: string;
  items: string[];
};

export type CatalogueTab = {
  key: 'stationery' | 'sanitary' | 'party';
  categories: CatalogueCategory[];
};

export const catalogue: CatalogueTab[] = [
  {
    key: 'stationery',
    categories: [
      {
        name: 'Paper & Files',
        items: [
          'White Paper (A4)',
          'White Paper (Legal)',
          'Ledgers',
          'PPO Covers',
          'Court Order Files / Lace Files',
          'Box Files',
          'File Folders',
          'Envelopes',
        ],
      },
      {
        name: 'Writing Instruments',
        items: [
          'Pens',
          'Ballpoint Pens',
          'Gel Pens',
          'Use & Throw Pens',
          'Sketch Pens',
          'Pencils',
          'Highlighters',
          'Permanent Markers',
          'Whiteboard Markers',
        ],
      },
      {
        name: 'Desk Essentials',
        items: [
          'Staplers',
          'Stapler Pins',
          'Punching Machines',
          'Scissors',
          'Cutters',
          'Erasers',
          'Sharpeners',
          'Pins',
          'Sticky Notes',
          'Paper Clips',
          'Binder Clips',
        ],
      },
      {
        name: 'Adhesives & Tapes',
        items: [
          'Glue Sticks',
          'Fevicol / Gum Bottles',
          'Gum Tubes',
          'Cellotape (Brown)',
          'Cellotape (Transparent)',
        ],
      },
      {
        name: 'Binding & Stamping',
        items: [
          'Coil Binding Wire',
          'Stamp Pads',
          'Stamp Ink',
          'Ink Bottles',
          'Date Stamps',
          'Number Stamps',
        ],
      },
      {
        name: 'Computer & Printer Accessories',
        items: [
          'Keyboards',
          'Mouse',
          'Mouse Pads',
          'Speakers',
          'Pen Drives',
          'Printer Toner',
          'Printer Cartridges',
        ],
      },
    ],
  },
  {
    key: 'sanitary',
    categories: [
      {
        name: 'Cleaning Agents',
        items: [
          'Toilet Cleaner',
          'Floor Cleaner',
          'Disinfectant',
          'Hand Wash',
          'Dish Wash',
          'Glass Cleaner',
          'Detergent Powder',
          'Phenyl',
        ],
      },
      {
        name: 'Cleaning Accessories',
        items: [
          'Cotton Mops',
          'Microfiber Mops',
          'Toilet Brush',
          'Floor Brush',
          'Plastic Buckets',
          'Wipers',
          'Scrub Pads',
          'Sponges',
        ],
      },
      {
        name: 'Tissues & Disposables',
        items: [
          'Tissue Boxes',
          'Toilet Rolls',
          'Kitchen Towel Rolls',
          'Paper Napkins',
          'Paper Plates',
          'Paper Cups',
          'Plastic Glasses',
        ],
      },
      {
        name: 'Waste Management',
        items: [
          'Dustbins',
          'Pedal Dustbins',
          'Garbage Bags',
          'Bio-degradable Bags',
          'Bin Liners',
        ],
      },
      {
        name: 'Kitchen & Dining Utilities',
        items: [
          'Water Bottles',
          'Food Containers',
          'Stainless Steel Glasses',
          'Stainless Steel Plates',
          'Spoons / Forks',
          'Salt & Pepper Sets',
        ],
      },
    ],
  },
  {
    key: 'party',
    categories: [
      {
        name: 'Party & Decoration',
        items: [
          'Party Poppers',
          'Balloons',
          'Streamers & Foil Curtains',
          'Banners',
          'Confetti',
          'Party Hats',
          'Ribbons & Gift Wrapping',
          'Candles',
          'Decoration Items for Celebrations',
          'Car Delivery Event Supplies',
        ],
      },
    ],
  },
];
