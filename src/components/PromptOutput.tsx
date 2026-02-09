import { useState } from "react";
import { Copy, Check, Sparkles, Ban, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <h3 className={`text-sm font-semibold font-display flex items-center gap-2 ${accent ? "text-primary" : "text-foreground"}`}>
          <Icon className="w-4 h-4" />
          {label}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={copy}
          className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
          {copied ? "Copiado" : "Copiar"}
        </Button>
      </div>
      <div
        className={`p-4 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
          accent
            ? "bg-primary/5 border border-primary/20 text-foreground"
            : "bg-secondary/50 border border-border text-secondary-foreground"
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
          <h3 className="text-sm font-semibold font-display flex items-center gap-2 text-accent">
            <Lightbulb className="w-4 h-4" />
            Dicas para melhores resultados
          </h3>
          <ul className="space-y-1.5">
            {tips.map((tip, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PromptOutput;
