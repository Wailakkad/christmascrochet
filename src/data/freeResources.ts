export type FreeResourceHeroMetaKey = 'timer' | 'printer' | 'scissors' | 'star' | 'gauge' | 'layers';

export interface FreeResourceHeroMetaItem {
  icon: FreeResourceHeroMetaKey;
  label: string;
}

export interface FreeResourceSection {
  badge: string;
  image: string;
  imageAlt: string;
  titleLead: string;
  titleAccent: string;
  paragraphs: string[];
  points: string[];
}

export interface FreeResource {
  slug: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Optional dedicated image for the "how it works" band. */
  howItWorksImage?: string;
  /** Render images at their natural size instead of a fixed crop. */
  naturalImages?: boolean;
  pdfUrl: string;
  pdfFilename: string;
  fileSize: string;
  /** Canonical path when this resource already has its own landing page. */
  legacyPath?: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitleLead: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroMeta: FreeResourceHeroMetaItem[];
  inside: FreeResourceSection;
  maker: FreeResourceSection;
  ctaTitle: string;
  ctaText: string;
}

export const freeResources: FreeResource[] = [
  {
    slug: 'christmas-characters-blanket',
    title: 'Christmas Characters Crochet Blanket Pattern',
    badge: 'Blanket Pattern',
    description:
      'Stitch a playful cast of holiday characters into one cosy throw — panels of Santa, snowmen and gingerbread friends built from simple squares.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791740268/hero_first_image.jpg',
    imageAlt: 'Handmade Christmas characters crochet blanket with festive motifs, one square at a time',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791740267/therty_3_image.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Christmas%20Characters%20Crochet%20Blanket%20Pattern.pdf',
    pdfFilename: 'Free-Christmas-Characters-Crochet-Blanket-Pattern.pdf',
    fileSize: '2.1 MB',
    metaTitle: 'Free Christmas Characters Crochet Blanket Pattern PDF',
    metaDescription:
      'Download the free Christmas characters crochet blanket pattern PDF — Santa, snowman and gingerbread squares with join-as-you-go instructions and colour charts.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Crochet a Christmas Characters Blanket',
    heroTitleAccent: 'one square at a time',
    heroIntro:
      'A character-filled holiday throw made from friendly little squares. Work each motif flat, join as you go, and finish with a blanket the whole family fights over every December. Pop your email in and the PDF downloads instantly.',
    heroMeta: [
      { icon: 'timer', label: 'Weekend-friendly project' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'layers', label: 'Join-as-you-go squares' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791740268/second_img.jpg',
      imageAlt: 'Inside the Christmas characters blanket PDF — charts, photos and written rounds',
      titleLead: 'A full pattern, charted and photographed,',
      titleAccent: 'in one tidy PDF',
      paragraphs: [
        'No ads to scroll past and no jumping between five different pages. The PDF opens with a materials list you can shop straight from your stash, then walks through every character square with stitch counts and close-up photos.',
        'Print it, prop it next to your hook and work through a square at a time with a cup of cocoa — the layout is built for exactly that.',
      ],
      points: [
        'Materials list with yardage for every character colourway',
        'Written rounds for each motif plus a join-as-you-go method',
        'Colour charts for Santa, snowman, reindeer and gingerbread faces',
        'Photo walkthrough for the fiddly details (arms, noses, beards)',
        'Sizing chart from cot throw up to a king-size afghan',
      ],
    },
    maker: {
      badge: 'Beginner friendly',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791740267/last_image.jpg',
      imageAlt: 'Close-up of simple Christmas character crochet squares worked in festive colours',
      titleLead: 'Simple shapes, big personality,',
      titleAccent: 'and no fiddly colourwork',
      paragraphs: [
        'If you can single crochet and change colour at the end of a round, you can make every square in this blanket. The faces are surface details, not tapestry — so the fabric stays soft and squishy.',
        'Each square is a short, satisfying sitting, which makes this the perfect project for the gaps between wrapping presents and school runs.',
      ],
      points: [
        'Worsted weight acrylic and a 5mm hook keep it budget friendly',
        'Each character square works up in roughly 25 minutes',
        'Left and right handed notes for the face details',
        'Blocking guide so squares lay flat before joining',
        'Yarn substitution chart for DK and chunky weights',
      ],
    },
    ctaTitle: 'Ready to start your character blanket?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just a cosy project waiting on your hook.',
  },
  {
    slug: 'christmas-stocking',
    title: 'Free Crochet Christmas Stocking Pattern',
    badge: 'Stocking Pattern',
    description:
      'A classic crochet Christmas stocking with a sturdy cuff, a clean colourwork stripe and a hanging loop that survives years on the mantel.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741061/Image_1_HERO.jpg',
    imageAlt: 'Handmade crochet Christmas stocking hanging by the mantel in festive colours',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741057/Image_3_DETAIL.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Crochet%20Christmas%20Stocking%20Pattern.pdf',
    pdfFilename: 'Free-Crochet-Christmas-Stocking-Pattern.pdf',
    fileSize: '129 KB',
    metaTitle: 'Free Crochet Christmas Stocking Pattern PDF',
    metaDescription:
      'Download the free crochet Christmas stocking pattern PDF — a classic cuff-down stocking with a sturdy heel, hanging loop and finished size chart.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Crochet a Christmas Stocking',
    heroTitleAccent: 'that lasts for decades',
    heroIntro:
      'A free printable stocking pattern worked from the cuff down in worsted yarn — firm enough to hold a fistful of treats without sagging off the mantel. Enter your email and it downloads in seconds.',
    heroMeta: [
      { icon: 'timer', label: 'One evening project' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'scissors', label: 'Stash-buster friendly' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741057/Image_4_DIGITAL.jpg',
      imageAlt: 'Inside the Christmas stocking PDF — gauge guide, heel photos and written rounds',
      titleLead: 'Everything you need for a stocking',
      titleAccent: 'worth hanging up',
      paragraphs: [
        'The PDF starts with gauge and finished measurements so you know exactly how big your stocking will be, then moves cuff-first through the leg, heel and toe with photos at every turn.',
        'A printable checklist lets you track your rounds — handy when the phone rings mid-heel.',
      ],
      points: [
        'Gauge swatch guide and finished size chart (up to 18" tall)',
        'Ribbed cuff instructions with two cuff styles to choose from',
        'Colour stripe chart plus a plain version for solid yarn',
        'Photo tutorial for the heel turn — the part everyone pauses on',
        'Reinforced hanging loop and optional fabric lining tips',
      ],
    },
    maker: {
      badge: 'Beginner friendly',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741058/Image_2_OUTCOME.jpg',
      imageAlt: 'Finished crochet Christmas stocking with a sturdy cuff and clean colourwork stripe',
      titleLead: 'A first stocking you will',
      titleAccent: 'actually be proud of',
      paragraphs: [
        'You only need chain, single crochet, half double crochet and a little patience for the heel. Every round is numbered, so you always know where you are and what comes next.',
        'One stocking takes about four hours — small enough to finish before Christmas Eve, sturdy enough to become the one everyone asks for.',
      ],
      points: [
        'Worsted weight yarn and a 4.5mm hook, worked flat and seamed',
        'Plain and striped versions from the same pattern',
        'Yarn substitution notes for acrylic, wool and cotton blends',
        'Stiffening tips if you want your stocking to hold its shape',
        'Extra-large and mini sizing variations included',
      ],
    },
    ctaTitle: 'Ready to hang a handmade stocking?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just a quiet evening with your hook.',
  },
  {
    slug: 'santa-hat-and-beard',
    title: 'Free Crochet Santa Hat and Beard Pattern',
    badge: 'Wearable Pattern',
    description:
      'A crochet Santa hat with a matching beard and pompom nose — the full costume set for photo booths, office parties and Christmas morning.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741595/Crochet_a_Santa_Hat_Image_1.jpg',
    imageAlt: 'Crochet Santa hat with a white brim and pompom, ready for the party',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741594/Image_4_Crochet_a_Santa_Hat.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Crochet%20Santa%20Hat%20and%20Beard%20Pattern.pdf',
    pdfFilename: 'Free-Crochet-Santa-Hat-and-Beard-Pattern.pdf',
    fileSize: '237 KB',
    metaTitle: 'Free Crochet Santa Hat and Beard Pattern PDF',
    metaDescription:
      'Download the free crochet Santa hat and beard pattern PDF — a festive hat, fluffy beard and pompom nose sized for adults, with photo instructions.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Crochet a Santa Hat & Beard',
    heroTitleAccent: 'in one sitting',
    heroIntro:
      'The full Santa kit in one PDF: a classic red hat with a white brim, a soft crocheted beard and a pompom nose that sits just right. Enter your email and print it out before the party starts.',
    heroMeta: [
      { icon: 'timer', label: 'Ready in an evening' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'star', label: 'Photo-booth favourite' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741596/Crochet_a_Santa_Hat_Image_2.jpg',
      imageAlt: 'Inside the Santa hat and beard PDF — hat, beard and pompom nose patterns',
      titleLead: 'Three pieces, one PDF,',
      titleAccent: 'one very convincing Santa',
      paragraphs: [
        'The guide covers the hat, the beard and the nose as separate short patterns, so you can make the lot in an evening or spread it over a weekend.',
        'Assembly diagrams show exactly where each piece attaches, which is what separates a costume from a pile of crochet.',
      ],
      points: [
        'Adult hat sizing with stretch guidance for larger heads',
        'Beard pattern with moustache and sideburn placement guide',
        'Pompom nose tutorial that does not require a pompom maker',
        'Photos for attaching and hiding every yarn end',
        'Extra notes for long hair and glasses wearers',
      ],
    },
    maker: {
      badge: 'Party-ready',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791741595/Image_3_Crochet_a_Santa_Hat.jpg',
      imageAlt: 'Crochet Santa hat and beard set worn for a festive photo',
      titleLead: 'Quick to stitch,',
      titleAccent: 'impossible not to smile at',
      paragraphs: [
        'Everything is worked in bulky red and white, so it works up fast and still feels soft against the face. No colourwork charts — just simple rounds and a few surface details.',
        'Make one for yourself, then one for every guest who shows up in a jumpers-and-mince-pies mood.',
      ],
      points: [
        'Bulky weight yarn and a 6mm hook for speedy rounds',
        'One size with a stretchy brim, plus tightening ties',
        'Gentle beard construction that will not pull at the skin',
        'Machine-washable yarn notes for repeat festive use',
        'Kid-size adaptation notes included',
      ],
    },
    ctaTitle: 'Ready to become Santa for a night?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just needles off and beard on.',
  },
  {
    slug: 'toddler-santa-hat',
    title: 'Free Crochet Toddler Santa Hat Pattern',
    badge: 'Kids Pattern',
    description:
      'A soft, stretchy toddler Santa hat sized for little heads, with a gentle brim that stays put and a pompom that will not fall off.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742270/Crochet_a_Toddler_Santa_Hat_img_1.jpg',
    imageAlt: 'Soft crochet toddler Santa hat with a secure pompom on a little head',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742268/Crochet_a_Toddler_Santa_Hat_img_4.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Crochet%20Toddler%20Santa%20Hat%20Pattern.pdf',
    pdfFilename: 'Free-Crochet-Toddler-Santa-Hat-Pattern.pdf',
    fileSize: '207 KB',
    metaTitle: 'Free Crochet Toddler Santa Hat Pattern PDF',
    metaDescription:
      'Download the free crochet toddler Santa hat pattern PDF — a soft stretchy Santa hat sized for ages 1 to 3 with a secure pompom and gentle brim.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Crochet a Toddler Santa Hat',
    heroTitleAccent: 'that actually stays on',
    heroIntro:
      'A little Santa hat sized for small heads and big feelings — soft brim, gentle stretch and a pompom anchored so it survives the pram, the party and the nap afterwards. Pop your email in and the PDF is yours.',
    heroMeta: [
      { icon: 'timer', label: 'Quick weekend make' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'gauge', label: 'Sizes 1 to 3 years' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742270/Crochet_a_Toddler_Santa_Hat_img_2.jpg',
      imageAlt: 'Inside the toddler Santa hat PDF — two sizes, stretch chart and pompom guide',
      titleLead: 'A proper little hat,',
      titleAccent: 'sized for real toddler heads',
      paragraphs: [
        'The PDF includes two head-circumference sizes with a stretch chart, so you can match the hat to the child in front of you rather than a generic chart.',
        'The brim is worked in a soft rib that will not leave a mark, and every join is designed to sit away from the skin.',
      ],
      points: [
        'Two sizes: 12–17" head circumference (ages 1–3)',
        'Stretch guide so you can size up or down with confidence',
        'Secure pompom attachment that passes the tug test',
        'Soft brim options for sensory-sensitive toddlers',
        'Quick photo tutorial for the decreasing crown',
      ],
    },
    maker: {
      badge: 'Make in an hour',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742270/Crochet_a_Toddler_Santa_Hat_img_3.jpg',
      imageAlt: 'Finished crochet toddler Santa hat made in soft worsted yarn',
      titleLead: 'Soft yarn, few rounds,',
      titleAccent: 'one very photogenic toddler',
      paragraphs: [
        'Worked in soft worsted with a 5mm hook, this hat takes about an hour from first chain to pompom. It is the project to start when you want a handmade Christmas photo and have a nap window to work with.',
        'The pattern uses only chain, single crochet and half double crochet — perfect for a first wearable make.',
      ],
      points: [
        'Soft acrylic or merino blends recommended for sensitive skin',
        'One ball of red and a scrap of white is plenty',
        'Washable yarn notes for inevitable snack incidents',
        'Newborn and preschool size adjustment notes',
        'Matching adult hat tips to twinning for photos',
      ],
    },
    ctaTitle: 'Ready to make their first Santa hat?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just an hour and a nap window.',
  },
  {
    slug: 'holiday-ornaments-blanket',
    title: 'Free Holiday Ornaments Crochet Blanket Pattern',
    badge: 'Blanket Pattern',
    description:
      'A holiday ornaments blanket: a lattice of baubles, snowflakes and stars worked in a repeating motif that grows as big as you like.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742718/Crochet_a_Holiday_Ornaments_Blanket_img_1.jpg',
    imageAlt: 'Holiday ornaments crochet blanket with a lattice of baubles, snowflakes and stars',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742716/Crochet_a_Holiday_Ornaments_Blanket_img_4.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Holiday%20Ornaments%20Crochet%20Blanket%20Pattern.pdf',
    pdfFilename: 'Free-Holiday-Ornaments-Crochet-Blanket-Pattern.pdf',
    fileSize: '568 KB',
    metaTitle: 'Free Holiday Ornaments Crochet Blanket Pattern PDF',
    metaDescription:
      'Download the free holiday ornaments crochet blanket pattern PDF — a repeating bauble, snowflake and star lattice that scales from lapghan to bed size.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Crochet a Holiday Ornaments Blanket',
    heroTitleAccent: 'row by gorgeous row',
    heroIntro:
      'A repeating lattice of baubles, snowflakes and stars that looks far more complicated than it is. Start with one repeat and keep going until the blanket is as big as your sofa demands. Enter your email and the PDF downloads instantly.',
    heroMeta: [
      { icon: 'timer', label: 'Relaxing repeat' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'layers', label: 'Modular motif rows' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742718/Crochet_a_Holiday_Ornaments_Blanket_img_3.jpg',
      imageAlt: 'Inside the holiday ornaments blanket PDF — stitch charts and repeat-based sizing',
      titleLead: 'One repeat, endless blankets,',
      titleAccent: 'and a chart for every size',
      paragraphs: [
        'Learn the ornament repeat once, then the PDF shows you how to scale it — lapghan, throw, bed size — with exact stitch counts for each.',
        'Charts and written instructions sit side by side, so you can follow whichever your brain prefers that evening.',
      ],
      points: [
        'Full stitch charts plus line-by-line written instructions',
        'Repeat-based sizing: lapghan, throw and bed-size counts',
        'Three colourway palettes with yarn substitution notes',
        'Border patterns that frame the lattice cleanly',
        'Blocking guide to open up the ornament motifs',
      ],
    },
    maker: {
      badge: 'Meditative crochet',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791742717/Crochet_a_Holiday_Ornaments_Blanket_img_2.jpg',
      imageAlt: 'Finished holiday ornaments blanket draped over a cosy sofa',
      titleLead: 'A pattern you can learn',
      titleAccent: 'and then stop reading',
      paragraphs: [
        'Once the repeat clicks, this becomes the project you can work while watching the holiday films. The motif is rhythmic rather than fiddly, and every row reveals a little more of the lattice.',
        'It also makes a brilliant gift blanket — pick a palette, set a size, and you are done deciding anything else.',
      ],
      points: [
        'Worsted weight yarn with a 5mm hook for a warm drape',
        'Each ornament repeat takes about ten minutes',
        'Scrap-friendly: the lattice loves small quantities of colour',
        'Gauge notes for lighter DK versions',
        'Gift sizing guide with wrapping-friendly dimensions',
      ],
    },
    ctaTitle: 'Ready to work the ornament lattice?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just a hook and a repeating pattern.',
  },
  {
    slug: 'knit-cable-stocking',
    title: 'Free Knit Cable Stocking Pattern',
    badge: 'Cable Pattern',
    description:
      'A knitted cable stocking with a braided cable panel and a thick ribbed cuff — the heirloom-looking knit stocking, free to print.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791743033/Desk_showing_knitting_pattern_la__2K_20261011172310.jpg',
    imageAlt: 'Desk laid out with a knitting pattern, cables and yarn for a Christmas stocking',
    howItWorksImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791743041/Knit_a_Cable_Stocking_img_2.jpg',
    naturalImages: true,
    pdfUrl: '/Free%20Knit%20Cable%20Stocking%20Pattern.pdf',
    pdfFilename: 'Free-Knit-Cable-Stocking-Pattern.pdf',
    fileSize: '144 KB',
    metaTitle: 'Free Knit Cable Stocking Pattern PDF',
    metaDescription:
      'Download the free knit cable stocking pattern PDF — a classic cable-panel Christmas stocking with ribbed cuff, photo cable guide and size chart.',
    heroEyebrow: 'Free printable pattern',
    heroTitleLead: 'Knit a Cable Stocking',
    heroTitleAccent: 'with a proper braided cable',
    heroIntro:
      'A knitted Christmas stocking with a deep ribbed cuff and a braided cable running the length of the leg — the one that looks like it came from a department store window. Enter your email and the free PDF is yours.',
    heroMeta: [
      { icon: 'timer', label: 'A satisfying weekend knit' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'star', label: 'Heirloom cable panel' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791743164/Knit_a_Cable_Stocking_img_1.jpg',
      imageAlt: 'Inside the knit cable stocking PDF — cable charts and written rounds',
      titleLead: 'Cable charts, cuff options,',
      titleAccent: 'and a heel that behaves',
      paragraphs: [
        'The PDF gives you the cable chart and a written version of every round, so you can knit from the chart or the line — whichever you trust at 10pm.',
        'The heel is worked with a reinforced stitch guide, because stockings get pulled every single year.',
      ],
      points: [
        'Braided cable chart with written round-by-round backup',
        'Deep ribbed cuff with two heights to choose from',
        'Reinforced heel and toe guidance for yearly use',
        'Finished measurements and blocking notes',
        'Hanging loop instructions that will not pull the fabric',
      ],
    },
    maker: {
      badge: 'For confident beginners',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791743044/Knit_a_Cable_Stocking_img_3.jpg',
      imageAlt: 'Finished knit cable Christmas stocking with a braided cable panel and ribbed cuff',
      titleLead: 'Your first cable,',
      titleAccent: 'and it will not be your last',
      paragraphs: [
        'If you can knit and purl, you can cable this stocking. The panel uses one repeat of a classic braid, and the PDF includes a photo tutorial for the first crossing row.',
        'Worked on straight needles and seamed, so there is no double-pointed needle juggling involved.',
      ],
      points: [
        'Aran weight yarn and 4.5mm needles, worked flat',
        'Photo tutorial for your first cable cross',
        'Stitch marker placement guide for keeping the panel centred',
        'Yarn substitution notes for wool, acrylic and blends',
        'Mini stocking variation from the same chart',
      ],
    },
    ctaTitle: 'Ready to knit your cable stocking?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting — just a cable needle and a quiet hour.',
  },
  {
    slug: 'christmas-tree-ornaments',
    title: '1-Hour Christmas Tree & 3 Ornaments',
    badge: 'Free Guide',
    description:
      'The original free guide: crochet a little Christmas tree plus three matching ornaments in about an hour, with row-by-row counts.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582609/Person_placing_crochet_ornament_2K_20261009204952.jpg',
    imageAlt: 'Person placing a handmade crochet ornament on a Christmas tree',
    pdfUrl: '/easy-1-hour-crochet-christmas-tree-3-ornaments.pdf',
    pdfFilename: 'Easy-1-Hour-Crochet-Christmas-Tree-and-3-Ornaments.pdf',
    fileSize: '15 MB',
    legacyPath: '/free-guide',
    metaTitle: 'Free Crochet Christmas Tree Pattern – 1-Hour Tree + 3 Ornaments PDF',
    metaDescription:
      'Grab the free PDF guide: crochet a Christmas tree and 3 matching ornaments in about one hour. Beginner-friendly, printable, instantly delivered to your inbox.',
    heroEyebrow: 'Free PDF guide',
    heroTitleLead: 'Crochet a Christmas Tree & 3 Ornaments',
    heroTitleAccent: 'in one hour',
    heroIntro:
      'A cosy, beginner-friendly pattern bundle with a little tree plus three matching ornaments — written in plain English with row-by-row counts, photos and a printable checklist.',
    heroMeta: [
      { icon: 'timer', label: 'Ready in ~1 hour' },
      { icon: 'printer', label: 'Print-friendly PDF' },
      { icon: 'scissors', label: 'Scrap-yarn friendly' },
    ],
    inside: {
      badge: "What's inside",
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582608/Crochet_kit_items_on_background_2K_20261009204948.jpg',
      imageAlt: 'Crochet kit items laid out on a cosy background',
      titleLead: 'Everything you need, tucked into',
      titleAccent: 'one tidy PDF',
      paragraphs: [
        'The guide opens with a materials list you can shop from your stash, then walks you through each piece with close-up photos and stitch counts.',
        'Print it, prop it next to your hook, and work through it with a cup of cocoa — the layout is made for that.',
      ],
      points: [
        'Full materials list with yardage for worsted and DK yarn',
        'Row-by-row written instructions plus a stitch abbreviation key',
        'Photos for the tricky rounds (no guesswork)',
        'Printable checklist so you can track each ornament',
        'Left-handed friendly notes included',
      ],
    },
    maker: {
      badge: 'Beginner friendly',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791582608/Hands_crocheting_candy_cane_coil_2K_20261009204944.jpg',
      imageAlt: 'Hands crocheting a candy cane coloured coil in festive yarn',
      titleLead: 'Made for first-timers, finished',
      titleAccent: 'before the carolers arrive',
      paragraphs: [
        'You only need a handful of basics: chain, single crochet, half double crochet and a little magic ring. If you can make a coaster, you can make this tree.',
        'Each step is numbered and short, so you can pick it up between wrapping presents, school runs or a holiday episode.',
      ],
      points: [
        'Works up with DK or worsted scrap yarn and a 4mm hook',
        'One sitting per piece — roughly 20 minutes each',
        'Includes a photo tutorial for the magic ring',
        'Gauge and finished sizes listed for every piece',
        'Troubleshooting page for the classic beginner wobbles',
      ],
    },
    ctaTitle: 'Ready to hook your own little tree?',
    ctaText:
      'Pop your email in and the PDF unlocks on the next click. No payment, no waiting, no catches — just a cosy evening with your hook.',
  },
];

export const featuredFreeResource = freeResources[0];

export function getFreeResourceBySlug(slug?: string): FreeResource | undefined {
  if (!slug) return undefined;
  return freeResources.find((r) => r.slug === slug);
}

export function resourcePath(resource: FreeResource): string {
  return resource.legacyPath ?? `/free-resources/${resource.slug}`;
}
