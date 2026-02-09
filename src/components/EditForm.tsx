import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export interface EditFormData {
  subject: string;
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
}

interface EditFormProps {
  data: EditFormData;
  onChange: (data: EditFormData) => void;
}

const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <div className="space-y-2 animate-fade-in">
    <Label className="text-sm font-medium text-foreground">{label}</Label>
    {hint && <p className="text-[11px] text-muted-foreground -mt-1">{hint}</p>}
    {children}
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/50 pb-2">
      {title}
    </h3>
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

  return (
    <div className="space-y-8">
      {/* SUJEITO */}
      <Section title="Sujeito / Pessoa">
        <Field label="Descrição do sujeito" hint="Descreva a pessoa ou objeto principal da imagem original">
          <Textarea
            placeholder="Ex: mulher jovem, cabelos castanhos longos, olhos verdes, pele clara..."
            value={data.subject}
            onChange={(e) => set("subject", e.target.value)}
            className="bg-secondary/50 border-border resize-none min-h-[70px]"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Expressão facial">
            <Select value={data.expression} onValueChange={(v) => set("expression", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="smile">Sorriso natural</SelectItem>
                <SelectItem value="serious">Sério / Neutro</SelectItem>
                <SelectItem value="confident">Confiante</SelectItem>
                <SelectItem value="mysterious">Misterioso</SelectItem>
                <SelectItem value="joyful">Alegre / Radiante</SelectItem>
                <SelectItem value="pensive">Pensativo</SelectItem>
                <SelectItem value="seductive">Sedutor</SelectItem>
                <SelectItem value="fierce">Intenso / Feroz</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Pose / Posição">
            <Select value={data.pose} onValueChange={(v) => set("pose", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="portrait">Retrato frontal</SelectItem>
                <SelectItem value="three_quarter">Três quartos</SelectItem>
                <SelectItem value="profile">Perfil</SelectItem>
                <SelectItem value="over_shoulder">Olhando sobre o ombro</SelectItem>
                <SelectItem value="dynamic">Pose dinâmica</SelectItem>
                <SelectItem value="candid">Espontânea / Natural</SelectItem>
                <SelectItem value="editorial">Editorial / Fashion</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field label="Textura da pele">
          <Select value={data.skinTexture} onValueChange={(v) => set("skinTexture", v)}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="natural">Natural com textura real</SelectItem>
              <SelectItem value="smooth">Levemente suavizada</SelectItem>
              <SelectItem value="porcelain">Porcelana / Muito suave</SelectItem>
              <SelectItem value="matte">Matte / Sem brilho</SelectItem>
              <SelectItem value="dewy">Dewy / Brilho saudável</SelectItem>
              <SelectItem value="tanned">Bronzeada</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Cabelo (modificações)">
          <Input
            placeholder="Ex: manter original, ou: loiro platinado, cacheado, preso em coque..."
            value={data.hairStyle}
            onChange={(e) => set("hairStyle", e.target.value)}
            className="bg-secondary/50 border-border"
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
            className="bg-secondary/50 border-border resize-none min-h-[90px]"
          />
        </Field>

        <Field label="O que DEVE permanecer igual?" hint="Elementos que não podem ser alterados de forma alguma">
          <Textarea
            placeholder="Ex: rosto, expressão, identidade, posição do corpo, mãos..."
            value={data.preserve}
            onChange={(e) => set("preserve", e.target.value)}
            className="bg-secondary/50 border-border resize-none min-h-[70px]"
          />
        </Field>

        <Field label="Roupas / Acessórios">
          <Textarea
            placeholder="Ex: manter roupa atual, ou: vestido de gala preto, óculos aviador, colar de pérolas, relógio de luxo..."
            value={data.clothing}
            onChange={(e) => set("clothing", e.target.value)}
            className="bg-secondary/50 border-border resize-none"
          />
        </Field>
      </Section>

      {/* ESTILO VISUAL */}
      <Section title="Estilo Visual">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Estilo / Atmosfera">
            <Select value={data.style} onValueChange={(v) => set("style", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
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
              </SelectContent>
            </Select>
          </Field>

          <Field label="Mood / Clima">
            <Select value={data.mood} onValueChange={(v) => set("mood", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
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
              </SelectContent>
            </Select>
          </Field>

          <Field label="Nível de Realismo">
            <Select value={data.realism} onValueChange={(v) => set("realism", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ultra">Ultra-realista (8K)</SelectItem>
                <SelectItem value="high">Alto realismo</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="stylized">Estilizado</SelectItem>
                <SelectItem value="hyper">Hiper-realista</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tom de Cor Geral">
            <Select value={data.colorTone} onValueChange={(v) => set("colorTone", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
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
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
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
                <SelectItem value="keep">Manter original</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Direção da Luz">
            <Select value={data.lightingDirection} onValueChange={(v) => set("lightingDirection", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="front">Frontal</SelectItem>
                <SelectItem value="side">Lateral (45°)</SelectItem>
                <SelectItem value="rembrandt">Rembrandt</SelectItem>
                <SelectItem value="split">Split (dividida)</SelectItem>
                <SelectItem value="butterfly">Butterfly / Paramount</SelectItem>
                <SelectItem value="back">Contraluz</SelectItem>
                <SelectItem value="loop">Loop lighting</SelectItem>
                <SelectItem value="top">De cima</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Section>

      {/* CÂMERA */}
      <Section title="Câmera e Composição">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Ângulo de Câmera">
            <Select value={data.cameraAngle} onValueChange={(v) => set("cameraAngle", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eye_level">Nível dos olhos</SelectItem>
                <SelectItem value="low">De baixo (low angle)</SelectItem>
                <SelectItem value="high">De cima (high angle)</SelectItem>
                <SelectItem value="dutch">Dutch angle (inclinado)</SelectItem>
                <SelectItem value="birds_eye">Vista aérea</SelectItem>
                <SelectItem value="worms_eye">Contra-plongée extremo</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tipo de Lente">
            <Select value={data.cameraLens} onValueChange={(v) => set("cameraLens", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="35mm">35mm (versátil)</SelectItem>
                <SelectItem value="50mm">50mm (natural)</SelectItem>
                <SelectItem value="85mm">85mm (retrato)</SelectItem>
                <SelectItem value="135mm">135mm (compressão)</SelectItem>
                <SelectItem value="24mm">24mm (wide)</SelectItem>
                <SelectItem value="200mm">200mm (telefoto)</SelectItem>
                <SelectItem value="macro">Macro</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Profundidade de Campo">
            <Select value={data.depth} onValueChange={(v) => set("depth", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shallow">Rasa (f/1.4 - bokeh intenso)</SelectItem>
                <SelectItem value="moderate">Moderada (f/2.8)</SelectItem>
                <SelectItem value="deep">Profunda (f/8 - tudo focado)</SelectItem>
                <SelectItem value="very_shallow">Muito rasa (f/1.2)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </Section>

      {/* CENÁRIO */}
      <Section title="Cenário e Ambiente">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Fundo">
            <Select value={data.background} onValueChange={(v) => set("background", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="keep">Manter original</SelectItem>
                <SelectItem value="studio_white">Estúdio branco</SelectItem>
                <SelectItem value="studio_black">Estúdio preto</SelectItem>
                <SelectItem value="studio_gray">Estúdio cinza</SelectItem>
                <SelectItem value="gradient">Gradiente suave</SelectItem>
                <SelectItem value="blur">Desfocar atual</SelectItem>
                <SelectItem value="nature">Natureza</SelectItem>
                <SelectItem value="urban">Urbano / Cidade</SelectItem>
                <SelectItem value="interior">Interior elegante</SelectItem>
                <SelectItem value="custom">Personalizado (descreva abaixo)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Hora do Dia">
            <Select value={data.timeOfDay} onValueChange={(v) => set("timeOfDay", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dawn">Amanhecer</SelectItem>
                <SelectItem value="morning">Manhã</SelectItem>
                <SelectItem value="noon">Meio-dia</SelectItem>
                <SelectItem value="golden">Golden hour</SelectItem>
                <SelectItem value="sunset">Pôr do sol</SelectItem>
                <SelectItem value="blue">Blue hour</SelectItem>
                <SelectItem value="night">Noite</SelectItem>
                <SelectItem value="studio">Estúdio (atemporal)</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Ambiente">
            <Select value={data.environment} onValueChange={(v) => set("environment", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
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
              </SelectContent>
            </Select>
          </Field>

          <Field label="Clima">
            <Select value={data.weather} onValueChange={(v) => set("weather", v)}>
              <SelectTrigger className="bg-secondary/50 border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clear">Limpo / Ensolarado</SelectItem>
                <SelectItem value="cloudy">Nublado</SelectItem>
                <SelectItem value="overcast">Encoberto</SelectItem>
                <SelectItem value="rainy">Chuvoso</SelectItem>
                <SelectItem value="foggy">Neblina / Névoa</SelectItem>
                <SelectItem value="snowy">Nevando</SelectItem>
                <SelectItem value="stormy">Tempestade</SelectItem>
                <SelectItem value="na">N/A (interior)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field label="Descrição do cenário (se personalizado)">
          <Textarea
            placeholder="Ex: café parisiense vintage com mesas de mármore e luz entrando pela janela, jardim japonês com cerejeiras em flor..."
            value={data.backgroundDescription}
            onChange={(e) => set("backgroundDescription", e.target.value)}
            className="bg-secondary/50 border-border resize-none"
          />
        </Field>
      </Section>

      {/* PÓS-PROCESSAMENTO */}
      <Section title="Pós-Processamento">
        <div className="grid grid-cols-2 gap-2">
          {postProcessingOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary/30 cursor-pointer transition-colors"
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

      {/* EXTRAS */}
      <Section title="Detalhes Finais">
        <Field label="Detalhes extras positivos">
          <Textarea
            placeholder="Ex: catchlight nos olhos, reflexos suaves na pele, sombras definidas mas não duras..."
            value={data.extras}
            onChange={(e) => set("extras", e.target.value)}
            className="bg-secondary/50 border-border resize-none"
          />
        </Field>

        <Field label="O que EVITAR (para prompt negativo)">
          <Textarea
            placeholder="Ex: filtros exagerados, pele artificial, saturação excessiva, fundo distrativo..."
            value={data.negativeExtras}
            onChange={(e) => set("negativeExtras", e.target.value)}
            className="bg-secondary/50 border-border resize-none"
          />
        </Field>
      </Section>
    </div>
  );
};

export default EditForm;
