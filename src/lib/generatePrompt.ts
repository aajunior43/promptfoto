import type { EditFormData } from "@/components/EditForm";

const styleMap: Record<string, string> = {
  realistic: "photorealistic, ultra high resolution, sharp focus",
  cinematic: "cinematic lighting, film grain, dramatic atmosphere, movie still quality",
  editorial: "high fashion editorial, professional photography, magazine quality",
  artistic: "artistic painterly style, digital art, fine art photography",
  vintage: "vintage film aesthetic, retro color grading, analog photography feel",
  minimalist: "clean minimalist composition, simple and elegant",
  dramatic: "dramatic high-contrast, bold shadows, intense atmosphere",
};

const lightingMap: Record<string, string> = {
  natural: "natural daylight, soft ambient light",
  golden_hour: "golden hour warm sunlight, long shadows, warm tones",
  studio: "professional studio lighting, controlled light setup",
  dramatic: "dramatic chiaroscuro lighting, strong contrast between light and shadow",
  soft: "soft diffused lighting, gentle and even illumination",
  neon: "neon-lit, colorful ambient lighting, vibrant light sources",
  keep: "preserve the original lighting conditions exactly",
};

const realismMap: Record<string, string> = {
  ultra: "ultra-realistic, indistinguishable from a real photograph, 8K resolution",
  high: "highly realistic, professional photography quality",
  medium: "semi-realistic with slight artistic enhancement",
  stylized: "stylized artistic interpretation while maintaining recognizable features",
};

const bgMap: Record<string, string> = {
  keep: "Keep the original background exactly as is",
  remove: "Replace background with a clean neutral studio backdrop",
  change: "Replace background with the described new scene",
  blur: "Apply natural bokeh blur to the background while keeping the subject sharp",
};

export function generatePrompt(data: EditFormData): {
  prompt: string;
  negativePrompt: string;
  tips: string[];
} {
  const parts: string[] = [];

  parts.push(
    "Edit the uploaded image with the following modifications while preserving the original composition and identity:"
  );

  if (data.changes) {
    parts.push(`\nMODIFICATIONS: ${data.changes}`);
  }

  if (data.preserve) {
    parts.push(`\nPRESERVE EXACTLY: ${data.preserve}`);
  }

  if (data.style && styleMap[data.style]) {
    parts.push(`\nSTYLE: ${styleMap[data.style]}`);
  }

  if (data.lighting && lightingMap[data.lighting]) {
    parts.push(`\nLIGHTING: ${lightingMap[data.lighting]}`);
  }

  if (data.realism && realismMap[data.realism]) {
    parts.push(`\nQUALITY: ${realismMap[data.realism]}`);
  }

  if (data.background && bgMap[data.background]) {
    parts.push(`\nBACKGROUND: ${bgMap[data.background]}`);
  }

  if (data.clothing) {
    parts.push(`\nCLOTHING/ACCESSORIES: ${data.clothing}`);
  }

  if (data.extras) {
    parts.push(`\nADDITIONAL DETAILS: ${data.extras}`);
  }

  parts.push(
    "\nMaintain facial features, skin texture, body proportions, and overall identity from the original image. Apply changes seamlessly and naturally."
  );

  // Negative prompt
  const negParts = [
    "deformed features",
    "distorted face",
    "extra limbs",
    "blurry",
    "low quality",
    "watermark",
    "text overlay",
    "unnatural skin",
    "artificial look",
  ];

  if (data.preserve?.toLowerCase().includes("rosto") || data.preserve?.toLowerCase().includes("face")) {
    negParts.push("changed facial features", "different face", "altered identity");
  }

  // Tips
  const tips: string[] = [
    "Use o modo img2img com denoising entre 0.3-0.5 para edições sutis, ou 0.6-0.8 para mudanças mais intensas.",
    "Para preservar identidade facial, mantenha o denoising abaixo de 0.5.",
  ];

  if (data.background === "change") {
    tips.push("Use inpainting com máscara no fundo para trocar cenários sem afetar o sujeito.");
  }

  if (data.style === "cinematic") {
    tips.push("Adicione leve granulação e vinheta na pós-produção para reforçar o look cinematográfico.");
  }

  if (data.realism === "ultra") {
    tips.push("Use modelos como SDXL ou Flux para resultados ultra-realistas com maior fidelidade.");
  }

  return {
    prompt: parts.join(""),
    negativePrompt: negParts.join(", "),
    tips,
  };
}
