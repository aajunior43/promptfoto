import { useCallback, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

const ImageUpload = ({ image, onImageChange }: ImageUploadProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => onImageChange(e.target?.result as string);
      reader.readAsDataURL(file);
    },
    [onImageChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  if (image) {
    return (
      <div className="relative group rounded-lg overflow-hidden border border-border">
        <img src={image} alt="Uploaded" className="w-full h-64 object-cover" />
        <button
          onClick={() => onImageChange(null)}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:border-destructive"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            Imagem de referência carregada
          </p>
        </div>
      </div>
    );
  }

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center h-48 rounded-lg border-2 border-dashed cursor-pointer transition-all duration-200 ${
        dragOver
          ? "border-primary bg-primary/5 glow-border"
          : "border-border hover:border-muted-foreground"
      }`}
    >
      <Upload className="w-8 h-8 text-muted-foreground mb-3" />
      <p className="text-sm font-medium text-foreground">Arraste ou clique para enviar</p>
      <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP</p>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </label>
  );
};

export default ImageUpload;
