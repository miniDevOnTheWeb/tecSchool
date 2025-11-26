import { useSearchParams } from "react-router-dom";
import { SubmitButton } from "../../../components/SubmitButton";
import React, { useState } from "react";
import { useSubjectsQuery } from "../../../hooks/useSubjectsQuery";

export function GenerateTemplate() {
  const [searchParams] = useSearchParams();
  const grade = searchParams.get("grade");
  const roomId = searchParams.get("roomId");
  const section = searchParams.get("section");
  const [state, setState] = useState<{ loading: boolean; error: string | null }>({
    loading: false,
    error: null
  });

  const { data: subjects } = useSubjectsQuery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    const formData = new FormData(e.currentTarget);
    const trimester = formData.get("trimester");
    const subjectId = formData.get("subject");

    try {
      console.log(trimester, subjectId, roomId);
      const response = await fetch(
        `http://localhost:8080/califications/generateTemplate/${roomId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            roomId,
            trimester,
            subjectId
          })
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || `Error: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `plantilla-trimestre${trimester}-${grade}-${section}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();

    } catch (e) {
      const error = e as Error;
      setState({ loading: false, error: error.message });
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="input">
        <label>Grado:</label>
        <input type="text" readOnly value={grade || ""} />
      </div>

      <div className="input">
        <label>Sección:</label>
        <input type="text" readOnly value={section || ""} />
      </div>

      <div className="input">
        <label>Trimestre:</label>
        <select name="trimester" id="trimester">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="input">
        <label htmlFor="subject">Materia:</label>
        <select name="subject" id="subject">
          {subjects?.map(subject => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {state.error && <p className="error">{state.error}</p>}

      <SubmitButton
        loading={state.loading}
        baseText="Generar plantilla"
        loadingText="Generando..."
      />
    </form>
  );
}
