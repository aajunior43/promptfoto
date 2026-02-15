import type { EditFormData } from "@/components/EditForm";

const styleMap: Record<string, string> = {
  realistic: "photorealistic, ultra high resolution, sharp focus, lifelike details",
  cinematic: "cinematic lighting, film grain, dramatic atmosphere, movie still quality, anamorphic lens feel",
  editorial: "high fashion editorial, professional photography, magazine cover quality, Vogue aesthetic",
  artistic: "artistic painterly style, fine art photography, gallery worthy",
  vintage: "vintage film aesthetic, retro color grading, analog photography feel, nostalgic atmosphere",
  minimalist: "clean minimalist composition, simple and elegant, negative space",
  dramatic: "dramatic high-contrast, bold shadows, intense atmosphere, powerful visual impact",
  ethereal: "ethereal dreamy atmosphere, soft glow, angelic quality, otherworldly beauty",
  noir: "film noir aesthetic, high contrast black and white undertones, mysterious shadows",
  glamour: "classic Hollywood glamour, golden age of cinema, timeless elegance",
  documentary: "documentary style, authentic and raw, candid moment captured",
  fashion: "high fashion photography, runway quality, avant-garde styling",
  surreal: "surrealist art style, dreamlike impossible scenes, Salvador Dali inspired",
  anime: "anime manga art style, cel shading, vibrant Japanese animation aesthetic",
  watercolor: "digital watercolor painting, soft color bleeds, artistic brush strokes",
  oil_painting: "oil painting style, thick brush strokes, classical fine art, museum quality",
  pop_art: "pop art style, bold colors, comic book aesthetic, Andy Warhol inspired",
  cyberpunk: "cyberpunk aesthetic, neon lights, futuristic tech, dystopian urban",
  fantasy: "epic fantasy art, magical atmosphere, enchanted lighting, otherworldly",
};

const moodMap: Record<string, string> = {
  warm: "warm inviting atmosphere, cozy and welcoming",
  cold: "cold distant atmosphere, icy blue undertones",
  romantic: "romantic dreamy mood, soft and intimate",
  mysterious: "mysterious intriguing atmosphere, enigmatic presence",
  energetic: "energetic dynamic mood, vibrant and alive",
  calm: "calm serene atmosphere, peaceful and tranquil",
  melancholic: "melancholic thoughtful mood, introspective",
  powerful: "powerful commanding presence, strong and confident",
  dreamy: "dreamy ethereal quality, soft focus dreamscape",
  edgy: "edgy bold aesthetic, unconventional and daring",
};

const lightingMap: Record<string, string> = {
  natural: "natural daylight, soft ambient light",
  golden_hour: "golden hour warm sunlight, long soft shadows, warm golden tones",
  blue_hour: "blue hour lighting, cool twilight tones, magical atmosphere",
  studio: "professional studio lighting, controlled light setup, three-point lighting",
  dramatic: "dramatic chiaroscuro lighting, strong contrast between light and shadow, Rembrandt-style",
  soft: "soft diffused lighting, gentle and even illumination, flattering light",
  hard: "hard directional light, sharp defined shadows, bold contrast",
  rim: "rim lighting, glowing edges, backlit silhouette effect",
  neon: "neon-lit, colorful ambient lighting, vibrant cyberpunk glow",
  candlelight: "warm candlelight, intimate flickering glow, romantic atmosphere",
  overcast: "overcast soft light, even diffused illumination, no harsh shadows",
  keep: "preserve the original lighting conditions exactly",
};

const lightingDirectionMap: Record<string, string> = {
  front: "frontal lighting, even illumination on face",
  side: "side lighting at 45 degrees, sculpting shadows",
  rembrandt: "Rembrandt lighting, triangular shadow on cheek",
  split: "split lighting, half face in shadow",
  butterfly: "butterfly/paramount lighting, shadow under nose",
  back: "backlighting, silhouette effect with rim light",
  loop: "loop lighting, small shadow from nose to cheek",
  top: "top-down lighting, overhead illumination",
};

const realismMap: Record<string, string> = {
  ultra: "ultra-realistic, indistinguishable from professional photograph, 8K resolution, extreme detail",
  high: "highly realistic, professional photography quality, crisp details",
  medium: "semi-realistic with artistic enhancement",
  stylized: "stylized artistic interpretation while maintaining recognizable features",
  hyper: "hyper-realistic, beyond photography, perfect skin and details",
};

const colorToneMap: Record<string, string> = {
  natural: "natural balanced colors, true to life",
  warm_orange: "warm orange tones, sunset warmth",
  warm_gold: "golden warm tones, luxurious feel",
  cool_blue: "cool blue tones, crisp and clean",
  teal_orange: "teal and orange color grading, cinematic blockbuster look",
  desaturated: "desaturated muted colors, subtle and understated",
  vibrant: "vibrant saturated colors, punchy and bold",
  pastel: "soft pastel tones, gentle and delicate",
  moody: "moody low-key colors, atmospheric and intense",
  sepia: "sepia toned, vintage warmth",
  bw: "black and white, high contrast monochrome",
};

const bgMap: Record<string, string> = {
  keep: "keep the original background exactly as is",
  studio_white: "clean white studio background, high-key setup",
  studio_black: "deep black studio background, low-key setup",
  studio_gray: "neutral gray studio backdrop, professional portrait setting",
  gradient: "soft gradient background, smooth color transition",
  blur: "background with natural bokeh blur, subject isolation",
  nature: "natural outdoor environment, organic setting",
  urban: "urban cityscape background, modern metropolitan setting",
  interior: "elegant interior setting, sophisticated architecture",
  custom: "",
};

const cameraAngleMap: Record<string, string> = {
  eye_level: "eye level shot, natural perspective",
  low: "low angle shot, heroic powerful perspective",
  high: "high angle shot, looking down",
  dutch: "dutch angle, tilted dramatic perspective",
  birds_eye: "bird's eye view, overhead perspective",
  worms_eye: "worm's eye view, extreme low angle",
};

const lensMap: Record<string, string> = {
  "35mm": "shot on 35mm lens, versatile natural perspective",
  "50mm": "shot on 50mm lens, natural human eye perspective",
  "85mm": "shot on 85mm portrait lens, flattering compression, beautiful bokeh",
  "135mm": "shot on 135mm lens, strong compression, dreamy background separation",
  "24mm": "shot on 24mm wide angle, environmental portrait",
  "200mm": "shot on 200mm telephoto, extreme background compression",
  macro: "macro lens detail, extreme close-up clarity",
};

const depthMap: Record<string, string> = {
  shallow: "shallow depth of field f/1.4, creamy bokeh, strong subject separation",
  moderate: "moderate depth of field f/2.8, balanced focus",
  deep: "deep depth of field f/8, everything in sharp focus",
  very_shallow: "extremely shallow depth of field f/1.2, razor thin focus plane",
};

const skinMap: Record<string, string> = {
  natural: "natural skin texture with pores and details visible, realistic",
  smooth: "slightly smoothed skin, subtle retouching while keeping texture",
  porcelain: "porcelain smooth skin, beauty retouching",
  matte: "matte skin finish, no shine or oiliness",
  dewy: "dewy glowing skin, healthy luminous finish",
  tanned: "sun-kissed tanned skin, warm bronze tones",
};

const expressionMap: Record<string, string> = {
  keep: "preserve original expression",
  smile: "natural genuine smile, warm and approachable",
  serious: "serious neutral expression, composed and focused",
  confident: "confident powerful expression, self-assured",
  mysterious: "mysterious enigmatic look, intriguing gaze",
  joyful: "joyful radiant expression, genuine happiness",
  pensive: "pensive thoughtful expression, introspective mood",
  seductive: "seductive alluring expression, captivating gaze",
  fierce: "fierce intense expression, powerful stare",
};

const poseMap: Record<string, string> = {
  keep: "preserve original pose and position",
  portrait: "classic portrait pose, facing camera",
  three_quarter: "three-quarter turn, dynamic angle",
  profile: "profile view, side silhouette",
  over_shoulder: "looking over shoulder, intriguing angle",
  dynamic: "dynamic action pose, movement and energy",
  candid: "candid natural pose, unposed authentic moment",
  editorial: "editorial fashion pose, high fashion styling",
};

const environmentMap: Record<string, string> = {
  indoor: "indoor setting",
  outdoor: "outdoor location",
  studio: "professional photography studio",
  beach: "beach seaside location, sand and waves",
  forest: "forest woodland setting, trees and nature",
  mountain: "mountain landscape, majestic peaks",
  city: "urban city environment, modern architecture",
  desert: "desert landscape, sand dunes",
  garden: "garden setting, flowers and greenery",
  rooftop: "rooftop location, city skyline view",
  underwater: "underwater scene, blue light, bubbles, aquatic atmosphere",
  castle: "grand castle or palace interior, ornate architecture, regal atmosphere",
  cafe: "cozy café or restaurant, warm ambient lighting, intimate setting",
  library: "elegant library, bookshelves, warm reading light, intellectual atmosphere",
  ruins: "abandoned ruins, decayed architecture, moody and atmospheric",
  snow: "snowy winter landscape, white powder, frost-covered scenery",
  neon_city: "neon-lit nighttime city, reflections on wet streets, cyberpunk vibe",
};

const weatherMap: Record<string, string> = {
  clear: "clear sunny weather, bright daylight",
  cloudy: "partly cloudy sky, diffused sunlight",
  overcast: "overcast sky, soft even light",
  rainy: "rainy weather, wet surfaces and droplets",
  foggy: "foggy misty atmosphere, ethereal haze",
  snowy: "snowy winter scene, white powder",
  stormy: "stormy dramatic sky, intense atmosphere",
  na: "",
};

const timeMap: Record<string, string> = {
  dawn: "dawn early morning light, soft pink and orange hues",
  morning: "morning daylight, fresh and bright",
  noon: "midday sun, bright overhead light",
  golden: "golden hour light, warm magical glow",
  sunset: "sunset light, rich orange and purple sky",
  blue: "blue hour twilight, cool magical tones",
  night: "nighttime, artificial and ambient lighting",
  studio: "studio lighting, controlled timeless setup",
};

const postProcessingMap: Record<string, string> = {
  bokeh: "beautiful bokeh background blur",
  grain: "subtle film grain texture",
  vignette: "gentle vignette around edges",
  hdr: "HDR dynamic range enhancement",
  sharpening: "enhanced sharpness and clarity",
  color_grade: "professional cinematic color grading",
  lens_flare: "artistic lens flare elements",
  chromatic: "subtle chromatic aberration for realism",
  glow: "soft dreamy glow effect, ethereal light bloom",
  halation: "film halation effect, warm light bleed around highlights",
  double_exposure: "double exposure blending effect, artistic overlay",
  tilt_shift: "tilt-shift miniature effect, selective focus plane",
  motion_blur: "artistic motion blur, sense of movement and dynamism",
  light_leaks: "vintage light leaks, warm color bleeds from film edges",
};

export function generatePrompt(data: EditFormData): {
  prompt: string;
  negativePrompt: string;
  tips: string[];
} {
  const parts: string[] = [];

  // Opening
  parts.push(
    "Edit the uploaded reference image with the following precise modifications while preserving identity and key features:\n"
  );

  // Modifications
  if (data.changes) {
    parts.push(`\nMODIFICATIONS REQUIRED:\n${data.changes}`);
  }

  // Preserve
  if (data.preserve) {
    parts.push(`\nMUST PRESERVE EXACTLY: ${data.preserve}`);
  }

  // Expression and pose
  const subjectDetails: string[] = [];
  if (data.expression && expressionMap[data.expression]) {
    subjectDetails.push(expressionMap[data.expression]);
  }
  if (data.pose && poseMap[data.pose]) {
    subjectDetails.push(poseMap[data.pose]);
  }
  if (data.skinTexture && skinMap[data.skinTexture]) {
    subjectDetails.push(skinMap[data.skinTexture]);
  }
  if (data.hairStyle) {
    subjectDetails.push(`hair: ${data.hairStyle}`);
  }
  if (subjectDetails.length > 0) {
    parts.push(`\nSUBJECT DETAILS: ${subjectDetails.join(", ")}`);
  }

  // Clothing
  if (data.clothing) {
    parts.push(`\nCLOTHING & ACCESSORIES: ${data.clothing}`);
  }

  // Style and mood
  const styleDetails: string[] = [];
  if (data.style && styleMap[data.style]) {
    styleDetails.push(styleMap[data.style]);
  }
  if (data.mood && moodMap[data.mood]) {
    styleDetails.push(moodMap[data.mood]);
  }
  if (data.realism && realismMap[data.realism]) {
    styleDetails.push(realismMap[data.realism]);
  }
  if (data.colorTone && colorToneMap[data.colorTone]) {
    styleDetails.push(colorToneMap[data.colorTone]);
  }
  if (styleDetails.length > 0) {
    parts.push(`\nSTYLE & QUALITY: ${styleDetails.join(", ")}`);
  }

  // Lighting
  const lightDetails: string[] = [];
  if (data.lighting && lightingMap[data.lighting]) {
    lightDetails.push(lightingMap[data.lighting]);
  }
  if (data.lightingDirection && lightingDirectionMap[data.lightingDirection]) {
    lightDetails.push(lightingDirectionMap[data.lightingDirection]);
  }
  if (lightDetails.length > 0) {
    parts.push(`\nLIGHTING: ${lightDetails.join(", ")}`);
  }

  // Camera
  const cameraDetails: string[] = [];
  if (data.cameraAngle && cameraAngleMap[data.cameraAngle]) {
    cameraDetails.push(cameraAngleMap[data.cameraAngle]);
  }
  if (data.cameraLens && lensMap[data.cameraLens]) {
    cameraDetails.push(lensMap[data.cameraLens]);
  }
  if (data.depth && depthMap[data.depth]) {
    cameraDetails.push(depthMap[data.depth]);
  }
  if (cameraDetails.length > 0) {
    parts.push(`\nCAMERA: ${cameraDetails.join(", ")}`);
  }

  // Environment
  const envDetails: string[] = [];
  if (data.background && bgMap[data.background]) {
    if (data.background === "custom" && data.backgroundDescription) {
      envDetails.push(`custom background: ${data.backgroundDescription}`);
    } else if (bgMap[data.background]) {
      envDetails.push(bgMap[data.background]);
    }
  }
  if (data.environment && environmentMap[data.environment]) {
    envDetails.push(environmentMap[data.environment]);
  }
  if (data.timeOfDay && timeMap[data.timeOfDay]) {
    envDetails.push(timeMap[data.timeOfDay]);
  }
  if (data.weather && weatherMap[data.weather]) {
    envDetails.push(weatherMap[data.weather]);
  }
  if (envDetails.length > 0) {
    parts.push(`\nENVIRONMENT & SETTING: ${envDetails.join(", ")}`);
  }

  // Post processing
  if (data.postProcessing && data.postProcessing.length > 0) {
    const ppDetails = data.postProcessing
      .map((p) => postProcessingMap[p])
      .filter(Boolean);
    if (ppDetails.length > 0) {
      parts.push(`\nPOST-PROCESSING: ${ppDetails.join(", ")}`);
    }
  }

  // Extras
  if (data.extras) {
    parts.push(`\nADDITIONAL ENHANCEMENTS: ${data.extras}`);
  }

  // Closing
  parts.push(
    "\n\nMaintain facial features, skin texture, body proportions, and overall identity from the original image. Apply all changes seamlessly and naturally. Professional retouching quality."
  );

  // Negative prompt
  const negParts = [
    "deformed features",
    "distorted face",
    "extra limbs",
    "mutated hands",
    "blurry",
    "low quality",
    "jpeg artifacts",
    "watermark",
    "text overlay",
    "unnatural skin",
    "plastic artificial look",
    "oversaturated",
    "overexposed",
    "underexposed",
    "bad anatomy",
    "wrong proportions",
  ];

  if (data.preserve?.toLowerCase().includes("rosto") || data.preserve?.toLowerCase().includes("face")) {
    negParts.push("changed facial features", "different face", "altered identity", "wrong face");
  }

  if (data.negativeExtras) {
    negParts.push(data.negativeExtras);
  }

  // Tips
  const tips: string[] = [
    "Use modo img2img com denoising 0.3-0.5 para edições sutis, ou 0.6-0.8 para mudanças maiores.",
    "Para preservar identidade facial, mantenha denoising abaixo de 0.5 e use controlnet face.",
  ];

  if (data.background === "custom" || data.background === "change") {
    tips.push("Use inpainting com máscara no fundo para trocar cenários sem afetar o sujeito principal.");
  }

  if (data.style === "cinematic" || data.style === "noir") {
    tips.push("Para look cinematográfico, adicione granulação e ajuste curvas de cor na pós-produção.");
  }

  if (data.realism === "ultra" || data.realism === "hyper") {
    tips.push("Use modelos como SDXL, Flux ou Midjourney v6 para resultados ultra-realistas.");
  }

  if (data.postProcessing?.includes("bokeh") || data.depth === "shallow") {
    tips.push("Para bokeh natural, use ControlNet depth ou gere com modelo treinado em fotografia.");
  }

  if (data.lighting === "dramatic" || data.lightingDirection === "rembrandt") {
    tips.push("Iluminação dramática funciona melhor com faces angulares e contraste bem definido.");
  }

  return {
    prompt: parts.join(""),
    negativePrompt: negParts.join(", "),
    tips: tips.slice(0, 5),
  };
}
