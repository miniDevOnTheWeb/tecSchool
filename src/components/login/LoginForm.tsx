import { useState } from "react"
import { useDispatch } from "react-redux"
import type { appDispatch } from "../../store/store"
import { login } from "../../actions/authActions"
import { setError } from "../../store/slices/userSlice"
import { SubmitButton } from "../subComponents/SubmitButton"
import { useUser } from "../../hooks/useUser"

export function LoginForm () {
  const [ email, setEmail ] = useState<string | null>('')
  const [ password, setPassword ] = useState<string | null>('')
  const dispatch = useDispatch<appDispatch>()  
  const { loading, error } = useUser()

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!email || !password || email.trim() === '' || password.trim() === '') return dispatch(setError('Completa todos los campos'))

    dispatch(login({ email, password }))
  }
  
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Correo" />
        <input type="text" onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Contraseña" />
        <SubmitButton loading={loading} baseText="Ingresar" loadingText="Ingresando" />
        {error && <p className="form-error">{error}</p>}
      </form>
    </>
  )
}