import { useState } from "react";
import { Wand2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ImageUpload";
import EditForm, { type EditFormData } from "@/components/EditForm";
import PromptOutput from "@/components/PromptOutput";
import { generatePrompt } from "@/lib/generatePrompt";

const emptyForm: EditFormData = {
  changes: "",
  preserve: "",
  style: "",
  lighting: "",
  realism: "",
  background: "",
  clothing: "",
  extras: "",
};

const Index = () => {
  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<EditFormData>(emptyForm);
  const [result, setResult] = useState<{
    prompt: string;
    negativePrompt: string;
    tips: string[];
  } | null>(null);

  const canGenerate = image && formData.changes.trim().length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setResult(generatePrompt(formData));
  };

  const handleReset = () => {
    setImage(null);
    setFormData(emptyForm);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold font-display text-foreground tracking-tight">
                PromptForge
              </h1>
              <p className="text-[11px] text-muted-foreground -mt-0.5">
                Super Criador de Prompts para Edição de Fotos
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-4 h-4 mr-1.5" />
            Recomeçar
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="container max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <section className="glass-card rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-semibold font-display text-foreground tracking-wide uppercase">
                1. Imagem de Referência
              </h2>
              <ImageUpload image={image} onImageChange={setImage} />
            </section>

            <section className="glass-card rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-semibold font-display text-foreground tracking-wide uppercase">
                2. Configurar Edição
              </h2>
              <EditForm data={formData} onChange={setFormData} />

              <Button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="w-full h-11 font-display font-semibold tracking-wide"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Gerar Prompt
              </Button>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <section className="glass-card rounded-xl p-5 space-y-4 min-h-[300px]">
              <h2 className="text-sm font-semibold font-display text-foreground tracking-wide uppercase">
                3. Resultado
              </h2>

              {result ? (
                <PromptOutput
                  prompt={result.prompt}
                  negativePrompt={result.negativePrompt}
                  tips={result.tips}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-60 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                    <Wand2 className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground max-w-[240px]">
                    Envie uma imagem e descreva as modificações para gerar seu prompt otimizado
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
