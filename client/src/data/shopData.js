const SHOP_DATA = [
    {
        id: 1,
        title: 'Mens',
        routeName: '/mens',
        items: [
            {
                id: 1,
                name: 'Sauvage',
                brand: 'DIOR',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FDIOR-Sauvage-Eau-de-Parfum-Spray.png?alt=media&token=da36eea6-7ac2-4b3e-ba7d-b1223272d60f',
                bio: 'The powerful freshness of Sauvage reveals new sensual and mysterious facets, revealed from a new side in an unmistakable, masterful composition. Juicy and sparkling as ever, the bergamot from Calabria combines with new spicy notes to add fullness and sensuality, while the smoky accents of vanilla absolute from Papua New Guinea wrap the woody ambergris scent of Ambroxan® to underline its masculinity.',
                prices: {
                    60: 73.95,
                    100: 105.95,
                    200: 130.95
                }
            },
            {
                id: 2,
                name: '1 Million',
                brand: 'Paco Rabanne',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FPaco-Rabanne-1-Million-Eau-de-Toilette-Spray.png?alt=media&token=bd902568-e40e-485a-9b32-5ca342c3504e',
                bio: '1 MILLION. The scent of success. Going for gold because decadence is thrilling. Not-so-gentle man. Elegant and impertinent in equal measure, an intoxicating, powerful blend that starts out fresh and moves onto a spicy leather accord. An arresting alchemy of full-on seduction.',
                prices: {
                    50: 43.95,
                    100: 61.95,
                }
            },
            {
                id: 3,
                name: 'Le Mâle',
                brand: 'Jean Paul Gaultier',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FJean-Paul-Gaultier-Le-Male-Eau-de-Toilette-Spray.png?alt=media&token=20b5b73d-7cb5-464e-9660-80d95cbca961',
                bio: 'Le Mâle, as virile as it is sexy, pays tribute to the mythical figure that has forever inspired Jean Paul Gaultier: the sailor. Le Mâle has an unconventional vision of masculinity. LAVENDER, referencing the familiar and reassuring smell of shaving soap, is enhanced with the sensuality of VANILLA. The power and freshness of mint.',
                prices: {
                    40: 35.95,
                    75: 48.95,
                    125: 77.95
                }
            },
            {
                id: 4,
                name: 'Dior Homme',
                brand: 'DIOR',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FDIOR-Dior-Homme-Eau-de-Parfum-Spray-Intense.png?alt=media&token=d2bdb675-35cb-466c-880f-5723120d11d2',
                bio: 'Wear a fragrance as you would a tuxedo...The final chapter in the Dior Homme fragrance trilogy is also the most audacious: Dior Homme Intense is an intense, sophisticated and sensual Eau de Parfum for the evening, created in a limited edition.',
                prices: {
                    50: 65.95,
                    100: 91.95,
                    150: 113.95
                }
            },
            {
                id: 5,
                name: 'Aventus',
                brand: 'Creed',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FCreed-Aventus-Eau-de-Parfum-Spray.png?alt=media&token=b223c491-e161-4b0b-a75a-01d6e582dd62',
                bio: 'Aventus is inspired by the dramatic life of a conqueror from a by-gone age... A ledge of glass and steel that floats freely between heaven and earth. AVENTUS is something extraordinary, an extremely masculine fragrance with fruity, mossy, woody accents- created for the heroes of the present day.',
                prices: {
                    50: 207.60,
                    100: 303.42
                }
            },
            {
                id: 6,
                name: 'Acqua di Giò Homme',
                brand: 'Armani',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FArmani-Acqua-di-Gio-Homme-Eau-de-Toilette-Spray.png?alt=media&token=1b617573-cfd9-4fa7-bb10-073c70dd7702',
                bio: 'Are you still hearing that song in your head that you couldn’t stop thinking about since this morning? That’s exactly what Armani’s Acqua di Giò Pour Homme is like. He makes a lasting impression and never lets her go again! Passionate and sensual. We are dreaming of far away places and hidden bays in the South Sea.',
                prices: {
                    30: 64.00,
                    50: 72.35,
                    100: 98.19,
                    200: 158.14
                }
            },
            {
                id: 7,
                name: 'Boss Bottled',
                brand: 'Hugo Boss',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FHugo-Boss-BOSS-Bottled-Eau-de-Toilette-Spray.png?alt=media&token=3012aa27-8a56-4096-b5d1-61d5d03eab0c',
                bio: 'The stylish special edition flaçon is a real eye-catcher and a must-have product for the BOSS Bottled man! The signature fragrance by BOSS. Just as sensitive as it is confident. Made for men who redefine success. The fragrance contains fruity and zesty top notes consisting of citrus fruits combined with the sweetness of cinnamon and a really masculine base of sandalwood and vetiver.',
                prices: {
                    50: 73.39,
                    100: 96.13,
                    200: 134.37
                }
            },
            {
                id: 8,
                name: 'Spicebomb',
                brand: 'Viktor & Rolf',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FViktor-Rolf-Spicebomb-Extreme-Eau-de-Parfum-Spray.png?alt=media&token=8c7e5f8e-fe97-4172-b097-9c5d0f047e8b',
                bio: 'Spicebomb Extrême by Viktor & Rolf is a spicy, interesting mixture of black pepper, lavender, tobacco and cinnamon that’s even more long-lasting, even more seductive, even more sensual and even more intense than before. As always, Viktor & Rolf’s fragrance is a very explosive, exciting scent, which will develop irresistibly on you all day long and of course also be a perfect companion during an exciting night out.',
                prices: {
                    50: 77.52,
                    90: 107.50
                }
            },
            {
                id: 9,
                name: 'Boss The Scent',
                brand: 'Hugo Boss',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FHugo-Boss-BOSS-The-Scent-Eau-de-Toilette-Spray.png?alt=media&token=63ab5787-3509-450f-8475-d75e12e45753',
                bio: 'The Scent by Hugo Boss makes a lively yet extremely sensual first impression with the heat of ginger. The Maninka fruit, which is used as an aphrodisiac in Africa, elegantly unites with the fine flair of lavender. This combination envelops the skin in pure sensuality. The Maninka fruit, making its first appearance in a fragrance, is reminiscent of passion fruit and rum. ',
                prices: {
                    50: 79.59,
                    100: 106.46,
                    200: 142.64
                }
            },
            {
                id: 10,
                name: 'Fahrenheit',
                brand: 'DIOR',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FDIOR-Fahrenheit-Eau-de-Toilette-Spray.png?alt=media&token=ce5cfc1d-2e52-4e4c-bf68-5d8b5b8af4a9',
                bio: 'The original Fahrenheit is a revolutionary, modern fragrance containing top notes of mandarin, an innovative violet chord and a base consisting of warm cedar, patchouli and leather. It is a punchy and truly outstanding fragrance.',
                prices: {
                    50: 59.95,
                    100: 83.95,
                    200: 128.95
                }
            },
            {
                id: 11,
                name: 'Aoud',
                brand: 'Montale',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FMontale-Rose-Intense-Cafe-Eau-de-Parfum-Spray.png?alt=media&token=84306fd7-79df-4fed-ab18-db9267e5e721',
                bio: 'Intense Café is inspiring and spreads good cheer. What you think of when it comes to this Montale perfume will depend on individual associations and the moment. The Eau de Parfum from the Around the Rose collection is multidimensional and unfolds very different bouquets on the skin.',
                prices: {
                    100: 122.43
                }
            },
            {
                id: 12,
                name: 'Emporio Armani',
                brand: 'Armani',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FArmani-Emporio-Armani-Stronger-With-You-Intensely-Eau-de-Parfum-Spray.png?alt=media&token=edea7d79-f5ce-4a26-b957-10e6c36515dd',
                bio: 'Armani Stronger With You Eau de Parfum Spray from the Emporio Armani Fiori fragrance range skilfully combines oriental scents with aromatic spices and sweet accords.',
                prices: {
                    30: 62.02,
                    50: 72.35,
                    100: 101.29
                }
            },
            {
                id: 13,
                name: 'Invictus',
                brand: 'Paco Rabanne',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FPaco-Rabanne-Invictus-Eau-de-Toilette-Spray.png?alt=media&token=bdf6b28f-5852-4fc3-960b-7c4528ff76ad',
                bio: 'Invictus, the scent of victory the essence of heroes. Ecstatically addictive, a powerful adrenalin shot for serial winners. Power, courage, victory distilled into a daring smash-up of freshness and heat. When you’re in it to win. Invictus, ecstatically addictive, a powerful stimulant for serial winners.',
                prices: {
                    50: 53.95,
                    100: 70.95
                }
            },
            {
                id: 14,
                name: 'Oud Save The King',
                brand: 'Atkinsons',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FAtkinsons-Oud-Save-The-King-Eau-de-Parfum-Spray.png?alt=media&token=abf654ee-e805-4f6d-acd4-44376cac849c',
                bio: 'Oud Save the King by Atkinsons is a fragrance of eternal luxury. Here, fresh Earl Grey bergamot and noble iris combine with Zypriol. These form the majestic aura which is subsequently joined by leather nuances, gurjun balsam and beguiling noble woods, such as sandalwood and gaiac wood from Paraguay.',
                prices: {
                    100: 196.39
                }
            },
            {
                id: 15,
                name: 'Homme',
                brand: 'JOOP!',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FJOOP_-Homme-Eau-de-Toilette-Spray.png?alt=media&token=7a7640c5-d4a7-4fe7-8e1d-b66961d3e4ab',
                bio: 'An exciting fragrance for the straightforward and passionate man. A fragrance of floral, woody and exotic touches in harmony with bitter warm accents. The cool freshness of bergamot combines with the fire of the heart-top note of cinnamon, orange blossom and jasmine.',
                prices: {
                    75: 52.71,
                    125: 71.32,
                    200: 105.95
                }
            },
            {
                id: 16,
                name: 'Signature',
                brand: 'Bond No. 9',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FBond-No-9-Signature-Eau-de-Parfum-Spray.png?alt=media&token=86227b09-d233-47e2-96e3-ac3fcc38e0d0',
                bio: 'It is this unique contrast, this eclectic meeting of East and West, a melange of Dubai and New York, the opposition between ancient and modern, that captures the fascinating ambience of New York. This fragrance is so unbelievably seductive, so unbelievably erotic, a fragrance that Bond No. 9 first created as a pure perfume at a concentration of 30% (not the usual 20%). ',
                prices: {
                    100: 377.27
                }
            },
            {
                id: 17,
                name: 'CK one',
                brand: 'Calvin Klein',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FCalvin-Klein-ck-one-Eau-de-Toilette-Spray.png?alt=media&token=2d8167d8-9c57-4681-a412-4de2406e89f6',
                bio: 'Utterly limitless – With its crisp freshness, CK One by Calvin Klein captures the spirit of a young generation that boldly blurs the borders and breaks down barriers between peoples, age groups and sexes. CK One is intended for women and men who like to share – fragrances included.',
                prices: {
                    50: 36.18,
                    100: 51.68,
                    200: 72.35
                }
            },
            {
                id: 18,
                name: 'Cool Water',
                brand: 'Davidoff',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FDavidoff-Cool-Water-Eau-de-Toilette-Spray.png?alt=media&token=1aea51db-1ab1-4762-b50a-723b46d43497',
                bio: 'Freshness and dynamism - Cool Water from Davidoff is a fragrance that discreetly emphasises the character of a strong personality. The aromatic top note of this Eau de Toilette composed of the Provence note made up of lavender, rosemary and mint makes this a scent that is second to none.',
                prices: {
                    40: 37.21,
                    75: 50.65,
                    200: 74.42
                }
            },
            {
                id: 19,
                name: "L'Homme Prada",
                brand: 'Prada',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FPrada-LHomme-Prada-Eau-de-Toilette-Spray-1.png?alt=media&token=6bda46f8-f048-471e-ba82-7557af4f0c9d',
                bio: 'L’Homme Prada is a fragrance of pairs, of doubles, of juxtapositions and layers. The classic codes of the male Fougère are all present in Neroli, Geranium and Patchouli. Yet the interchangeable male/female Prada signatures are present, too, in the shape of Iris and Amber, the principal elements.',
                prices: {
                    50: 59.95,
                    100: 84.95,
                    150: 101.95
                }
            },
            {
                id: 20,
                name: 'Prada Luna Rossa',
                brand: 'Prada',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/mens%2FPrada-Prada-Luna-Rossa-Carbon-Eau-de-Toilette-Spray.png?alt=media&token=8be06ba4-8717-466f-b322-5c9def2ec344',
                bio: 'Luna Rossa Carbon, the new fragance for men from PRADA. Strong as the darkest rock, with the freshness of air, it brings together steam-distilled botanicals and synthetics in a mineral-forward mix: metallic notes of Lavender, green Citrus of Vert de Bergamote from Italy, radiant Wood of Patchouli and dry Amber of Ambroxan.',
                prices: {
                    50: 59.95,
                    100: 80.95,
                    150: 101.95
                }
            }
        ]
    },
    {
        id: 2,
        title: 'Womens',
        routeName: '/womens',
        items: [
            {
                id: 1,
                name: 'La Vie est Belle',
                brand: 'Lancôme',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FLancome-La-Vie-est-Belle-Eau-de-Parfum-Spray.png?alt=media&token=032773ab-3e44-413d-8da0-460c56f28210',
                bio: 'The La Vie est Belle Eau de Parfum from Lancome is a fragrance for freedom and luck and shows its uniqueness in its fragrance character.',
                prices: {
                    50: 90.96,
                    100: 117.83,
                    200: 210.87
                }
            },
            {
                id: 2,
                name: 'Black Opium',
                brand: 'Yves Saint Laurent',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FYves-Saint-Laurent-Black-Opium-Eau-de-Parfum-Spray.png?alt=media&token=9bbcfc93-363e-429a-88d9-d68840edeef4',
                bio: 'Black Opium is one of the true classics from the House of Yves Saint Laurent. With the Black Opium Eau de Parfum Spray, this classic has now found a worthy successor. The perfume arouses curiosity at very first glance. The soft rose-coloured label immediately catches your eye on the deep black flacon furnished with a touch of glitter, and the contrast is not just optical either. ',
                prices: {
                    30: 69.25,
                    50: 96.13,
                    90: 127.13,
                }
            },
            {
                id: 3,
                name: 'Libre',
                brand: 'Yves Saint Laurent',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FYves-Saint-Laurent-Libre-Eau-de-Parfum-Spray.png?alt=media&token=8ab15ece-95a3-454f-bd58-8446acb1d480',
                bio: 'The LIBRE Eau de Parfum by YSL Beauty represents freedom without borders. The fragrance is a game of contrasts. Warm, feminine notes of orange meet masculine, cool hints of lavender and unite in an eau de parfum that is sensual, cool and floral all at the same time.',
                prices: {
                    30: 70.29,
                    50: 100.26,
                    90: 137.47
                }
            },
            {
                id: 4,
                name: "J'adore",
                brand: 'DIOR',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FDIOR-Jadore-Eau-de-Parfum-Spray.png?alt=media&token=6c9ba726-be8b-485c-9438-3fa80cbc1576',
                bio: "The embodiment of absolute femininity in a generous fruity and floral bouquet. J'adore opens with a fresh accord of bergamot, followed by a luscious bouquet of roses, which is then replaced by fine jasmine notes. The flowing and sensual curves of its amphora shaped bottle have made it a legendary fragrance.",
                prices: {
                    50: 73.95,
                    100: 88.95,
                    150: 136.95
                }
            },
            {
                id: 5,
                name: 'Si',
                brand: 'Armani',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FArmani-Si-Eau-de-Parfum-Spray.png?alt=media&token=4b407c3f-3312-4e55-917c-34dc223d4fbf',
                bio: 'Si from Armani unfurls due to the perfect blending of mandarin, blackcurrent liquor and Sicilian bergamot as a very feminine and floral fragrance. Cinnamon Rose Absolute, Neroli Absolute, Egyptian Jasmine Absolute Turkish Rose underline the feminineand touch one’s heart.',
                prices: {
                    30: 70.29,
                    50: 97.68,
                    100: 130.24
                }
            },
            {
                id: 6,
                name: 'Trésor',
                brand: 'Lancôme',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FLancome-Tresor-Eau-de-Parfum-Spray.png?alt=media&token=87528fc1-2224-40f4-8123-f02b7c088936',
                bio: 'The Eau de Parfum unleashes a symphony of fresh flowers accompanied by a ballet of powdery, woody and sensuous notes. Like a previous jewel, that you will want to guard and protect, the new, valuable TRESOR spray flaçon will nestle into your open hand. This is the moment just before the encounter, when time and hearts stand still.',
                prices: {
                    30: 55.30,
                    50: 78.04,
                    100: 109.05
                }
            },
            {
                id: 7,
                name: 'My Way',
                brand: 'Armani',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FArmani-My-Way-Eau-de-Parfum-Spray.png?alt=media&token=1ec9051e-1d04-4f13-b593-007088ab85df',
                bio: 'Giorgio Armani MY WAY Eau de Parfum Spray is for the modern, dynamic and self-sufficient woman, who combines curiosity, love of life and joy. Open-minded, she goes on journeys and adventures to discover new things. This spirit of discovery is reflected in the irresistibly floral fragrance – true to the motto "I am what I live".',
                prices: {
                    30: 70.29,
                    50: 97.68,
                    90: 130.24
                }
            },
            {
                id: 8,
                name: 'Lady Million',
                brand: 'Paco Rabanne',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FPaco-Rabanne-Lady-Million-Eau-de-Parfum-Spray.png?alt=media&token=0ed878c2-3d7d-4a3a-a7fe-97ad6e35a5e8',
                bio: 'A femme-fatale who wears scent to seduce. Lusting for life and living for the chase. A trail of white (sexy) flowers awakens the skin with fresh notes -that spill over into a dangerous patchouoli. As bright as a diamond, a scent to seduce. A trail of fresh white flowers, warmed with woods. Bursting: neroli and bitter orange collide with a ripple of raspberry.',
                prices: {
                    30: 41.95,
                    50: 52.95,
                    80: 82.95
                }
            },
            {
                id: 9,
                name: 'Poison',
                brand: 'DIOR',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FDIOR-Poison-Hypnotic-Poison-Eau-de-Toilette-Spray.png?alt=media&token=36573824-ecef-4613-8e86-5348e4f1d416',
                bio: 'The secret of the legendary forbidden fruit by Dior lives on in this magical, modern potion. The mixture of absolute femininity and boldness captivates with its four contrasting fragrance facets: these include intoxicating bitter almond and caraway, opulent Arabian jasmine, mysterious jacarandra and sensual vanilla with musk. An almost unreal, breathtaking fusion that is both dizzying and extravagant.',
                prices: {
                    50: 68.95,
                    100: 98.95,
                    200: 119.95
                }
            },
            {
                id: 10,
                name: 'Scandal',
                brand: 'Jean Paul Gaultier',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FJean-Paul-Gaultier-Scandal-Eau-de-Parfum-Spray.png?alt=media&token=63afe1e4-f0d5-4a3a-8711-7ba4f4fb2abe',
                bio: "Scandal is a new kind of fragrance for women: the elegant aura that it leaves in her wake is sullied by the Pigalle spirit beloved by Jean Paul Gaultier. Even Madam Minister is tempted by this scent of Scandal. It's more than a breath of fresh air – it’s a breath of freedom.",
                prices: {
                    30: 59.43,
                    50: 85.79,
                    80: 107.50
                }
            },
            {
                id: 11,
                name: 'Flowerbomb',
                brand: 'Viktor & Rolf',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FViktor-Rolf-Flowerbomb-Eau-de-Parfum-Spray.png?alt=media&token=c2b4fa69-2f29-4b8a-871e-fce2ae43229c',
                bio: 'A bold, passionate and generous scent fills the air. The enchanting bouquet expands ever wider and captures the world. In the tradition of the Viktor & Rolf collection, Petite Flowerbomb moves between simple elegance and a grand stage. Viktor & Rolf invite you into the realm of fantasy. In a modern fairy tale, where nothing is as it seems.',
                prices: {
                    30: 72.35,
                    50: 97.16,
                    100: 136.44
                }
            },
            {
                id: 12,
                name: 'BOSS Alive',
                brand: 'Hugo Boss',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FHugo-Boss-BOSS-Alive-Eau-de-Parfum-Spray.png?alt=media&token=c6142463-8674-47e8-bb1d-229e169375a0',
                bio: 'Experience the fragrance of pure joie de vivre – the Eau de Parfum spray BOSS Alive by Hugo Boss is a vibrant ode to femininity. Creative perfumer Annick Menardo has developed a unique creation with this extraordinary fragrance experience. A fascinating composition of classy ingredients results in a powerful yet inspiringly delicate fragrance.',
                prices: {
                    30: 64.08,
                    50: 88.89,
                    80: 125.07
                }
            },
            {
                id: 13,
                name: 'Code Femme',
                brand: 'Armani',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FArmani-Code-Femme-Eau-de-Parfum-Spray.png?alt=media&token=4607b4c1-9227-4fc6-9a7f-93a5e79c441e',
                bio: 'ARMANI CODE is a composition that centres on orange blossoms - a fragrance that permeates the multi-faceted flair of the Mediterranean. The fresh orange blossom is accentuated by the rind of two sorts of bitter oranges that express the ‘joie de vivre’ of the Italian way of life.',
                prices: {
                    30: 66.15,
                    50: 93.03,
                    75: 110.60
                }
            },
            {
                id: 14,
                name: 'Olympéa',
                brand: 'Paco Rabanne',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FPaco-Rabanne-Olympea-Eau-de-Parfum-Spray.png?alt=media&token=2339f9c4-7bf3-4667-b74f-65551bd0a638',
                bio: 'A modern day goddess. Heaven-scent. Iconic, chic. Unique. Half-myth, half-muse. Smiling on victory as her natural reward. Ready to seduce Zeus. Trouble in paradise... A sensuel salty-vanilla, earthly, irrresistible. A fresh-oriental, powerfully discreet. The divine union of exalted floral freshness and a skin-loving salty-vanilla accord.',
                prices: {
                    30: 40.95,
                    50: 64.95,
                    80: 70.95
                }
            },
            {
                id: 15,
                name: 'Hypnôse',
                brand: 'Lancôme',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FLancome-Hypnose-Eau-de-Parfum-Spray.png?alt=media&token=417d512e-5f0c-404d-8392-45a15e84b478',
                bio: 'Le nouveau parfum féminin. The magical scent of a women who uses all her charm to fascinate the man she loves. A sensuous, oriental, woody fragrance with hints of wood and vanilla that are made to shine by passion blossoms and vetiver root. The luxurious flaçon, with its bold crystal tower shape and sleek, modern lines, is a svelte and feminine re-interpretation of the flaçon of the Magic fragrance from 1950.',
                prices: {
                    30: 51.62,
                    50: 80.62,
                    75: 102.33
                }
            },
            {
                id: 16,
                name: 'La Nuit Trésor',
                brand: 'Lancôme',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FLancome-La-Nuit-Tresor-Eau-de-Parfum-Spray.png?alt=media&token=8d138f97-f895-4829-9aed-5a9c05cf5f0d',
                bio: 'The La Nuit Trésor Eau de Parfum Spray is part of Lancôme’s product range. The gourmand fragrance is suitable for all self-confident women who want to radiate passion, sexiness and allure. The rare ingredients (including lychee praline, vanilla tahitensis orchid absolute and black rose essence) make this fragrance very special and whisks the wearer away to precious moments full of excitement and sensuality.',
                prices: {
                    30: 57.88,
                    50: 78.04,
                    75: 93.03
                }
            },
            {
                id: 17,
                name: 'Mon Paris',
                brand: 'Yves Saint Laurent',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FYves-Saint-Laurent-Mon-Paris-Eau-de-Parfum-Spray.png?alt=media&token=362dff16-67a3-4b47-84fa-0a243133bf52',
                bio: 'Mon Paris by Yves Saint Laurent is a radiant and luscious fragrance. The wonderful composition of bergamot, raspberry, strawberry, sambac jasmine absolute and a datura accord creates a passionate fragrance. Patchouli, white musk and ambrox provide a charismatic finish. This fragrance is downright addictive.',
                prices: {
                    30: 69.25,
                    50: 96.13,
                    90: 127.13
                }
            },
            {
                id: 18,
                name: 'Must de Cartier',
                brand: 'Cartier',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FCartier-Must-de-Cartier-Parfum-Spray.png?alt=media&token=cb226ea5-00ce-4d07-ad4d-1b3989e3f586',
                bio: 'Must de Cartier by Cartier is a flowery fragrance with an oriental air that produces a composition that goes together like milk and honey and one that women will want to have - and need to have by virtue of the name.',
                prices: {
                    50: 175.71
                }
            },
            {
                id: 19,
                name: "Boss Ma Vie Pour Femme",
                brand: 'Hugo Boss',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FHugo-Boss-BOSS-Ma-Vie-Pour-Femme-Eau-de-Parfum-Spray.png?alt=media&token=724dafea-44c3-4ba1-b12f-afc429643115',
                bio: 'BOSS MA VIE Pour Femme by HUGO BOSS mirrors the scent of a cactus flower, which only blooms three nights a year, combined with white freesia, jasmine flowers and delicate rosebuds. The entire composition feels really classy and feminine. BOSS MA VIE Pour Femme is rounded off in a warm, long-lasting and delicate manner by sandalwood, amber chords and cedar wood.',
                prices: {
                    30: 62.02,
                    50: 84.76,
                    75: 106.46
                }
            },
            {
                id: 20,
                name: 'Gucci Guilty',
                brand: 'Gucci',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nidore-ecommerce.appspot.com/o/womens%2FGucci-Gucci-Guilty-Eau-de-Parfum-Spray-Intense.png?alt=media&token=80d6517e-5c33-4c5f-b561-9f3a042b2536',
                bio: 'Too much is never enough for the Gucci Guilty woman. She dares to indulge herself in more and more intense sensations. The fragrance first grabs your attention with its spectacular top note with the intoxicating aroma of the mandarin, which radiates in a light and transparent way alongside a bold shot of rose pepper.',
                prices: {
                    30: 59.95,
                    50: 81.95,
                    75: 103.95
                }
            }
        ]
    }
];

export default SHOP_DATA;