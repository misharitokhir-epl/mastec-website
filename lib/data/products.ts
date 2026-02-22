export interface Product {
  id: string;
  slug: string;
  name: string;
  nameRu: string;
  nameUz: string;
  description: string;
  descriptionRu: string;
  descriptionUz: string;
  category: string;
  categoryId: string;
  image: string;
  color?: string;
  specifications?: {
    key: string;
    value: string;
  }[];
  properties?: {
    key: string;
    keyRu?: string;
    keyUz?: string;
    value: string;
    valueRu?: string;
    valueUz?: string;
    isList?: boolean;
    listItems?: string[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  nameRu: string;
  nameUz: string;
}

export const categories: Category[] = [
  { id: 'black-masterbatch', name: 'Black Masterbatch', nameRu: 'Чёрный мастербатч', nameUz: 'Qora masterbatch' },
  { id: 'white-masterbatch', name: 'White Masterbatch', nameRu: 'Белый мастербатч', nameUz: 'Oq masterbatch' },
  { id: 'color-masterbatch', name: 'Color Masterbatch', nameRu: 'Цветной мастербатч', nameUz: 'Rangli masterbatch' },
  { id: 'pigments', name: 'Pigments', nameRu: 'Пигменты', nameUz: 'Pigmentlar' },
  { id: 'fillers', name: 'Fillers', nameRu: 'Наполнители', nameUz: "To'ldiruvchilar" },
  { id: 'additives', name: 'Functional Additives', nameRu: 'Функциональные добавки', nameUz: "Funksional qo'shimchalar" },
];

export const products: Product[] = [
  // Black Masterbatch
  {
    id: '1',
    slug: 'black-masterbatch-pe',
    name: 'Black Masterbatch for PE',
    nameRu: 'Чёрный мастербатч для ПЭ',
    nameUz: 'PE uchun qora masterbatch',
    description: 'High-quality black masterbatch based on virgin LDPE with excellent dispersion and UV stability. Suitable for films, pipes, and injection molding.',
    descriptionRu: 'Высококачественный чёрный мастербатч на основе первичного ПЭНП с отличной дисперсией и УФ-стабильностью. Подходит для плёнок, труб и литья под давлением.',
    descriptionUz: "Ajoyib dispersiya va UV barqarorligi bilan birlamchi LDPE asosidagi yuqori sifatli qora masterbatch. Plyonkalar, quvurlar va in'ektsion qoliplash uchun mos.",
    category: 'Black Masterbatch',
    categoryId: 'black-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/High_Quality_Virgin_LDPE_Based_Black_Masterbatch_for_Blowing_Film.jpg',
    color: 'black',
    specifications: [
      { key: 'Carbon Black Content', value: '40-50%' },
      { key: 'Carrier', value: 'LDPE' },
      { key: 'MFI', value: '15-25 g/10min' },
    ],
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'Virgin LDPE + Carbon Black', valueRu: 'Первичный ПЭНП + Сажа', valueUz: 'Birlamchi LDPE + Uglerod qora' },
      { key: 'Carbon Black Content', keyRu: 'Содержание сажи', keyUz: 'Uglerod qora miqdori', value: '40-50%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'LDPE (Low Density Polyethylene)', valueRu: 'ПЭНП (Полиэтилен низкой плотности)', valueUz: 'LDPE (Past zichlikdagi polietilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '15-25 g/10min (190°C/2.16kg)' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.1%' },
      { key: 'Dispersion', keyRu: 'Дисперсия', keyUz: 'Dispersiya', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 280°C', valueRu: 'До 280°C', valueUz: '280°C gacha' },
      { key: 'UV Stability', keyRu: 'УФ-стабильность', keyUz: 'UV barqarorlik', value: 'Yes', valueRu: 'Да', valueUz: 'Ha' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '2',
    slug: 'black-masterbatch-pp',
    name: 'Black Masterbatch for PP',
    nameRu: 'Чёрный мастербатч для ПП',
    nameUz: 'PP uchun qora masterbatch',
    description: 'Premium black masterbatch for polypropylene applications with high carbon black concentration and excellent jet black color.',
    descriptionRu: 'Премиальный чёрный мастербатч для полипропиленовых применений с высокой концентрацией сажи и отличным глубоким чёрным цветом.',
    descriptionUz: "Yuqori uglerod qora konsentratsiyasi va ajoyib qora rang bilan polipropilen ilovalari uchun premium qora masterbatch.",
    category: 'Black Masterbatch',
    categoryId: 'black-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/High_Quality_Virgin_LDPE_Based_Black_Masterbatch_for_Blowing_Film.jpg',
    color: 'black',
    specifications: [
      { key: 'Carbon Black Content', value: '45-55%' },
      { key: 'Carrier', value: 'PP' },
      { key: 'MFI', value: '20-30 g/10min' },
    ],
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'Virgin PP + Carbon Black', valueRu: 'Первичный ПП + Сажа', valueUz: 'Birlamchi PP + Uglerod qora' },
      { key: 'Carbon Black Content', keyRu: 'Содержание сажи', keyUz: 'Uglerod qora miqdori', value: '45-55%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PP (Polypropylene)', valueRu: 'ПП (Полипропилен)', valueUz: 'PP (Polipropilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '20-30 g/10min (230°C/2.16kg)' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.1%' },
      { key: 'Dispersion', keyRu: 'Дисперсия', keyUz: 'Dispersiya', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 300°C', valueRu: 'До 300°C', valueUz: '300°C gacha' },
      { key: 'UV Stability', keyRu: 'УФ-стабильность', keyUz: 'UV barqarorlik', value: 'Yes', valueRu: 'Да', valueUz: 'Ha' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  // White Masterbatch
  {
    id: '3',
    slug: 'white-masterbatch-pe',
    name: 'White Masterbatch for PE',
    nameRu: 'Белый мастербатч для ПЭ',
    nameUz: 'PE uchun oq masterbatch',
    description: 'High-quality white masterbatch with excellent TiO2 dispersion for superior opacity and brightness in PE applications.',
    descriptionRu: 'Высококачественный белый мастербатч с отличной дисперсией TiO2 для превосходной непрозрачности и яркости в ПЭ применениях.',
    descriptionUz: 'PE ilovalarida ajoyib shaffoflik va yorqinlik uchun ajoyib TiO2 dispersiyali yuqori sifatli oq masterbatch.',
    category: 'White Masterbatch',
    categoryId: 'white-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/unnamed-6_-600x600.jpg',
    color: 'white',
    specifications: [
      { key: 'TiO2 Content', value: '50-70%' },
      { key: 'Carrier', value: 'LDPE' },
      { key: 'MFI', value: '10-20 g/10min' },
    ],
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'Virgin LDPE + Titanium Dioxide', valueRu: 'Первичный ПЭНП + Диоксид титана', valueUz: 'Birlamchi LDPE + Titan dioksid' },
      { key: 'TiO2 Content', keyRu: 'Содержание TiO2', keyUz: 'TiO2 miqdori', value: '50-70%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'LDPE (Low Density Polyethylene)', valueRu: 'ПЭНП (Полиэтилен низкой плотности)', valueUz: 'LDPE (Past zichlikdagi polietilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '10-20 g/10min (190°C/2.16kg)' },
      { key: 'Whiteness Index', keyRu: 'Индекс белизны', keyUz: 'Oqlik indeksi', value: '≥95%' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.1%' },
      { key: 'Dispersion', keyRu: 'Дисперсия', keyUz: 'Dispersiya', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 280°C', valueRu: 'До 280°C', valueUz: '280°C gacha' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '4',
    slug: 'white-masterbatch-pp',
    name: 'White Masterbatch for PP',
    nameRu: 'Белый мастербатч для ПП',
    nameUz: 'PP uchun oq masterbatch',
    description: 'Premium white masterbatch for polypropylene with high TiO2 concentration for excellent whiteness and hiding power.',
    descriptionRu: 'Премиальный белый мастербатч для полипропилена с высокой концентрацией TiO2 для отличной белизны и укрывистости.',
    descriptionUz: "Ajoyib oqlik va yashirish kuchi uchun yuqori TiO2 konsentratsiyali polipropilen uchun premium oq masterbatch.",
    category: 'White Masterbatch',
    categoryId: 'white-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/unnamed-6_-600x600.jpg',
    color: 'white',
    specifications: [
      { key: 'TiO2 Content', value: '60-75%' },
      { key: 'Carrier', value: 'PP' },
      { key: 'MFI', value: '15-25 g/10min' },
    ],
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'Virgin PP + Titanium Dioxide', valueRu: 'Первичный ПП + Диоксид титана', valueUz: 'Birlamchi PP + Titan dioksid' },
      { key: 'TiO2 Content', keyRu: 'Содержание TiO2', keyUz: 'TiO2 miqdori', value: '60-75%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PP (Polypropylene)', valueRu: 'ПП (Полипропилен)', valueUz: 'PP (Polipropilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '15-25 g/10min (230°C/2.16kg)' },
      { key: 'Whiteness Index', keyRu: 'Индекс белизны', keyUz: 'Oqlik indeksi', value: '≥96%' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.1%' },
      { key: 'Dispersion', keyRu: 'Дисперсия', keyUz: 'Dispersiya', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 300°C', valueRu: 'До 300°C', valueUz: '300°C gacha' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  // Color Masterbatch
  {
    id: '5',
    slug: 'red-color-masterbatch',
    name: 'Red Color Masterbatch',
    nameRu: 'Красный цветной мастербатч',
    nameUz: 'Qizil rangli masterbatch',
    description: 'Vibrant red color masterbatch with excellent heat stability and consistent color matching for various polymer applications.',
    descriptionRu: 'Яркий красный цветной мастербатч с отличной термостабильностью и стабильным цветосоответствием для различных полимерных применений.',
    descriptionUz: "Turli polimer ilovalari uchun ajoyib issiqlik barqarorligi va barqaror rang moslashuvi bilan yorqin qizil rangli masterbatch.",
    category: 'Color Masterbatch',
    categoryId: 'color-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/c1_-600x600.jpg',
    color: 'red',
    properties: [
      { key: 'Color', keyRu: 'Цвет', keyUz: 'Rang', value: 'Red (Various shades available)', valueRu: 'Красный (Различные оттенки)', valueUz: 'Qizil (Turli soyalar mavjud)' },
      { key: 'Pigment Content', keyRu: 'Содержание пигмента', keyUz: 'Pigment miqdori', value: '30-50%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PE/PP (Universal)', valueRu: 'ПЭ/ПП (Универсальный)', valueUz: 'PE/PP (Universal)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '15-25 g/10min' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 280°C', valueRu: 'До 280°C', valueUz: '280°C gacha' },
      { key: 'Light Fastness', keyRu: 'Светостойкость', keyUz: 'Yoruglik barqarorligi', value: '7-8 (Blue Wool Scale)', valueRu: '7-8 (Шкала синей шерсти)', valueUz: '7-8 (Koʻk jun shkalasi)' },
      { key: 'Migration Resistance', keyRu: 'Устойчивость к миграции', keyUz: 'Migratsiyaga chidamlilik', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '1-4%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '6',
    slug: 'blue-color-masterbatch',
    name: 'Blue Color Masterbatch',
    nameRu: 'Синий цветной мастербатч',
    nameUz: "Ko'k rangli masterbatch",
    description: 'Premium blue color masterbatch ideal for packaging, films, and injection molding with excellent dispersion.',
    descriptionRu: 'Премиальный синий цветной мастербатч, идеальный для упаковки, плёнок и литья под давлением с отличной дисперсией.',
    descriptionUz: "Ajoyib dispersiya bilan qadoqlash, plyonkalar va in'ektsion qoliplash uchun ideal premium ko'k rangli masterbatch.",
    category: 'Color Masterbatch',
    categoryId: 'color-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/c1_-600x600.jpg',
    color: 'blue',
    properties: [
      { key: 'Color', keyRu: 'Цвет', keyUz: 'Rang', value: 'Blue (Various shades available)', valueRu: 'Синий (Различные оттенки)', valueUz: "Ko'k (Turli soyalar mavjud)" },
      { key: 'Pigment Content', keyRu: 'Содержание пигмента', keyUz: 'Pigment miqdori', value: '30-50%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PE/PP (Universal)', valueRu: 'ПЭ/ПП (Универсальный)', valueUz: 'PE/PP (Universal)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '15-25 g/10min' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 280°C', valueRu: 'До 280°C', valueUz: '280°C gacha' },
      { key: 'Light Fastness', keyRu: 'Светостойкость', keyUz: 'Yoruglik barqarorligi', value: '7-8 (Blue Wool Scale)', valueRu: '7-8 (Шкала синей шерсти)', valueUz: '7-8 (Koʻk jun shkalasi)' },
      { key: 'Migration Resistance', keyRu: 'Устойчивость к миграции', keyUz: 'Migratsiyaga chidamlilik', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '1-4%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '7',
    slug: 'fluorescent-color-masterbatch',
    name: 'Fluorescent Bright Colors',
    nameRu: 'Флуоресцентные яркие цвета',
    nameUz: 'Florescent yorqin ranglar',
    description: 'High-visibility fluorescent color masterbatch for safety applications and eye-catching packaging.',
    descriptionRu: 'Высоковидимый флуоресцентный цветной мастербатч для применений в сфере безопасности и привлекательной упаковки.',
    descriptionUz: "Xavfsizlik ilovalari va ko'zga tashlanadigan qadoqlash uchun yuqori ko'rinishli florescent rangli masterbatch.",
    category: 'Color Masterbatch',
    categoryId: 'color-masterbatch',
    image: 'https://mastec.uz/wp-content/uploads/2017/06/Color-Masterbatch-3-1.jpg',
    color: 'colored',
    properties: [
      { key: 'Color Options', keyRu: 'Варианты цветов', keyUz: 'Rang variantlari', value: 'Fluorescent Yellow, Orange, Green, Pink', valueRu: 'Флуоресцентный жёлтый, оранжевый, зелёный, розовый', valueUz: "Florescent sariq, to'q sariq, yashil, pushti" },
      { key: 'Pigment Content', keyRu: 'Содержание пигмента', keyUz: 'Pigment miqdori', value: '25-40%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PE/PP (Universal)', valueRu: 'ПЭ/ПП (Универсальный)', valueUz: 'PE/PP (Universal)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '15-25 g/10min' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 240°C', valueRu: 'До 240°C', valueUz: '240°C gacha' },
      { key: 'Fluorescence', keyRu: 'Флуоресценция', keyUz: 'Fluorestsensiya', value: 'High intensity under UV light', valueRu: 'Высокая интенсивность под УФ', valueUz: 'UV yoruglikda yuqori intensivlik' },
      { key: 'Applications', keyRu: 'Применение', keyUz: 'Qollanilishi', value: 'Safety equipment, packaging, toys', valueRu: 'Средства безопасности, упаковка, игрушки', valueUz: 'Xavfsizlik jihozlari, qadoqlash, oʻyinchoqlar' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '2-5%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '18 months', valueRu: '18 месяцев', valueUz: '18 oy' },
    ],
  },
  // Pigments
  {
    id: '8',
    slug: 'titanium-dioxide-pigment',
    name: 'Titanium Dioxide Pigment',
    nameRu: 'Пигмент диоксид титана',
    nameUz: 'Titan dioksid pigmenti',
    description: 'Premium TiO2 pigment for white masterbatch production with excellent opacity and brightness.',
    descriptionRu: 'Премиальный пигмент TiO2 для производства белого мастербатча с отличной непрозрачностью и яркостью.',
    descriptionUz: "Ajoyib shaffoflik va yorqinlik bilan oq masterbatch ishlab chiqarish uchun premium TiO2 pigmenti.",
    category: 'Pigments',
    categoryId: 'pigments',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/plastic-pigment-500x500-1-600x600.jpg',
    color: 'white',
    properties: [
      { key: 'Chemical Name', keyRu: 'Химическое название', keyUz: 'Kimyoviy nomi', value: 'Titanium Dioxide (TiO2)', valueRu: 'Диоксид титана (TiO2)', valueUz: 'Titan dioksid (TiO2)' },
      { key: 'TiO2 Content', keyRu: 'Содержание TiO2', keyUz: 'TiO2 miqdori', value: '≥93%' },
      { key: 'Crystal Structure', keyRu: 'Кристаллическая структура', keyUz: 'Kristall tuzilishi', value: 'Rutile', valueRu: 'Рутил', valueUz: 'Rutil' },
      { key: 'Whiteness', keyRu: 'Белизна', keyUz: 'Oqlik', value: '≥96%' },
      { key: 'Particle Size', keyRu: 'Размер частиц', keyUz: "Zarracha o'lchami", value: '0.2-0.3 μm' },
      { key: 'Oil Absorption', keyRu: 'Маслоёмкость', keyUz: 'Yog yutish', value: '18-24 g/100g' },
      { key: 'pH Value', keyRu: 'pH', keyUz: 'pH qiymati', value: '6.5-8.0' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.5%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '36 months', valueRu: '36 месяцев', valueUz: '36 oy' },
    ],
  },
  {
    id: '9',
    slug: 'carbon-black-pigment',
    name: 'Carbon Black Pigment',
    nameRu: 'Пигмент сажа',
    nameUz: 'Uglerod qora pigmenti',
    description: 'High-quality carbon black pigment for deep black coloration and UV protection.',
    descriptionRu: 'Высококачественный пигмент сажа для глубокого чёрного цвета и УФ-защиты.',
    descriptionUz: "Chuqur qora rang va UV himoya uchun yuqori sifatli uglerod qora pigmenti.",
    category: 'Pigments',
    categoryId: 'pigments',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/plastic-pigment-500x500-1-600x600.jpg',
    color: 'black',
    properties: [
      { key: 'Chemical Name', keyRu: 'Химическое название', keyUz: 'Kimyoviy nomi', value: 'Carbon Black', valueRu: 'Технический углерод (Сажа)', valueUz: 'Uglerod qora' },
      { key: 'Carbon Content', keyRu: 'Содержание углерода', keyUz: 'Uglerod miqdori', value: '≥99%' },
      { key: 'Surface Area (BET)', keyRu: 'Удельная поверхность (БЭТ)', keyUz: 'Sirt maydoni (BET)', value: '80-150 m²/g' },
      { key: 'Particle Size', keyRu: 'Размер частиц', keyUz: "Zarracha o'lchami", value: '20-40 nm' },
      { key: 'Oil Absorption', keyRu: 'Маслоёмкость', keyUz: 'Yog yutish', value: '100-130 ml/100g' },
      { key: 'pH Value', keyRu: 'pH', keyUz: 'pH qiymati', value: '6.0-9.0' },
      { key: 'Volatile Matter', keyRu: 'Летучие вещества', keyUz: 'Uchuvchi moddalar', value: '≤2%' },
      { key: 'UV Protection', keyRu: 'УФ-защита', keyUz: 'UV himoya', value: 'Excellent', valueRu: 'Отличная', valueUz: 'Ajoyib' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '20 kg bags', valueRu: '20 кг мешки', valueUz: '20 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '36 months', valueRu: '36 месяцев', valueUz: '36 oy' },
    ],
  },
  // Fillers
  {
    id: '10',
    slug: 'calcium-carbonate-filler-pe',
    name: 'Calcium Carbonate Filler for PE',
    nameRu: 'Наполнитель карбонат кальция для ПЭ',
    nameUz: "PE uchun kalsiy karbonat to'ldiruvchi",
    description: 'Cost-effective calcium carbonate filler masterbatch for PE applications, improving stiffness and reducing costs.',
    descriptionRu: 'Экономичный наполнитель мастербатч с карбонатом кальция для ПЭ применений, улучшающий жёсткость и снижающий затраты.',
    descriptionUz: "PE ilovalari uchun tejamkor kalsiy karbonat to'ldiruvchi masterbatch, qattiqlikni yaxshilaydi va xarajatlarni kamaytiradi.",
    category: 'Fillers',
    categoryId: 'fillers',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/Filler-Masterbatch-Market-600x600.jpg',
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'CaCO3 + LDPE', valueRu: 'CaCO3 + ПЭНП', valueUz: 'CaCO3 + LDPE' },
      { key: 'CaCO3 Content', keyRu: 'Содержание CaCO3', keyUz: 'CaCO3 miqdori', value: '70-80%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'LDPE (Low Density Polyethylene)', valueRu: 'ПЭНП (Полиэтилен низкой плотности)', valueUz: 'LDPE (Past zichlikdagi polietilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '5-15 g/10min (190°C/2.16kg)' },
      { key: 'Particle Size (CaCO3)', keyRu: 'Размер частиц (CaCO3)', keyUz: "Zarracha o'lchami (CaCO3)", value: '1-3 μm' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.2%' },
      { key: 'Whiteness', keyRu: 'Белизна', keyUz: 'Oqlik', value: '≥92%' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '10-40%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '11',
    slug: 'calcium-carbonate-filler-pp',
    name: 'Calcium Carbonate Filler for PP',
    nameRu: 'Наполнитель карбонат кальция для ПП',
    nameUz: "PP uchun kalsiy karbonat to'ldiruvchi",
    description: 'High-quality calcium carbonate filler for polypropylene with excellent dispersion and mechanical properties.',
    descriptionRu: 'Высококачественный наполнитель карбонат кальция для полипропилена с отличной дисперсией и механическими свойствами.',
    descriptionUz: "Ajoyib dispersiya va mexanik xususiyatlarga ega polipropilen uchun yuqori sifatli kalsiy karbonat to'ldiruvchi.",
    category: 'Fillers',
    categoryId: 'fillers',
    image: 'https://mastec.uz/wp-content/uploads/2017/06/pe-pp-filler-compounding-500x500-1.jpg',
    properties: [
      { key: 'Composition', keyRu: 'Состав', keyUz: 'Tarkibi', value: 'CaCO3 + PP', valueRu: 'CaCO3 + ПП', valueUz: 'CaCO3 + PP' },
      { key: 'CaCO3 Content', keyRu: 'Содержание CaCO3', keyUz: 'CaCO3 miqdori', value: '75-85%' },
      { key: 'Carrier Resin', keyRu: 'Полимер-носитель', keyUz: 'Tashuvchi polimer', value: 'PP (Polypropylene)', valueRu: 'ПП (Полипропилен)', valueUz: 'PP (Polipropilen)' },
      { key: 'MFI (Melt Flow Index)', keyRu: 'ПТР (Показатель текучести расплава)', keyUz: 'MFI (Erish oqimi indeksi)', value: '8-20 g/10min (230°C/2.16kg)' },
      { key: 'Particle Size (CaCO3)', keyRu: 'Размер частиц (CaCO3)', keyUz: "Zarracha o'lchami (CaCO3)", value: '1-3 μm' },
      { key: 'Moisture Content', keyRu: 'Влажность', keyUz: 'Namlik', value: '≤0.2%' },
      { key: 'Whiteness', keyRu: 'Белизна', keyUz: 'Oqlik', value: '≥92%' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '10-40%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '25 kg bags', valueRu: '25 кг мешки', valueUz: '25 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  // Additives
  {
    id: '12',
    slug: 'optical-brightener',
    name: 'Optical Brightener',
    nameRu: 'Оптический отбеливатель',
    nameUz: 'Optik oqartiruvchi',
    description: 'High-performance optical brightener additive for enhanced whiteness and brightness in polymer products.',
    descriptionRu: 'Высокоэффективная добавка оптического отбеливателя для улучшенной белизны и яркости в полимерных изделиях.',
    descriptionUz: "Polimer mahsulotlarida yaxshilangan oqlik va yorqinlik uchun yuqori samarali optik oqartiruvchi qo'shimcha.",
    category: 'Functional Additives',
    categoryId: 'additives',
    image: 'https://mastec.uz/wp-content/uploads/2017/06/unnamed.jpg',
    color: 'transparent',
    properties: [
      { key: 'Chemical Type', keyRu: 'Химический тип', keyUz: 'Kimyoviy turi', value: 'OB-1 / FP-127', valueRu: 'ОБ-1 / FP-127', valueUz: 'OB-1 / FP-127' },
      { key: 'Appearance', keyRu: 'Внешний вид', keyUz: "Tashqi ko'rinishi", value: 'Yellowish-green powder', valueRu: 'Желтовато-зелёный порошок', valueUz: 'Sariq-yashil kukun' },
      { key: 'Purity', keyRu: 'Чистота', keyUz: 'Tozalik', value: '≥99%' },
      { key: 'Melting Point', keyRu: 'Температура плавления', keyUz: 'Erish harorati', value: '355-360°C' },
      { key: 'Heat Stability', keyRu: 'Термостабильность', keyUz: 'Issiqlik barqarorligi', value: 'Up to 300°C', valueRu: 'До 300°C', valueUz: '300°C gacha' },
      { key: 'Light Fastness', keyRu: 'Светостойкость', keyUz: 'Yoruglik barqarorligi', value: '6-7 (Blue Wool Scale)', valueRu: '6-7 (Шкала синей шерсти)', valueUz: '6-7 (Koʻk jun shkalasi)' },
      { key: 'Compatible Polymers', keyRu: 'Совместимые полимеры', keyUz: 'Mos polimerlar', value: 'PE, PP, PS, ABS, PA, PET', valueRu: 'ПЭ, ПП, ПС, АБС, ПА, ПЭТ', valueUz: 'PE, PP, PS, ABS, PA, PET' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '0.01-0.05%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '10 kg / 25 kg', valueRu: '10 кг / 25 кг', valueUz: '10 kg / 25 kg' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '13',
    slug: 'nucleator-transparency',
    name: 'Nucleator for Transparency',
    nameRu: 'Нуклеатор для прозрачности',
    nameUz: "Shaffoflik uchun nukleator",
    description: 'Nucleating agent for improved clarity and transparency in polypropylene applications.',
    descriptionRu: 'Нуклеирующий агент для улучшенной чёткости и прозрачности в полипропиленовых применениях.',
    descriptionUz: "Polipropilen ilovalarida yaxshilangan aniqlik va shaffoflik uchun nukleatlashtiruvchi agent.",
    category: 'Functional Additives',
    categoryId: 'additives',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/15658529877893-b4e9a5fd8334fe6d0efebe5f07e82c33.jpg',
    color: 'transparent',
    properties: [
      { key: 'Chemical Type', keyRu: 'Химический тип', keyUz: 'Kimyoviy turi', value: 'Sorbitol-based nucleating agent', valueRu: 'Нуклеатор на основе сорбитола', valueUz: 'Sorbitol asosidagi nukleator' },
      { key: 'Appearance', keyRu: 'Внешний вид', keyUz: "Tashqi ko'rinishi", value: 'White powder', valueRu: 'Белый порошок', valueUz: 'Oq kukun' },
      { key: 'Purity', keyRu: 'Чистота', keyUz: 'Tozalik', value: '≥98%' },
      { key: 'Melting Point', keyRu: 'Температура плавления', keyUz: 'Erish harorati', value: '250-260°C' },
      { key: 'Clarity Improvement', keyRu: 'Улучшение прозрачности', keyUz: 'Shaffoflik yaxshilanishi', value: 'Up to 30%', valueRu: 'До 30%', valueUz: '30% gacha' },
      { key: 'Haze Reduction', keyRu: 'Снижение мутности', keyUz: 'Xiralashishni kamaytirish', value: 'Up to 50%', valueRu: 'До 50%', valueUz: '50% gacha' },
      { key: 'Compatible Polymers', keyRu: 'Совместимые полимеры', keyUz: 'Mos polimerlar', value: 'PP, PE (HDPE, LLDPE)', valueRu: 'ПП, ПЭ (ПЭВП, ЛПЭНП)', valueUz: 'PP, PE (HDPE, LLDPE)' },
      { key: 'Recommended Dosage', keyRu: 'Рекомендуемая дозировка', keyUz: 'Tavsiya etilgan dozaj', value: '0.1-0.3%' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '10 kg / 20 kg', valueRu: '10 кг / 20 кг', valueUz: '10 kg / 20 kg' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '24 months', valueRu: '24 месяца', valueUz: '24 oy' },
    ],
  },
  {
    id: '14',
    slug: 'fumed-silica-aerosil',
    name: 'Fumed Silica / Aerosil',
    nameRu: 'Кремния диоксид / Аэросил',
    nameUz: 'Kremniy dioksidi / Aerosil',
    description: 'High-purity fumed silica (white carbon) for various polymer and coating applications.',
    descriptionRu: 'Высокочистый диоксид кремния (белая сажа) для различных полимерных и покрывающих применений.',
    descriptionUz: "Turli polimer va qoplama ilovalari uchun yuqori tozalikdagi tutilgan silika (oq ko'mir).",
    category: 'Functional Additives',
    categoryId: 'additives',
    image: 'https://mastec.uz/wp-content/uploads/2020/12/bda3bdc68e7d94701e81f290456b159d-600x600.jpg',
    color: 'white',
    properties: [
      { key: 'Chemical Name', keyRu: 'Химическое название', keyUz: 'Kimyoviy nomi', value: 'Silicon Dioxide (SiO2)', valueRu: 'Диоксид кремния (SiO2)', valueUz: 'Kremniy dioksid (SiO2)' },
      { key: 'SiO2 Content', keyRu: 'Содержание SiO2', keyUz: 'SiO2 miqdori', value: '≥99.8%' },
      { key: 'Appearance', keyRu: 'Внешний вид', keyUz: "Tashqi ko'rinishi", value: 'White fluffy powder', valueRu: 'Белый пушистый порошок', valueUz: 'Oq pufakli kukun' },
      { key: 'Surface Area (BET)', keyRu: 'Удельная поверхность (БЭТ)', keyUz: 'Sirt maydoni (BET)', value: '150-400 m²/g' },
      { key: 'Primary Particle Size', keyRu: 'Размер первичных частиц', keyUz: 'Birlamchi zarracha olchami', value: '7-40 nm' },
      { key: 'Bulk Density', keyRu: 'Насыпная плотность', keyUz: 'Quyma zichlik', value: '30-60 g/L' },
      { key: 'pH Value', keyRu: 'pH', keyUz: 'pH qiymati', value: '3.7-4.7' },
      { key: 'Applications', keyRu: 'Применение', keyUz: 'Qollanilishi', value: 'Thickener, anti-settling, reinforcing', valueRu: 'Загуститель, антиоседатель, армирование', valueUz: 'Qalinlashtiruvchi, choktirmaydigan, mustahkamlovchi' },
      { key: 'Packaging', keyRu: 'Упаковка', keyUz: 'Qadoqlash', value: '10 kg bags', valueRu: '10 кг мешки', valueUz: '10 kg qoplar' },
      { key: 'Shelf Life', keyRu: 'Срок годности', keyUz: 'Yaroqlilik muddati', value: '36 months', valueRu: '36 месяцев', valueUz: '36 oy' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function filterProducts(categoryIds?: string[]): Product[] {
  if (!categoryIds || categoryIds.length === 0) {
    return products;
  }
  return products.filter((p) => categoryIds.includes(p.categoryId));
}
