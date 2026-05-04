import { useState } from "react";
 import { Wand2, RotateCcw, LayoutGrid, Settings2, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditForm, { type EditFormData } from "@/components/EditForm";
import PromptOutput from "@/components/PromptOutput";
 import TemplatePresets from "@/components/TemplatePresets";
 import { ThemeToggle } from "@/components/ThemeToggle";
import { generatePrompt } from "@/lib/generatePrompt";

const emptyForm: EditFormData = {
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
  composition: "",
  framing: "",
  aspectRatio: "",
  intensity: "",
  filmStock: "",
  artMedium: "",
  colorScheme: "",
  texture: "",
  resolution: "",
  bodyType: "",
  age: "",
  ethnicity: "",
  makeup: "",
  accessories: "",
  lightColor: "",
  shadowStyle: "",
  perspective: "",
  season: "",
  props: "",
  negativePromptPreset: [],
};

const Index = () => {
  const [formData, setFormData] = useState<EditFormData>(emptyForm);
  const [result, setResult] = useState<{
    prompt: string;
    negativePrompt: string;
    tips: string[];
  } | null>(null);

  const canGenerate = formData.changes.trim().length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setResult(generatePrompt(formData));
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setResult(null);
  };

  const handleApplyTemplate = (templateData: Partial<EditFormData>) => {
    setFormData({ ...emptyForm, ...templateData });
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
       <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
         <div className="container max-w-6xl mx-auto px-4 py-3 sm:py-4">
           <div className="neo-raised rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
             <div className="flex items-center gap-3 sm:gap-4">
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl neo-convex flex items-center justify-center animate-pulse-glow">
                 <Wand2 className="w-5 h-5 text-primary" />
               </div>
               <div className="hidden xs:block">
                 <h1 className="text-lg sm:text-xl font-black font-display text-foreground tracking-tight leading-none">
                   PromptForge
                 </h1>
                 <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">
                   AI Photo Editor
                 </p>
               </div>
             </div>
             
             <div className="flex items-center gap-2 sm:gap-3">
               <button
                 onClick={handleReset}
                 className="neo-button rounded-xl px-3 sm:px-4 h-9 sm:h-10 text-[10px] sm:text-xs font-bold text-muted-foreground hover:text-destructive flex items-center gap-1.5 transition-colors"
               >
                 <RotateCcw className="w-3.5 h-3.5" />
                 <span className="hidden sm:inline">Recomeçar</span>
               </button>
               <ThemeToggle />
             </div>
           </div>
         </div>
       </header>

      {/* Main */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-3 space-y-6">
            <section className="neo-raised-lg rounded-2xl p-8">
              <TemplatePresets onApply={handleApplyTemplate} />
            </section>

            <section className="neo-raised-lg rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold font-display text-foreground">
                  Configure sua Edição
                </h2>
                <span className="text-xs text-muted-foreground neo-flat rounded-full px-3 py-1.5">
                  Quanto mais detalhes, melhor
                </span>
              </div>
              
              <EditForm data={formData} onChange={setFormData} />

              <div className="mt-8 pt-6">
                <button
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  className={`w-full h-14 rounded-2xl font-display font-bold tracking-wide text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                    canGenerate
                      ? "bg-primary text-primary-foreground shadow-neo hover:shadow-[8px_8px_16px_hsl(220_14%_72%),-8px_-8px_16px_hsl(0_0%_100%)] hover:-translate-y-0.5 active:shadow-neo-inset active:translate-y-0"
                      : "neo-inset text-muted-foreground cursor-not-allowed opacity-60"
                  }`}
                >
                  <Wand2 className="w-5 h-5" />
                  Gerar Prompt Completo
                </button>
              </div>
            </section>
          </div>

          {/* Right Column - Output */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <section className="neo-raised-lg rounded-2xl p-8 min-h-[400px]">
              <h2 className="text-lg font-bold font-display text-foreground mb-6">
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
                  <div className="w-20 h-20 rounded-full neo-concave flex items-center justify-center mb-5">
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
