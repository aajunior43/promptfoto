import type { EditFormData } from "./EditForm";
import { 
  Camera, Sun, Palette, Sparkles, CloudRain, Star, 
  Zap, Heart, Crown, Mountain, Building, Flame 
} from "lucide-react";

interface Template {
  id: string;
  label: string;
  description: string;
  icon: typeof Camera;
  data: Partial<EditFormData>;
}

const templates: Template[] = [
  {
    id: "editorial_magazine",
    label: "Editorial de Revista",
    description: "Look de capa de revista com iluminação profissional",
    icon: Crown,
    data: {
      changes: "Aplicar tratamento editorial de alta moda, pele impecável com textura natural, iluminação de estúdio sofisticada",
      preserve: "Rosto, identidade, formato dos olhos, estrutura facial",
      style: "editorial",
      lighting: "studio",
      lightingDirection: "butterfly",
      realism: "high",
      colorTone: "natural",
      mood: "powerful",
      skinTexture: "dewy",
      expression: "confident",
      cameraLens: "85mm",
      depth: "shallow",
      postProcessing: ["sharpening", "color_grade"],
    },
  },
  {
    id: "golden_hour_dreamy",
    label: "Golden Hour Sonhador",
    description: "Luz dourada mágica com atmosfera etérea",
    icon: Sun,
    data: {
      changes: "Adicionar iluminação golden hour, brilho dourado na pele, raios de sol suaves, atmosfera mágica e quente",
      preserve: "Rosto, identidade, posição do corpo",
      style: "ethereal",
      lighting: "golden_hour",
      lightingDirection: "back",
      realism: "high",
      colorTone: "warm_gold",
      mood: "dreamy",
      skinTexture: "dewy",
      timeOfDay: "golden",
      weather: "clear",
      depth: "shallow",
      postProcessing: ["bokeh", "lens_flare", "color_grade"],
    },
  },
  {
    id: "cinematic_dramatic",
    label: "Cinematográfico Dramático",
    description: "Estilo de filme com alto contraste e sombras intensas",
    icon: Flame,
    data: {
      changes: "Aplicar look cinematográfico com contraste dramático, sombras profundas, color grading de filme",
      preserve: "Rosto, identidade, expressão facial",
      style: "cinematic",
      lighting: "dramatic",
      lightingDirection: "rembrandt",
      realism: "high",
      colorTone: "teal_orange",
      mood: "mysterious",
      skinTexture: "natural",
      depth: "moderate",
      postProcessing: ["grain", "vignette", "color_grade"],
    },
  },
  {
    id: "clean_studio",
    label: "Estúdio Profissional",
    description: "Fundo limpo com iluminação de estúdio perfeita",
    icon: Camera,
    data: {
      changes: "Trocar fundo para estúdio branco clean, iluminação profissional de três pontos, retoque sutil",
      preserve: "Rosto, identidade, roupas, acessórios",
      style: "realistic",
      lighting: "studio",
      lightingDirection: "loop",
      realism: "ultra",
      background: "studio_white",
      colorTone: "natural",
      mood: "calm",
      skinTexture: "smooth",
      cameraLens: "85mm",
      depth: "moderate",
      environment: "studio",
      postProcessing: ["sharpening"],
    },
  },
  {
    id: "vintage_retro",
    label: "Vintage Retrô",
    description: "Estética analógica com tons quentes e granulação",
    icon: Palette,
    data: {
      changes: "Aplicar estética de filme analógico vintage, tons desbotados, leve granulação, cores quentes suaves",
      preserve: "Rosto, identidade, composição geral",
      style: "vintage",
      lighting: "soft",
      realism: "medium",
      colorTone: "sepia",
      mood: "melancholic",
      skinTexture: "natural",
      postProcessing: ["grain", "vignette", "chromatic"],
    },
  },
  {
    id: "noir_mystery",
    label: "Film Noir",
    description: "Preto e branco dramático com sombras intensas",
    icon: Star,
    data: {
      changes: "Converter para estética film noir, alto contraste preto e branco, sombras marcantes, atmosfera de mistério",
      preserve: "Rosto, identidade, posição",
      style: "noir",
      lighting: "hard",
      lightingDirection: "split",
      realism: "high",
      colorTone: "bw",
      mood: "mysterious",
      skinTexture: "matte",
      expression: "mysterious",
      postProcessing: ["grain", "vignette", "sharpening"],
    },
  },
  {
    id: "romantic_soft",
    label: "Romântico Suave",
    description: "Tons pastéis com luz suave e atmosfera íntima",
    icon: Heart,
    data: {
      changes: "Aplicar atmosfera romântica, luz suave difusa, tons rosados e pastéis, brilho delicado na pele",
      preserve: "Rosto, identidade, expressão",
      style: "ethereal",
      lighting: "soft",
      lightingDirection: "front",
      realism: "high",
      colorTone: "pastel",
      mood: "romantic",
      skinTexture: "porcelain",
      depth: "very_shallow",
      postProcessing: ["bokeh", "color_grade"],
    },
  },
  {
    id: "urban_street",
    label: "Street / Urbano",
    description: "Vibe urbana com cenário de cidade e luz natural",
    icon: Building,
    data: {
      changes: "Ambientação urbana street style, luz natural da cidade, cores vibrantes, energia metropolitana",
      preserve: "Rosto, identidade, roupas",
      style: "documentary",
      lighting: "natural",
      realism: "high",
      colorTone: "vibrant",
      mood: "energetic",
      background: "urban",
      environment: "city",
      skinTexture: "natural",
      cameraLens: "35mm",
      depth: "moderate",
      postProcessing: ["sharpening", "color_grade"],
    },
  },
  {
    id: "nature_outdoor",
    label: "Natureza / Outdoor",
    description: "Cenário natural com iluminação orgânica",
    icon: Mountain,
    data: {
      changes: "Ambientação em cenário natural, luz do dia filtrada por árvores, tons verdes e terrosos, ar fresco",
      preserve: "Rosto, identidade",
      style: "realistic",
      lighting: "natural",
      realism: "high",
      colorTone: "natural",
      mood: "calm",
      background: "nature",
      environment: "forest",
      weather: "clear",
      timeOfDay: "morning",
      skinTexture: "natural",
      depth: "shallow",
      postProcessing: ["bokeh", "color_grade"],
    },
  },
  {
    id: "neon_cyberpunk",
    label: "Neon / Cyberpunk",
    description: "Luzes neon vibrantes com atmosfera futurista",
    icon: Zap,
    data: {
      changes: "Iluminação neon colorida, reflexos de luz roxa e azul na pele, atmosfera cyberpunk, cidade noturna futurista",
      preserve: "Rosto, identidade, formato do corpo",
      style: "dramatic",
      lighting: "neon",
      lightingDirection: "side",
      realism: "high",
      colorTone: "vibrant",
      mood: "edgy",
      environment: "city",
      timeOfDay: "night",
      skinTexture: "dewy",
      depth: "shallow",
      postProcessing: ["chromatic", "color_grade", "sharpening"],
    },
  },
  {
    id: "rainy_moody",
    label: "Chuvoso / Melancólico",
    description: "Chuva, reflexos e atmosfera cinematográfica",
    icon: CloudRain,
    data: {
      changes: "Adicionar chuva caindo, reflexos no chão molhado, gotículas de água, atmosfera melancólica cinematográfica",
      preserve: "Rosto, identidade, roupas",
      style: "cinematic",
      lighting: "overcast",
      realism: "ultra",
      colorTone: "desaturated",
      mood: "melancholic",
      weather: "rainy",
      environment: "outdoor",
      skinTexture: "dewy",
      postProcessing: ["grain", "vignette", "color_grade"],
    },
  },
  {
    id: "glamour_luxury",
    label: "Glamour / Luxo",
    description: "Estilo Hollywood com brilho e elegância",
    icon: Sparkles,
    data: {
      changes: "Look de glamour luxuoso, iluminação perfeita de Hollywood, pele radiante, brilho dourado sutil",
      preserve: "Rosto, identidade, proporções",
      style: "glamour",
      lighting: "studio",
      lightingDirection: "butterfly",
      realism: "hyper",
      colorTone: "warm_gold",
      mood: "powerful",
      skinTexture: "porcelain",
      expression: "confident",
      cameraLens: "85mm",
      depth: "shallow",
      postProcessing: ["sharpening", "color_grade", "bokeh"],
    },
  },
];

interface TemplatePresetsProps {
  onApply: (data: Partial<EditFormData>) => void;
}

const TemplatePresets = ({ onApply }: TemplatePresetsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary">
          Modelos Pré-Prontos
        </h3>
        <div className="flex-1 h-px bg-secondary" />
      </div>
      <p className="text-[11px] text-muted-foreground">
        Clique em um modelo para preencher automaticamente. Depois personalize como quiser.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => onApply(t.data)}
            className="neo-button rounded-xl p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg neo-convex flex items-center justify-center group-hover:shadow-neo transition-all">
                <t.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-xs font-bold text-foreground leading-tight">{t.label}</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-snug">{t.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplatePresets;
