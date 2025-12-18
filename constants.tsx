
import { ThemeConfig, AppStyle, AppSubject } from './types';

export const THEMES: ThemeConfig[] = [
  { id: 'festive-red', name: '2026马年红', bg: 'bg-[#8B0000]', card: 'bg-[#FAF9F6]', primary: 'bg-[#D4AF37]', secondary: 'bg-[#FFD700]', accent: 'text-[#8B0000]', text: 'text-gray-800', border: 'border-[#D4AF37]' },
  { id: 'imperial-gold', name: '皇室御金', bg: 'bg-[#FFD700]', card: 'bg-white', primary: 'bg-[#8B0000]', secondary: 'bg-[#B8860B]', accent: 'text-[#B8860B]', text: 'text-gray-900', border: 'border-[#8B0000]' },
  { id: 'spring-green', name: '春意盎然', bg: 'bg-[#2E8B57]', card: 'bg-[#F0FFF0]', primary: 'bg-[#3CB371]', secondary: 'bg-[#98FB98]', accent: 'text-[#2E8B57]', text: 'text-gray-800', border: 'border-[#3CB371]' },
  { id: 'azure-sky', name: '晴空万里', bg: 'bg-[#0077BE]', card: 'bg-white', primary: 'bg-[#87CEEB]', secondary: 'bg-[#00BFFF]', accent: 'text-[#0077BE]', text: 'text-gray-900', border: 'border-[#87CEEB]' },
  { id: 'midnight-purple', name: '极光紫', bg: 'bg-[#4B0082]', card: 'bg-[#F8F4FF]', primary: 'bg-[#9370DB]', secondary: 'bg-[#8A2BE2]', accent: 'text-[#4B0082]', text: 'text-gray-800', border: 'border-[#9370DB]' },
  { id: 'sakura-pink', name: '樱落春园', bg: 'bg-[#FFB7C5]', card: 'bg-white', primary: 'bg-[#FF69B4]', secondary: 'bg-[#FFC0CB]', accent: 'text-[#FF69B4]', text: 'text-gray-800', border: 'border-[#FF69B4]' },
  { id: 'ink-black', name: '水墨丹青', bg: 'bg-[#1A1A1A]', card: 'bg-[#F5F5F5]', primary: 'bg-[#333333]', secondary: 'bg-[#666666]', accent: 'text-black', text: 'text-gray-900', border: 'border-black' },
  { id: 'ocean-deep', name: '深海秘境', bg: 'bg-[#002147]', card: 'bg-[#E1EBEE]', primary: 'bg-[#003366]', secondary: 'bg-[#004B49]', accent: 'text-[#002147]', text: 'text-gray-900', border: 'border-[#003366]' },
  { id: 'desert-sand', name: '大漠孤烟', bg: 'bg-[#C2B280]', card: 'bg-[#FFF8DC]', primary: 'bg-[#D2B48C]', secondary: 'bg-[#F4A460]', accent: 'text-[#8B4513]', text: 'text-gray-800', border: 'border-[#D2B48C]' },
  { id: 'forest-mist', name: '林间晨雾', bg: 'bg-[#4F7942]', card: 'bg-[#F5F5DC]', primary: 'bg-[#8A9A5B]', secondary: 'bg-[#2E4600]', accent: 'text-[#2E4600]', text: 'text-gray-800', border: 'border-[#8A9A5B]' },
  { id: 'lavender-dream', name: '薰衣草梦', bg: 'bg-[#E6E6FA]', card: 'bg-white', primary: 'bg-[#9370DB]', secondary: 'bg-[#E6E6FA]', accent: 'text-[#4B0082]', text: 'text-gray-800', border: 'border-[#9370DB]' },
  { id: 'neon-vibe', name: '霓虹都市', bg: 'bg-[#0F0F0F]', card: 'bg-[#1A1A1A]', primary: 'bg-[#FF00FF]', secondary: 'bg-[#00FFFF]', accent: 'text-[#FF00FF]', text: 'text-white', border: 'border-[#FF00FF]' },
  { id: 'earth-warm', name: '大地暖阳', bg: 'bg-[#D2691E]', card: 'bg-[#FFF5EE]', primary: 'bg-[#A0522D]', secondary: 'bg-[#CD853F]', accent: 'text-[#8B4513]', text: 'text-gray-800', border: 'border-[#A0522D]' },
  { id: 'slate-modern', name: '现代板岩', bg: 'bg-[#708090]', card: 'bg-[#F8F8FF]', primary: 'bg-[#2F4F4F]', secondary: 'bg-[#778899]', accent: 'text-[#2F4F4F]', text: 'text-gray-900', border: 'border-[#2F4F4F]' },
  { id: 'rose-gold', name: '玫瑰雅金', bg: 'bg-[#B76E79]', card: 'bg-white', primary: 'bg-[#E0B0FF]', secondary: 'bg-[#F4C2C2]', accent: 'text-[#B76E79]', text: 'text-gray-800', border: 'border-[#B76E79]' },
  { id: 'mint-fresh', name: '薄荷清新', bg: 'bg-[#98FF98]', card: 'bg-white', primary: 'bg-[#3EB489]', secondary: 'bg-[#AAF0D1]', accent: 'text-[#3EB489]', text: 'text-gray-800', border: 'border-[#3EB489]' },
  { id: 'coral-reef', name: '珊瑚海礁', bg: 'bg-[#FF7F50]', card: 'bg-[#FFEFD5]', primary: 'bg-[#FF4500]', secondary: 'bg-[#F08080]', accent: 'text-[#FF4500]', text: 'text-gray-900', border: 'border-[#FF4500]' },
  { id: 'platinum-luxe', name: '白金奢华', bg: 'bg-[#E5E4E2]', card: 'bg-white', primary: 'bg-[#C0C0C0]', secondary: 'bg-[#DCDCDC]', accent: 'text-[#36454F]', text: 'text-gray-900', border: 'border-[#C0C0C0]' },
  { id: 'amber-glow', name: '琥珀流光', bg: 'bg-[#FFBF00]', card: 'bg-[#FFF8E7]', primary: 'bg-[#FF8C00]', secondary: 'bg-[#FFD700]', accent: 'text-[#B8860B]', text: 'text-gray-800', border: 'border-[#FF8C00]' },
  { id: 'tuscany-sun', name: '托斯卡纳', bg: 'bg-[#F4A460]', card: 'bg-[#FFFACD]', primary: 'bg-[#8B4513]', secondary: 'bg-[#D2B48C]', accent: 'text-[#8B4513]', text: 'text-gray-800', border: 'border-[#8B4513]' },
  { id: 'arctic-blue', name: '极地之蓝', bg: 'bg-[#F0F8FF]', card: 'bg-white', primary: 'bg-[#4682B4]', secondary: 'bg-[#B0C4DE]', accent: 'text-[#4682B4]', text: 'text-gray-900', border: 'border-[#4682B4]' },
  { id: 'vintage-paper', name: '复古书页', bg: 'bg-[#F5DEB3]', card: 'bg-[#FFFDD0]', primary: 'bg-[#8B4513]', secondary: 'bg-[#D2B48C]', accent: 'text-[#5D4037]', text: 'text-gray-800', border: 'border-[#8B4513]' }
];

export const STYLES: AppStyle[] = [
  { id: 'realistic', label: '真实写实', prompt: 'hyper-realistic, cinematic lighting, 8k, detailed textures' },
  { id: 'anime', label: '动漫风', prompt: 'japanese anime style, vibrant colors, expressive characters' },
  { id: 'ghibli', label: '宫崎骏', prompt: 'studio ghibli style, hand-drawn look, whimsical atmosphere, soft colors' },
  { id: 'healing', label: '治愈风', prompt: 'soft lighting, warm tones, comforting vibes, dreamy' },
  { id: 'cyberpunk', label: '赛博朋克', prompt: 'neon lights, futuristic, rainy night, high contrast' },
  { id: 'watercolor', label: '清新水彩', prompt: 'delicate watercolor, paper texture, bleeding colors' },
  { id: 'ink', label: '中国水墨', prompt: 'traditional chinese ink wash painting, brush strokes, minimalistic' },
  { id: '3d', label: '3D渲染', prompt: 'octane render, pixar style, soft shadows, rounded shapes' },
  { id: 'sketch', label: '铅笔素描', prompt: 'detailed pencil sketch, graphite texture, cross-hatching' },
  { id: 'oil', label: '古典油画', prompt: 'renaissance oil painting style, heavy brushwork, dramatic chiaroscuro' },
  { id: 'pixel', label: '复古像素', prompt: '16-bit pixel art, video game aesthetic' },
  { id: 'minimalist', label: '极简主义', prompt: 'clean lines, negative space, simple geometry' },
  { id: 'retro', label: '80年代复古', prompt: 'vhs glitch, synthwave aesthetic, grainy film' },
  { id: 'papercut', label: '剪纸艺术', prompt: 'layered paper cut style, depth of field, vibrant traditional colors' },
  { id: 'clay', label: '粘土定格', prompt: 'claymation style, fingerprint textures, stop motion feel' },
  { id: 'flat-design', label: '扁平插画', prompt: 'flat design illustration, solid colors, clean shapes' },
  { id: 'pop-art', label: '波普艺术', prompt: 'andy warhol style, high contrast, vibrant dots, repetitive patterns' },
  { id: 'charcoal', label: '木炭画', prompt: 'charcoal drawing, smudged textures, deep blacks' },
  { id: 'gouache', label: '不透明水彩', prompt: 'gouache painting style, vibrant and thick colors' },
  { id: 'vaporwave', label: '蒸汽波', prompt: 'vaporwave aesthetic, pink and blue gradients, low-poly statues' },
  { id: 'chalk', label: '粉笔画', prompt: 'chalkboard art, dusty textures, hand-lettered' },
  { id: 'origami', label: '折纸艺术', prompt: 'origami style, folded paper textures, sharp edges' },
  { id: 'woodcut', label: '木刻版画', prompt: 'traditional woodcut print, high contrast, rough textures' },
  { id: 'mosaic', label: '马赛克', prompt: 'mosaic tile art, small colored pieces, intricate patterns' },
  { id: 'noir', label: '黑色电影', prompt: 'film noir style, black and white, dramatic shadows, moody' },
  { id: 'blueprint', label: '蓝图风格', prompt: 'technical blueprint drawing, white lines on blue background' },
  { id: 'comic-book', label: '美漫风格', prompt: 'classic comic book style, ink outlines, halftone dots' },
  { id: 'street-art', label: '街头涂鸦', prompt: 'graffiti art, spray paint drips, vibrant and chaotic' },
  { id: 'isomatric', label: '等距视角', prompt: 'isometric 3d illustration, clean and structured' },
  { id: 'glitch-art', label: '故障艺术', prompt: 'digital glitch effects, distorted colors and lines' },
  { id: 'uise-style', label: '浮世绘', prompt: 'ukiyo-e japanese woodblock print style' },
  { id: 'lego', label: '积木风格', prompt: 'built with plastic bricks, vibrant colors, toy aesthetic' },
  { id: 'low-poly', label: '低多边形', prompt: 'low-poly 3d model, geometric aesthetic' },
  { id: 'fractal', label: '分形艺术', prompt: 'mathematical fractal patterns, infinite detail' },
  { id: 'surrealism', label: '超现实主义', prompt: 'salvador dali style, melting objects, dreamlike logic' },
  { id: 'rococo', label: '洛可可', prompt: 'ornate details, pastel colors, light and airy' },
  { id: 'baroque', label: '巴洛克', prompt: 'grandeur, intense light and shadow, rich detail' },
  { id: 'bauhaus', label: '包豪斯', prompt: 'primary colors, simple shapes, functional aesthetic' },
  { id: 'art-nouveau', label: '新艺术', prompt: 'organic curves, floral motifs, elegant lines' },
  { id: 'steampunk', label: '蒸汽朋克', prompt: 'brass gears, Victorian era tech, steam-powered' },
  { id: 'psychedelic', label: '迷幻风格', prompt: 'vibrant swirling colors, optical illusions' },
  { id: 'cinemagraph', label: '微动摄影', prompt: 'still photo with minor moving elements' },
  { id: 'double-exposure', label: '双重曝光', prompt: 'two images merged into one' },
  { id: 'infrared', label: '红外摄影', prompt: 'surreal colors, bright foliage, moody sky' },
  { id: 'macro', label: '微距摄影', prompt: 'extreme close-up, shallow depth of field, intricate detail' },
  { id: 'long-exposure', label: '长曝光', prompt: 'motion blur, smooth water, light trails' },
  { id: 'tilt-shift', label: '移轴摄影', prompt: 'miniature effect, selective focus' },
  { id: 'bokeh', label: '焦外虚化', prompt: 'soft out-of-focus background highlights' },
  { id: 'fisheye', label: '鱼眼镜头', prompt: 'extreme wide-angle distortion' },
  { id: 'drone-shot', label: '航拍视角', prompt: 'top-down aerial view' }
];

export const SUBJECTS: AppSubject[] = Array.from({ length: 500 }).map((_, i) => {
  // Preset specific animal interactions as requested
  if (i === 0) return { id: 'cat-tiger-talk', label: '橘猫和老虎在马年舞台说相声', category: '核心精选' };
  if (i === 1) return { id: 'radio-cats-blue', label: '电台直播间里的狸花猫和蓝猫', category: '核心精选' };
  if (i === 2) return { id: 'golden-horse-run', label: '身披金甲的骏马在雪地飞驰', category: '马年大吉' };
  if (i === 3) return { id: 'dragon-horse-spirit', label: '威武的龙马腾云驾雾迎接新年', category: '传统瑞兽' };
  if (i === 4) return { id: 'panda-dumplings', label: '大熊猫坐在红灯笼下包饺子', category: '国宝庆春' };
  
  const categories = ['萌宠百科', '传统瑞兽', '野性自然', '微观世界', '极地冒险', '海底奇缘', '飞鸟传奇', '昆虫王国'];
  const animalActions = [
    '弹吉他的萨摩耶', '在星空下跳舞的独角兽', '清晨洗脸的小浣熊', '举办下午茶会的长颈鹿', 
    '戴着厨师帽的考拉', '在花丛中捉迷藏的小刺猬', '滑着滑板的斗牛犬', '雪山顶上冥想的小熊猫',
    '正在冲浪的海豚', '参加马拉松的乌龟', '在古塔顶端筑巢的金雕', '深海中发光的座头鲸'
  ];
  
  const index = i % animalActions.length;
  const catIndex = i % categories.length;
  
  return {
    id: `subject-${i}`,
    label: `${animalActions[index]}${i}`,
    category: categories[catIndex]
  };
});

export const DURATIONS = [
  { value: 10, label: '10s' },
  { value: 15, label: '15s' },
  { value: 25, label: '25s' },
  { value: 50, label: '50s' },
  { value: 65, label: '65s' },
  { value: 120, label: '2min' },
  { value: 300, label: '5min' },
  { value: 600, label: '10min' }
];
