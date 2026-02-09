import { useState } from "react";
import { Wand2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditForm, { type EditFormData } from "@/components/EditForm";
import PromptOutput from "@/components/PromptOutput";
import { generatePrompt } from "@/lib/generatePrompt";

const emptyForm: EditFormData = {
  subject: "",
  changes: "",
  preserve: "",
  style: "",
  lighting: "",
  lightingDirection: "",
  realism: "",
  background: "",
  backgroundDescription: "",
  clothing: "",
  colorTone: "",
  mood: "",
  cameraAngle: "",
  cameraLens: "",
  depth: "",
  skinTexture: "",
  hairStyle: "",
  expression: "",
  pose: "",
  environment: "",
  weather: "",
  timeOfDay: "",
  postProcessing: [],
  extras: "",
  negativeExtras: "",
};

const Index = () => {
  const [formData, setFormData] = useState<EditFormData>(emptyForm);
  const [result, setResult] = useState<{
    prompt: string;
    negativePrompt: string;
    tips: string[];
  } | null>(null);

  const canGenerate = formData.changes.trim().length > 0 || formData.subject.trim().length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setResult(generatePrompt(formData));
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse-glow">
              <Wand2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-foreground tracking-tight">
                PromptForge
              </h1>
              <p className="text-xs text-muted-foreground">
                Super Criador de Prompts para Edição de Fotos com IA
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
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-3 space-y-6">
            <section className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold font-display text-foreground">
                  Configure sua Edição
                </h2>
                <span className="text-xs text-muted-foreground">
                  Quanto mais detalhes, melhor o resultado
                </span>
              </div>
              
              <EditForm data={formData} onChange={setFormData} />

              <div className="mt-8 pt-6 border-t border-border/50">
                <Button
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  size="lg"
                  className="w-full h-12 font-display font-semibold tracking-wide text-base"
                >
                  <Wand2 className="w-5 h-5 mr-2" />
                  Gerar Prompt Completo
                </Button>
              </div>
            </section>
          </div>

          {/* Right Column - Output */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
            <section className="glass-card rounded-xl p-6 min-h-[400px]">
              <h2 className="text-lg font-semibold font-display text-foreground mb-6">
                Prompt Gerado
              </h2>

              {result ? (
                <PromptOutput
                  prompt={result.prompt}
                  negativePrompt={result.negativePrompt}
                  tips={result.tips}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mb-5">
                    <Wand2 className="w-9 h-9 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground max-w-[260px] leading-relaxed">
                    Preencha as opções ao lado para gerar um prompt ultra-detalhado e otimizado para edição de fotos
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
