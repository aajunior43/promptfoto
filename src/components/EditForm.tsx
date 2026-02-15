import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export interface EditFormData {
  changes: string;
  preserve: string;
  style: string;
  lighting: string;
  lightingDirection: string;
  realism: string;
  background: string;
  backgroundDescription: string;
  clothing: string;
  colorTone: string;
  mood: string;
  cameraAngle: string;
  cameraLens: string;
  depth: string;
  skinTexture: string;
  hairStyle: string;
  expression: string;
  pose: string;
  environment: string;
  weather: string;
  timeOfDay: string;
  postProcessing: string[];
  extras: string;
  negativeExtras: string;
  // New fields
  composition: string;
  framing: string;
  aspectRatio: string;
  intensity: string;
  filmStock: string;
  artMedium: string;
  colorScheme: string;
  texture: string;
  resolution: string;
  bodyType: string;
  age: string;
  ethnicity: string;
  makeup: string;
  accessories: string;
  lightColor: string;
  shadowStyle: string;
  perspective: string;
  season: string;
  props: string;
  negativePromptPreset: string[];
}

interface EditFormProps {
  data: EditFormData;
  onChange: (data: EditFormData) => void;
}

const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <div className="space-y-2 animate-fade-in">
    <Label className="text-sm font-semibold text-foreground">{label}</Label>
    {hint && <p className="text-[11px] text-muted-foreground -mt-1">{hint}</p>}
    {children}
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary" />
      <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary">
        {title}
      </h3>
      <div className="flex-1 h-px bg-secondary" />
    </div>
    {children}
  </div>
);

const postProcessingOptions = [
  { id: "bokeh", label: "Bokeh / Desfoque de fundo" },
  { id: "grain", label: "Granulação de filme" },
  { id: "vignette", label: "Vinheta" },
  { id: "hdr", label: "HDR" },
  { id: "sharpening", label: "Nitidez extra" },
  { id: "color_grade", label: "Color grading cinematográfico" },
  { id: "lens_flare", label: "Lens flare" },
  { id: "chromatic", label: "Aberração cromática sutil" },
  { id: "glow", label: "Glow / Brilho suave" },
  { id: "halation", label: "Halation (brilho de filme)" },
  { id: "double_exposure", label: "Dupla exposição" },
  { id: "tilt_shift", label: "Tilt-shift / Miniatura" },
  { id: "motion_blur", label: "Motion blur artístico" },
  { id: "light_leaks", label: "Light leaks / Vazamento de luz" },
  { id: "sun_rays", label: "Raios de sol / God rays" },
  { id: "dust_particles", label: "Partículas de poeira flutuantes" },
  { id: "prism", label: "Efeito prisma / Rainbow" },
  { id: "smoke", label: "Fumaça / Névoa atmosférica" },
  { id: "sparkles", label: "Brilhos / Sparkles" },
  { id: "reflection", label: "Reflexos de água / Espelho" },
  { id: "long_exposure", label: "Longa exposição" },
  { id: "cross_process", label: "Cross-processing" },
  { id: "infrared", label: "Infravermelho" },
  { id: "cyanotype", label: "Cianotipia" },
  { id: "duotone", label: "Duotone" },
  { id: "split_tone", label: "Split toning" },
  { id: "posterize", label: "Posterização" },
  { id: "solarize", label: "Solarização" },
];

const negativePresetOptions = [
  { id: "deformed", label: "Sem deformações" },
  { id: "blurry", label: "Sem desfoque indesejado" },
  { id: "watermark", label: "Sem marca d'água / texto" },
  { id: "oversaturated", label: "Sem saturação excessiva" },
  { id: "plastic_skin", label: "Sem pele plástica / artificial" },
  { id: "bad_hands", label: "Sem mãos distorcidas" },
  { id: "bad_eyes", label: "Sem olhos irregulares" },
  { id: "bad_teeth", label: "Sem dentes estranhos" },
  { id: "cropped", label: "Sem cortes indesejados" },
  { id: "low_quality", label: "Sem baixa qualidade" },
  { id: "noise", label: "Sem ruído digital" },
  { id: "cartoon", label: "Sem look cartoon" },
  { id: "anime_style", label: "Sem estilo anime (se realista)" },
  { id: "extra_fingers", label: "Sem dedos extras" },
];

const EditForm = ({ data, onChange }: EditFormProps) => {
  const set = (key: keyof EditFormData, value: string | string[]) =>
    onChange({ ...data, [key]: value });

  const togglePostProcessing = (id: string) => {
    const current = data.postProcessing || [];
    const updated = current.includes(id)
      ? current.filter((p) => p !== id)
      : [...current, id];
    set("postProcessing", updated);
  };

  const toggleNegativePreset = (id: string) => {
    const current = data.negativePromptPreset || [];
    const updated = current.includes(id)
      ? current.filter((p) => p !== id)
      : [...current, id];
    set("negativePromptPreset", updated);
  };

  return (
    <div className="space-y-8">
      {/* SUJEITO */}
      <Section title="Sujeito / Pessoa">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Expressão facial">
            <Select value={data.expression} onValueChange={(v) => set("expression", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="smile">Sorriso natural</SelectItem>
                <SelectItem value="serious">Sério / Neutro</SelectItem>
                <SelectItem value="confident">Confiante</SelectItem>
                <SelectItem value="mysterious">Misterioso</SelectItem>
                <SelectItem value="joyful">Alegre / Radiante</SelectItem>
                <SelectItem value="pensive">Pensativo</SelectItem>
                <SelectItem value="seductive">Sedutor</SelectItem>
                <SelectItem value="fierce">Intenso / Feroz</SelectItem>
                <SelectItem value="surprised">Surpreso</SelectItem>
                <SelectItem value="angry">Raivoso / Determinado</SelectItem>
                <SelectItem value="sad">Triste / Melancólico</SelectItem>
                <SelectItem value="laughing">Gargalhando</SelectItem>
                <SelectItem value="stoic">Estoico / Impassível</SelectItem>
                <SelectItem value="dreamy">Sonhador / Distraído</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Pose / Posição">
            <Select value={data.pose} onValueChange={(v) => set("pose", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="portrait">Retrato frontal</SelectItem>
                <SelectItem value="three_quarter">Três quartos</SelectItem>
                <SelectItem value="profile">Perfil</SelectItem>
                <SelectItem value="over_shoulder">Olhando sobre o ombro</SelectItem>
                <SelectItem value="dynamic">Pose dinâmica</SelectItem>
                <SelectItem value="candid">Espontânea / Natural</SelectItem>
                <SelectItem value="editorial">Editorial / Fashion</SelectItem>
                <SelectItem value="sitting">Sentado</SelectItem>
                <SelectItem value="leaning">Apoiado / Encostado</SelectItem>
                <SelectItem value="walking">Caminhando</SelectItem>
                <SelectItem value="dancing">Dançando</SelectItem>
                <SelectItem value="lying">Deitado</SelectItem>
                <SelectItem value="crossed_arms">Braços cruzados</SelectItem>
                <SelectItem value="hands_in_pockets">Mãos nos bolsos</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Textura da pele">
            <Select value={data.skinTexture} onValueChange={(v) => set("skinTexture", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="natural">Natural com textura real</SelectItem>
                <SelectItem value="smooth">Levemente suavizada</SelectItem>
                <SelectItem value="porcelain">Porcelana / Muito suave</SelectItem>
                <SelectItem value="matte">Matte / Sem brilho</SelectItem>
                <SelectItem value="dewy">Dewy / Brilho saudável</SelectItem>
                <SelectItem value="tanned">Bronzeada</SelectItem>
                <SelectItem value="freckled">Com sardas</SelectItem>
                <SelectItem value="aged">Envelhecida / Com rugas</SelectItem>
                <SelectItem value="wet">Molhada / Com gotas</SelectItem>
                <SelectItem value="glitter">Com glitter / Brilho</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Maquiagem">
            <Select value={data.makeup} onValueChange={(v) => set("makeup", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="natural">Natural / Sem maquiagem</SelectItem>
                <SelectItem value="light">Leve e sutil</SelectItem>
                <SelectItem value="glamorous">Glamourosa / Full glam</SelectItem>
                <SelectItem value="smokey">Olho esfumado / Smokey</SelectItem>
                <SelectItem value="editorial_mk">Editorial artístico</SelectItem>
                <SelectItem value="gothic">Gótico / Dark</SelectItem>
                <SelectItem value="avant_garde">Avant-garde / Artístico</SelectItem>
                <SelectItem value="dewy_mk">Dewy / Glow natural</SelectItem>
                <SelectItem value="retro_mk">Retrô / Vintage</SelectItem>
                <SelectItem value="bold_lips">Lábios bold / Vermelho</SelectItem>
                <SelectItem value="no_makeup">Sem maquiagem (bare face)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field label="Cabelo (modificações)">
          <Input
            placeholder="Ex: manter original, ou: loiro platinado, cacheado, preso em coque..."
            value={data.hairStyle}
            onChange={(e) => set("hairStyle", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <Field label="Acessórios extras">
          <Input
            placeholder="Ex: brincos de argola, chapéu, óculos escuros, colar, tiara, luvas..."
            value={data.accessories}
            onChange={(e) => set("accessories", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <Field label="Props / Objetos em cena">
          <Input
            placeholder="Ex: buquê de flores, guarda-chuva, livro, instrumento musical, espada..."
            value={data.props}
            onChange={(e) => set("props", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background focus:ring-2 focus:ring-primary/30"
          />
        </Field>
      </Section>

      {/* MODIFICAÇÕES */}
      <Section title="Modificações Desejadas">
        <Field label="O que deve ser alterado?" hint="Liste todas as mudanças que deseja aplicar">
          <Textarea
            placeholder="Ex: trocar o fundo por uma floresta, mudar a roupa para vestido vermelho, adicionar iluminação dramática..."
            value={data.changes}
            onChange={(e) => set("changes", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none min-h-[90px] focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <Field label="O que DEVE permanecer igual?" hint="Elementos que não podem ser alterados de forma alguma">
          <Textarea
            placeholder="Ex: rosto, expressão, identidade, posição do corpo, mãos..."
            value={data.preserve}
            onChange={(e) => set("preserve", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none min-h-[70px] focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <Field label="Roupas / Acessórios">
          <Textarea
            placeholder="Ex: manter roupa atual, ou: vestido de gala preto, óculos aviador, colar de pérolas, relógio de luxo..."
            value={data.clothing}
            onChange={(e) => set("clothing", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none focus:ring-2 focus:ring-primary/30"
          />
        </Field>

        <Field label="Intensidade da edição" hint="Quão forte devem ser as mudanças aplicadas">
          <Select value={data.intensity} onValueChange={(v) => set("intensity", v)}>
            <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="neo-raised rounded-xl border-none">
              <SelectItem value="subtle">Sutil (mudanças quase imperceptíveis)</SelectItem>
              <SelectItem value="light">Leve (ajustes finos)</SelectItem>
              <SelectItem value="moderate">Moderada (mudanças claras)</SelectItem>
              <SelectItem value="strong">Forte (transformação visível)</SelectItem>
              <SelectItem value="extreme">Extrema (transformação total)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </Section>

      {/* ESTILO VISUAL */}
      <Section title="Estilo Visual">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Estilo / Atmosfera">
            <Select value={data.style} onValueChange={(v) => set("style", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="realistic">Fotorrealista</SelectItem>
                <SelectItem value="cinematic">Cinematográfico</SelectItem>
                <SelectItem value="editorial">Editorial / Moda</SelectItem>
                <SelectItem value="artistic">Artístico / Fine Art</SelectItem>
                <SelectItem value="vintage">Vintage / Retrô</SelectItem>
                <SelectItem value="minimalist">Minimalista</SelectItem>
                <SelectItem value="dramatic">Dramático</SelectItem>
                <SelectItem value="ethereal">Etéreo / Sonhador</SelectItem>
                <SelectItem value="noir">Film Noir</SelectItem>
                <SelectItem value="glamour">Glamour / Hollywood</SelectItem>
                <SelectItem value="documentary">Documental</SelectItem>
                <SelectItem value="fashion">High Fashion</SelectItem>
                <SelectItem value="surreal">Surrealista</SelectItem>
                <SelectItem value="anime">Anime / Manga</SelectItem>
                <SelectItem value="watercolor">Aquarela digital</SelectItem>
                <SelectItem value="oil_painting">Pintura a óleo</SelectItem>
                <SelectItem value="pop_art">Pop Art</SelectItem>
                <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                <SelectItem value="fantasy">Fantasia épica</SelectItem>
                <SelectItem value="steampunk">Steampunk</SelectItem>
                <SelectItem value="art_deco">Art Deco</SelectItem>
                <SelectItem value="gothic">Gótico / Dark</SelectItem>
                <SelectItem value="vaporwave">Vaporwave</SelectItem>
                <SelectItem value="retro_80s">Retrô anos 80</SelectItem>
                <SelectItem value="pixel_art">Pixel Art</SelectItem>
                <SelectItem value="comic_book">HQ / Comic Book</SelectItem>
                <SelectItem value="impressionist">Impressionista</SelectItem>
                <SelectItem value="baroque">Barroco</SelectItem>
                <SelectItem value="grunge">Grunge</SelectItem>
                <SelectItem value="pastel_goth">Pastel Goth</SelectItem>
                <SelectItem value="dark_academia">Dark Academia</SelectItem>
                <SelectItem value="cottagecore">Cottagecore</SelectItem>
                <SelectItem value="afrofuturism">Afrofuturismo</SelectItem>
                <SelectItem value="3d_render">3D Render</SelectItem>
                <SelectItem value="sketch">Esboço / Sketch</SelectItem>
                <SelectItem value="collage">Colagem artística</SelectItem>
                <SelectItem value="low_poly">Low Poly</SelectItem>
                <SelectItem value="glitch_art">Glitch Art</SelectItem>
                <SelectItem value="art_nouveau">Art Nouveau</SelectItem>
                <SelectItem value="brutalist">Brutalista</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Mood / Clima">
            <Select value={data.mood} onValueChange={(v) => set("mood", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="warm">Quente / Acolhedor</SelectItem>
                <SelectItem value="cold">Frio / Distante</SelectItem>
                <SelectItem value="romantic">Romântico</SelectItem>
                <SelectItem value="mysterious">Misterioso</SelectItem>
                <SelectItem value="energetic">Energético</SelectItem>
                <SelectItem value="calm">Calmo / Sereno</SelectItem>
                <SelectItem value="melancholic">Melancólico</SelectItem>
                <SelectItem value="powerful">Poderoso / Impactante</SelectItem>
                <SelectItem value="dreamy">Sonhador</SelectItem>
                <SelectItem value="edgy">Ousado / Edgy</SelectItem>
                <SelectItem value="nostalgic">Nostálgico</SelectItem>
                <SelectItem value="hopeful">Esperançoso / Luminoso</SelectItem>
                <SelectItem value="dark">Sombrio / Dark</SelectItem>
                <SelectItem value="whimsical">Fantástico / Whimsical</SelectItem>
                <SelectItem value="epic">Épico / Grandioso</SelectItem>
                <SelectItem value="intimate">Íntimo / Pessoal</SelectItem>
                <SelectItem value="eerie">Inquietante / Eerie</SelectItem>
                <SelectItem value="playful">Lúdico / Divertido</SelectItem>
                <SelectItem value="rebellious">Rebelde / Provocante</SelectItem>
                <SelectItem value="sophisticated">Sofisticado / Refinado</SelectItem>
                <SelectItem value="raw">Cru / Raw</SelectItem>
                <SelectItem value="euphoric">Eufórico / Intenso</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Nível de Realismo">
            <Select value={data.realism} onValueChange={(v) => set("realism", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="ultra">Ultra-realista (8K)</SelectItem>
                <SelectItem value="high">Alto realismo</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="stylized">Estilizado</SelectItem>
                <SelectItem value="hyper">Hiper-realista</SelectItem>
                <SelectItem value="abstract">Abstrato</SelectItem>
                <SelectItem value="cartoon">Cartoon / Ilustração</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tom de Cor Geral">
            <Select value={data.colorTone} onValueChange={(v) => set("colorTone", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="natural">Natural / Neutro</SelectItem>
                <SelectItem value="warm_orange">Quente / Laranja</SelectItem>
                <SelectItem value="warm_gold">Dourado</SelectItem>
                <SelectItem value="cool_blue">Frio / Azulado</SelectItem>
                <SelectItem value="teal_orange">Teal & Orange</SelectItem>
                <SelectItem value="desaturated">Dessaturado</SelectItem>
                <SelectItem value="vibrant">Vibrante / Saturado</SelectItem>
                <SelectItem value="pastel">Pastel / Suave</SelectItem>
                <SelectItem value="moody">Moody / Low-key</SelectItem>
                <SelectItem value="sepia">Sépia</SelectItem>
                <SelectItem value="bw">Preto e Branco</SelectItem>
                <SelectItem value="neon_colors">Neon / Fluorescente</SelectItem>
                <SelectItem value="earth_tones">Terroso / Earth tones</SelectItem>
                <SelectItem value="jewel_tones">Tons de joia / Ricos</SelectItem>
                <SelectItem value="muted">Abafado / Muted</SelectItem>
                <SelectItem value="high_contrast">Alto contraste</SelectItem>
                <SelectItem value="duotone_color">Duotone</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Meio artístico">
            <Select value={data.artMedium} onValueChange={(v) => set("artMedium", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="photography">Fotografia</SelectItem>
                <SelectItem value="digital_art">Arte digital</SelectItem>
                <SelectItem value="3d_render">3D Render / CGI</SelectItem>
                <SelectItem value="oil_canvas">Pintura a óleo em tela</SelectItem>
                <SelectItem value="watercolor_paper">Aquarela em papel</SelectItem>
                <SelectItem value="charcoal">Carvão / Grafite</SelectItem>
                <SelectItem value="pencil">Lápis / Desenho a mão</SelectItem>
                <SelectItem value="pastel_medium">Pastel seco</SelectItem>
                <SelectItem value="ink">Tinta nanquim</SelectItem>
                <SelectItem value="acrylic">Acrílica</SelectItem>
                <SelectItem value="mixed_media">Mídia mista</SelectItem>
                <SelectItem value="sculpture">Escultura digital</SelectItem>
                <SelectItem value="embroidery">Bordado</SelectItem>
                <SelectItem value="mosaic">Mosaico</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Film Stock">
            <Select value={data.filmStock} onValueChange={(v) => set("filmStock", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="none">Nenhum (digital)</SelectItem>
                <SelectItem value="portra_400">Kodak Portra 400</SelectItem>
                <SelectItem value="portra_800">Kodak Portra 800</SelectItem>
                <SelectItem value="ektar_100">Kodak Ektar 100</SelectItem>
                <SelectItem value="gold_200">Kodak Gold 200</SelectItem>
                <SelectItem value="tri_x">Kodak Tri-X 400</SelectItem>
                <SelectItem value="superia_400">Fuji Superia 400</SelectItem>
                <SelectItem value="pro_400h">Fuji Pro 400H</SelectItem>
                <SelectItem value="velvia_50">Fuji Velvia 50</SelectItem>
                <SelectItem value="cinestill_800t">CineStill 800T</SelectItem>
                <SelectItem value="ilford_hp5">Ilford HP5+</SelectItem>
                <SelectItem value="ilford_delta">Ilford Delta 3200</SelectItem>
                <SelectItem value="polaroid">Polaroid</SelectItem>
                <SelectItem value="lomography">Lomography</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Esquema de cores">
            <Select value={data.colorScheme} onValueChange={(v) => set("colorScheme", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="monochromatic">Monocromático</SelectItem>
                <SelectItem value="complementary">Complementar</SelectItem>
                <SelectItem value="analogous">Análogo</SelectItem>
                <SelectItem value="triadic">Triádico</SelectItem>
                <SelectItem value="split_comp">Split complementar</SelectItem>
                <SelectItem value="warm_palette">Paleta quente</SelectItem>
                <SelectItem value="cool_palette">Paleta fria</SelectItem>
                <SelectItem value="rainbow">Arco-íris / Espectro completo</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Textura da imagem">
            <Select value={data.texture} onValueChange={(v) => set("texture", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="smooth_tex">Lisa / Clean</SelectItem>
                <SelectItem value="grainy">Granulada / Film grain</SelectItem>
                <SelectItem value="rough">Áspera / Rugosa</SelectItem>
                <SelectItem value="paper">Textura de papel</SelectItem>
                <SelectItem value="canvas_tex">Textura de tela</SelectItem>
                <SelectItem value="fabric">Textura de tecido</SelectItem>
                <SelectItem value="metallic">Metálica</SelectItem>
                <SelectItem value="glass">Vidro / Cristalina</SelectItem>
                <SelectItem value="organic">Orgânica / Natural</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Section>

      {/* ILUMINAÇÃO */}
      <Section title="Iluminação">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Tipo de Iluminação">
            <Select value={data.lighting} onValueChange={(v) => set("lighting", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="natural">Natural</SelectItem>
                <SelectItem value="golden_hour">Golden Hour</SelectItem>
                <SelectItem value="blue_hour">Blue Hour</SelectItem>
                <SelectItem value="studio">Estúdio profissional</SelectItem>
                <SelectItem value="dramatic">Dramática / Chiaroscuro</SelectItem>
                <SelectItem value="soft">Suave / Difusa</SelectItem>
                <SelectItem value="hard">Dura / Contrastante</SelectItem>
                <SelectItem value="rim">Rim light / Contraluz</SelectItem>
                <SelectItem value="neon">Neon / Colorida</SelectItem>
                <SelectItem value="candlelight">Luz de velas</SelectItem>
                <SelectItem value="overcast">Dia nublado</SelectItem>
                <SelectItem value="fluorescent">Fluorescente / Artificial</SelectItem>
                <SelectItem value="moonlight">Luar</SelectItem>
                <SelectItem value="fire">Fogo / Chamas</SelectItem>
                <SelectItem value="underwater_light">Luz subaquática</SelectItem>
                <SelectItem value="bioluminescent">Bioluminescente</SelectItem>
                <SelectItem value="volumetric">Volumétrica / God rays</SelectItem>
                <SelectItem value="keep">Manter original</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Direção da Luz">
            <Select value={data.lightingDirection} onValueChange={(v) => set("lightingDirection", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="front">Frontal</SelectItem>
                <SelectItem value="side">Lateral (45°)</SelectItem>
                <SelectItem value="rembrandt">Rembrandt</SelectItem>
                <SelectItem value="split">Split (dividida)</SelectItem>
                <SelectItem value="butterfly">Butterfly / Paramount</SelectItem>
                <SelectItem value="back">Contraluz</SelectItem>
                <SelectItem value="loop">Loop lighting</SelectItem>
                <SelectItem value="top">De cima</SelectItem>
                <SelectItem value="bottom">De baixo (sinistro)</SelectItem>
                <SelectItem value="kicker">Kicker (3/4 traseira)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Cor da luz">
            <Select value={data.lightColor} onValueChange={(v) => set("lightColor", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="white">Branca / Neutra</SelectItem>
                <SelectItem value="warm_light">Quente / Amarelada</SelectItem>
                <SelectItem value="cool_light">Fria / Azulada</SelectItem>
                <SelectItem value="red_light">Vermelha</SelectItem>
                <SelectItem value="blue_light">Azul</SelectItem>
                <SelectItem value="purple_light">Roxa / Lilás</SelectItem>
                <SelectItem value="green_light">Verde</SelectItem>
                <SelectItem value="orange_light">Laranja</SelectItem>
                <SelectItem value="pink_light">Rosa</SelectItem>
                <SelectItem value="mixed_light">Mista / Multicolorida</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Estilo das sombras">
            <Select value={data.shadowStyle} onValueChange={(v) => set("shadowStyle", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="soft_shadow">Suaves / Difusas</SelectItem>
                <SelectItem value="hard_shadow">Duras / Definidas</SelectItem>
                <SelectItem value="minimal_shadow">Mínimas / Quase sem</SelectItem>
                <SelectItem value="dramatic_shadow">Dramáticas / Profundas</SelectItem>
                <SelectItem value="colored_shadow">Coloridas</SelectItem>
                <SelectItem value="long_shadow">Longas / Elongadas</SelectItem>
                <SelectItem value="ambient_shadow">Ambientes / Naturais</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Section>

      {/* CÂMERA E COMPOSIÇÃO */}
      <Section title="Câmera e Composição">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Ângulo de Câmera">
            <Select value={data.cameraAngle} onValueChange={(v) => set("cameraAngle", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="eye_level">Nível dos olhos</SelectItem>
                <SelectItem value="low">De baixo (low angle)</SelectItem>
                <SelectItem value="high">De cima (high angle)</SelectItem>
                <SelectItem value="dutch">Dutch angle (inclinado)</SelectItem>
                <SelectItem value="birds_eye">Vista aérea</SelectItem>
                <SelectItem value="worms_eye">Contra-plongée extremo</SelectItem>
                <SelectItem value="over_head">Overhead / Flat lay</SelectItem>
                <SelectItem value="pov">POV / Primeira pessoa</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tipo de Lente">
            <Select value={data.cameraLens} onValueChange={(v) => set("cameraLens", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="14mm">14mm (ultra wide)</SelectItem>
                <SelectItem value="24mm">24mm (wide)</SelectItem>
                <SelectItem value="35mm">35mm (versátil)</SelectItem>
                <SelectItem value="50mm">50mm (natural)</SelectItem>
                <SelectItem value="85mm">85mm (retrato)</SelectItem>
                <SelectItem value="135mm">135mm (compressão)</SelectItem>
                <SelectItem value="200mm">200mm (telefoto)</SelectItem>
                <SelectItem value="400mm">400mm (super telefoto)</SelectItem>
                <SelectItem value="macro">Macro</SelectItem>
                <SelectItem value="fisheye">Fisheye (olho de peixe)</SelectItem>
                <SelectItem value="tilt_shift_lens">Tilt-shift</SelectItem>
                <SelectItem value="anamorphic">Anamórfica (cinema)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Profundidade de Campo">
            <Select value={data.depth} onValueChange={(v) => set("depth", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="very_shallow">Muito rasa (f/1.2)</SelectItem>
                <SelectItem value="shallow">Rasa (f/1.4 - bokeh intenso)</SelectItem>
                <SelectItem value="moderate">Moderada (f/2.8)</SelectItem>
                <SelectItem value="deep">Profunda (f/8 - tudo focado)</SelectItem>
                <SelectItem value="infinite">Infinita (f/16 - paisagem)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Enquadramento">
            <Select value={data.framing} onValueChange={(v) => set("framing", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="extreme_closeup">Extreme close-up (olhos/detalhe)</SelectItem>
                <SelectItem value="closeup">Close-up (rosto)</SelectItem>
                <SelectItem value="medium_closeup">Medium close-up (ombros)</SelectItem>
                <SelectItem value="medium">Medium shot (cintura)</SelectItem>
                <SelectItem value="medium_full">Plano americano (joelhos)</SelectItem>
                <SelectItem value="full">Full shot (corpo inteiro)</SelectItem>
                <SelectItem value="wide">Wide shot (com ambiente)</SelectItem>
                <SelectItem value="extreme_wide">Extreme wide (paisagem)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Composição">
            <Select value={data.composition} onValueChange={(v) => set("composition", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="rule_of_thirds">Regra dos terços</SelectItem>
                <SelectItem value="centered">Centralizado</SelectItem>
                <SelectItem value="golden_ratio">Proporção áurea</SelectItem>
                <SelectItem value="symmetrical">Simétrico</SelectItem>
                <SelectItem value="asymmetrical">Assimétrico</SelectItem>
                <SelectItem value="diagonal">Diagonal</SelectItem>
                <SelectItem value="leading_lines">Linhas guia</SelectItem>
                <SelectItem value="frame_within">Quadro dentro do quadro</SelectItem>
                <SelectItem value="negative_space">Espaço negativo</SelectItem>
                <SelectItem value="filling">Fill the frame (preenchido)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Proporção / Aspect Ratio">
            <Select value={data.aspectRatio} onValueChange={(v) => set("aspectRatio", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="1:1">1:1 (Quadrado / Instagram)</SelectItem>
                <SelectItem value="4:5">4:5 (Retrato Instagram)</SelectItem>
                <SelectItem value="3:4">3:4 (Retrato clássico)</SelectItem>
                <SelectItem value="2:3">2:3 (Retrato 35mm)</SelectItem>
                <SelectItem value="9:16">9:16 (Stories / Reels)</SelectItem>
                <SelectItem value="3:2">3:2 (Paisagem 35mm)</SelectItem>
                <SelectItem value="4:3">4:3 (Paisagem clássica)</SelectItem>
                <SelectItem value="16:9">16:9 (Widescreen)</SelectItem>
                <SelectItem value="21:9">21:9 (Ultra widescreen)</SelectItem>
                <SelectItem value="2.35:1">2.35:1 (Cinemascope)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field label="Resolução alvo">
          <Select value={data.resolution} onValueChange={(v) => set("resolution", v)}>
            <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="neo-raised rounded-xl border-none">
              <SelectItem value="sd">SD (512x512)</SelectItem>
              <SelectItem value="hd">HD (1024x1024)</SelectItem>
              <SelectItem value="full_hd">Full HD (1920x1080)</SelectItem>
              <SelectItem value="2k">2K (2048x2048)</SelectItem>
              <SelectItem value="4k">4K (4096x4096)</SelectItem>
              <SelectItem value="8k">8K (ultra resolução)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </Section>

      {/* CENÁRIO */}
      <Section title="Cenário e Ambiente">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Fundo">
            <Select value={data.background} onValueChange={(v) => set("background", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="studio_white">Estúdio branco</SelectItem>
                <SelectItem value="studio_black">Estúdio preto</SelectItem>
                <SelectItem value="studio_gray">Estúdio cinza</SelectItem>
                <SelectItem value="gradient">Gradiente suave</SelectItem>
                <SelectItem value="blur">Desfocar atual</SelectItem>
                <SelectItem value="nature">Natureza</SelectItem>
                <SelectItem value="urban">Urbano / Cidade</SelectItem>
                <SelectItem value="interior">Interior elegante</SelectItem>
                <SelectItem value="abstract_bg">Abstrato / Artístico</SelectItem>
                <SelectItem value="textured_wall">Parede texturizada</SelectItem>
                <SelectItem value="neon_bg">Neon / Luzes</SelectItem>
                <SelectItem value="space">Espaço / Galáxia</SelectItem>
                <SelectItem value="custom">Personalizado (descreva abaixo)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Hora do Dia">
            <Select value={data.timeOfDay} onValueChange={(v) => set("timeOfDay", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="dawn">Amanhecer</SelectItem>
                <SelectItem value="morning">Manhã</SelectItem>
                <SelectItem value="noon">Meio-dia</SelectItem>
                <SelectItem value="afternoon">Tarde</SelectItem>
                <SelectItem value="golden">Golden hour</SelectItem>
                <SelectItem value="sunset">Pôr do sol</SelectItem>
                <SelectItem value="blue">Blue hour</SelectItem>
                <SelectItem value="twilight">Crepúsculo</SelectItem>
                <SelectItem value="night">Noite</SelectItem>
                <SelectItem value="midnight">Meia-noite</SelectItem>
                <SelectItem value="studio">Estúdio (atemporal)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Ambiente">
            <Select value={data.environment} onValueChange={(v) => set("environment", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="indoor">Interior</SelectItem>
                <SelectItem value="outdoor">Exterior</SelectItem>
                <SelectItem value="studio">Estúdio</SelectItem>
                <SelectItem value="beach">Praia</SelectItem>
                <SelectItem value="forest">Floresta</SelectItem>
                <SelectItem value="mountain">Montanha</SelectItem>
                <SelectItem value="city">Cidade</SelectItem>
                <SelectItem value="desert">Deserto</SelectItem>
                <SelectItem value="garden">Jardim</SelectItem>
                <SelectItem value="rooftop">Rooftop</SelectItem>
                <SelectItem value="underwater">Subaquático</SelectItem>
                <SelectItem value="castle">Castelo / Palácio</SelectItem>
                <SelectItem value="cafe">Café / Restaurante</SelectItem>
                <SelectItem value="library">Biblioteca</SelectItem>
                <SelectItem value="ruins">Ruínas / Abandonado</SelectItem>
                <SelectItem value="snow">Cenário de neve</SelectItem>
                <SelectItem value="neon_city">Cidade neon noturna</SelectItem>
                <SelectItem value="space_station">Estação espacial</SelectItem>
                <SelectItem value="temple">Templo / Santuário</SelectItem>
                <SelectItem value="market">Mercado / Feira</SelectItem>
                <SelectItem value="train_station">Estação de trem</SelectItem>
                <SelectItem value="greenhouse">Estufa / Greenhouse</SelectItem>
                <SelectItem value="museum">Museu / Galeria</SelectItem>
                <SelectItem value="concert">Show / Concerto</SelectItem>
                <SelectItem value="gym">Academia / Gym</SelectItem>
                <SelectItem value="pool">Piscina</SelectItem>
                <SelectItem value="vineyard">Vinhedo</SelectItem>
                <SelectItem value="bamboo_forest">Floresta de bambu</SelectItem>
                <SelectItem value="lavender_field">Campo de lavanda</SelectItem>
                <SelectItem value="ice_cave">Caverna de gelo</SelectItem>
                <SelectItem value="volcano">Vulcão</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Clima">
            <Select value={data.weather} onValueChange={(v) => set("weather", v)}>
              <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="neo-raised rounded-xl border-none">
                <SelectItem value="clear">Limpo / Ensolarado</SelectItem>
                <SelectItem value="cloudy">Nublado</SelectItem>
                <SelectItem value="overcast">Encoberto</SelectItem>
                <SelectItem value="rainy">Chuvoso</SelectItem>
                <SelectItem value="foggy">Neblina / Névoa</SelectItem>
                <SelectItem value="snowy">Nevando</SelectItem>
                <SelectItem value="stormy">Tempestade</SelectItem>
                <SelectItem value="windy">Ventoso</SelectItem>
                <SelectItem value="hazy">Brumoso / Hazy</SelectItem>
                <SelectItem value="aurora">Aurora boreal</SelectItem>
                <SelectItem value="na">N/A (interior)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field label="Estação do ano">
          <Select value={data.season} onValueChange={(v) => set("season", v)}>
            <SelectTrigger className="neo-inset rounded-xl border-none bg-background">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="neo-raised rounded-xl border-none">
              <SelectItem value="spring">Primavera (flores, verde)</SelectItem>
              <SelectItem value="summer">Verão (sol, vibrante)</SelectItem>
              <SelectItem value="autumn">Outono (folhas, quente)</SelectItem>
              <SelectItem value="winter">Inverno (frio, neve)</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Descrição do cenário (se personalizado)">
          <Textarea
            placeholder="Ex: café parisiense vintage com mesas de mármore e luz entrando pela janela, jardim japonês com cerejeiras em flor..."
            value={data.backgroundDescription}
            onChange={(e) => set("backgroundDescription", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none focus:ring-2 focus:ring-primary/30"
          />
        </Field>
      </Section>

      {/* PÓS-PROCESSAMENTO */}
      <Section title="Pós-Processamento e Efeitos">
        <div className="grid grid-cols-2 gap-2">
          {postProcessingOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-center gap-2.5 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                (data.postProcessing || []).includes(option.id)
                  ? "neo-inset"
                  : "neo-flat hover:shadow-neo"
              }`}
            >
              <Checkbox
                checked={(data.postProcessing || []).includes(option.id)}
                onCheckedChange={() => togglePostProcessing(option.id)}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* PROMPT NEGATIVO PRESETS */}
      <Section title="Evitar (Prompt Negativo)">
        <div className="grid grid-cols-2 gap-2">
          {negativePresetOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-center gap-2.5 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                (data.negativePromptPreset || []).includes(option.id)
                  ? "neo-inset"
                  : "neo-flat hover:shadow-neo"
              }`}
            >
              <Checkbox
                checked={(data.negativePromptPreset || []).includes(option.id)}
                onCheckedChange={() => toggleNegativePreset(option.id)}
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>

        <Field label="Evitar adicionais (texto livre)">
          <Textarea
            placeholder="Ex: filtros exagerados, pele artificial, saturação excessiva, fundo distrativo..."
            value={data.negativeExtras}
            onChange={(e) => set("negativeExtras", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none focus:ring-2 focus:ring-primary/30"
          />
        </Field>
      </Section>

      {/* EXTRAS */}
      <Section title="Detalhes Finais">
        <Field label="Detalhes extras positivos">
          <Textarea
            placeholder="Ex: catchlight nos olhos, reflexos suaves na pele, sombras definidas mas não duras..."
            value={data.extras}
            onChange={(e) => set("extras", e.target.value)}
            className="neo-inset rounded-xl border-none bg-background resize-none focus:ring-2 focus:ring-primary/30"
          />
        </Field>
      </Section>
    </div>
  );
};

export default EditForm;
