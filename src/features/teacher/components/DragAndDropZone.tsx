import { useRef, useState } from "react";
import { SubmitButton } from "../../../components/SubmitButton";

export function UploadFileForm() {
  const file = useRef<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleFiles = (files: FileList) => {
    if (files.length > 0) {
      if (files[0].type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        setError("El archivo debe ser un archivo de excel");
        return;
      }
      file.current = files[0];
      console.log('changed')
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files!);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file.current) {
      setError("Por favor, selecciona un archivo");
      return;
    }
    console.log(file.current);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="create-form upload-file-form">
      <h4>Sube el archivo con las calificaciones de tus estudiantes</h4>
      <div
        className="drag-zone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input hidden type="file" ref={inputRef} onChange={handleInputChange} accept=".xlsx" />
        {file.current ? (
          <p>Archivo seleccionado: {file.current.name}</p>
        ) : (
          <p className="message">Arrastra y suelta el archivo o haz clic para seleccionar</p>
        )}
      </div>
      <SubmitButton loading={false} loadingText="Subiendo..." baseText="Subir" />
      {error && <p className="error">{error}</p>}
    </form>
  )
}