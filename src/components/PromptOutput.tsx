import { useState } from "react";
import { Copy, Check, Sparkles, Ban, Lightbulb } from "lucide-react";
import { toast } from "sonner";

interface PromptOutputProps {
  prompt: string;
  negativePrompt: string;
  tips: string[];
}

const CopyBlock = ({
  label,
  icon: Icon,
  content,
  accent,
}: {
  label: string;
  icon: typeof Sparkles;
  content: string;
  accent?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className={`text-sm font-bold font-display flex items-center gap-2 ${accent ? "text-primary" : "text-foreground"}`}>
          <Icon className="w-4 h-4" />
          {label}
        </h3>
        <button
          onClick={copy}
          className="neo-button rounded-lg px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <div
        className={`p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
          accent
            ? "neo-concave text-foreground"
            : "neo-inset text-secondary-foreground"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

const PromptOutput = ({ prompt, negativePrompt, tips }: PromptOutputProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <CopyBlock label="Prompt Final de Edição" icon={Sparkles} content={prompt} accent />

      {negativePrompt && (
        <CopyBlock label="Prompt Negativo" icon={Ban} content={negativePrompt} />
      )}

      {tips.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-bold font-display flex items-center gap-2 text-primary">
            <Lightbulb className="w-4 h-4" />
            Dicas para melhores resultados
          </h3>
          <div className="neo-inset rounded-xl p-4">
            <ul className="space-y-2">
              {tips.map((tip, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptOutput;
