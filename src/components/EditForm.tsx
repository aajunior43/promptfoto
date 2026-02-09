import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface EditFormData {
  changes: string;
  preserve: string;
  style: string;
  lighting: string;
  realism: string;
  background: string;
  clothing: string;
  extras: string;
}

interface EditFormProps {
  data: EditFormData;
  onChange: (data: EditFormData) => void;
}

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2 animate-fade-in">
    <Label className="text-sm font-medium text-foreground">{label}</Label>
    {children}
  </div>
);

const EditForm = ({ data, onChange }: EditFormProps) => {
  const set = (key: keyof EditFormData, value: string) =>
    onChange({ ...data, [key]: value });

  return (
    <div className="space-y-5">
      <Field label="O que deve ser alterado?">
        <Textarea
          placeholder="Ex: trocar o fundo por uma praia ao pôr do sol, mudar a cor da roupa para azul..."
          value={data.changes}
          onChange={(e) => set("changes", e.target.value)}
          className="bg-secondary/50 border-border resize-none min-h-[80px]"
        />
      </Field>

      <Field label="O que deve permanecer igual?">
        <Textarea
          placeholder="Ex: rosto, expressão, posição do corpo, cabelo..."
          value={data.preserve}
          onChange={(e) => set("preserve", e.target.value)}
          className="bg-secondary/50 border-border resize-none"
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Estilo / Clima">
          <Select value={data.style} onValueChange={(v) => set("style", v)}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realistic">Fotorrealista</SelectItem>
              <SelectItem value="cinematic">Cinematográfico</SelectItem>
              <SelectItem value="editorial">Editorial / Moda</SelectItem>
              <SelectItem value="artistic">Artístico / Pintura</SelectItem>
              <SelectItem value="vintage">Vintage / Retrô</SelectItem>
              <SelectItem value="minimalist">Minimalista</SelectItem>
              <SelectItem value="dramatic">Dramático</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Iluminação">
          <Select value={data.lighting} onValueChange={(v) => set("lighting", v)}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="natural">Natural</SelectItem>
              <SelectItem value="golden_hour">Golden Hour</SelectItem>
              <SelectItem value="studio">Estúdio</SelectItem>
              <SelectItem value="dramatic">Dramática / Contrastante</SelectItem>
              <SelectItem value="soft">Suave / Difusa</SelectItem>
              <SelectItem value="neon">Neon / Colorida</SelectItem>
              <SelectItem value="keep">Manter original</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Nível de Realismo">
          <Select value={data.realism} onValueChange={(v) => set("realism", v)}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ultra">Ultra-realista</SelectItem>
              <SelectItem value="high">Alto</SelectItem>
              <SelectItem value="medium">Médio</SelectItem>
              <SelectItem value="stylized">Estilizado</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label="Fundo / Cenário">
          <Select value={data.background} onValueChange={(v) => set("background", v)}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keep">Manter original</SelectItem>
              <SelectItem value="remove">Remover (fundo neutro)</SelectItem>
              <SelectItem value="change">Trocar (descreva acima)</SelectItem>
              <SelectItem value="blur">Desfocar</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Roupas / Acessórios (opcional)">
        <Textarea
          placeholder="Ex: manter a roupa atual, trocar por terno preto, adicionar óculos escuros..."
          value={data.clothing}
          onChange={(e) => set("clothing", e.target.value)}
          className="bg-secondary/50 border-border resize-none"
        />
      </Field>

      <Field label="Detalhes extras (opcional)">
        <Textarea
          placeholder="Ex: adicionar leve bokeh, tom de cor quente, granulação de filme..."
          value={data.extras}
          onChange={(e) => set("extras", e.target.value)}
          className="bg-secondary/50 border-border resize-none"
        />
      </Field>
    </div>
  );
};

export default EditForm;
