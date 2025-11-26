import { useEffect, useState } from "react";
import { SubmitButton } from "../../../components/SubmitButton";

export function NewTeacherForm () {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(false)
    setError(null)
  }, [])

  return (
    <>
      <form className="create-form">
        <h3>Agregar nuevo maestro</h3>
        <div className="input">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Nombre" />
        </div>
        <div className="input">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" placeholder="Correo" />
        </div>
        <div className="input">
          <label htmlFor="age">Edad</label>
          <input type="number" max={90} min={18} id="age" placeholder="Edad" />
        </div>
        <div className="input">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" />
        </div>
        <SubmitButton loading={loading } baseText="Crear" loadingText="Creando" />
        { error && <p>{ error }</p> }
      </form>
    </>
  )
}