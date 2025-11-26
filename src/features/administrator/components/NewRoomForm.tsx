import { useEffect, useState } from "react";
import { Grades } from "../../../types";
import { RoomSection } from "../../../types/enums";
import { useTeachersQuery } from "../hooks/useTeachersQuery";
import { SubmitButton } from "../../../components/SubmitButton";

export function NewRoomForm () {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { data, isLoading } = useTeachersQuery()

  useEffect(() => {
    setLoading(false)
    setError(null)
  }, [])

  return (
    <>
      <form className="create-form">
        <h3>Agregar nueva aula</h3>
        <div className="input">
          <label htmlFor="grade">Grade</label>
          <select name="grade" id="grade">
            {Object.entries((Grades)).map(([key, value]) => (
              <option key={key} value={key}>{ value }</option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="section">Section</label>
          <select name="grade" id="section">
            {Object.entries((RoomSection)).map(([key, value]) => (
              <option key={key} value={key}>{ value }</option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="owner">Responsable</label>
          <select name="grade" id="owner">
            {isLoading && <option>Espere un momento...</option>}
            {data && data.map(teacher => (
              <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
            ))}
          </select>
        </div>
        <SubmitButton loading={loading } baseText="Crear" loadingText="Creando" />
        { error && <p>{ error }</p> }
      </form>
    </>
  )
}