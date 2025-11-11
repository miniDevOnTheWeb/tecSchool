import { setError, setLoading, setUser } from "../store/slices/userSlice"
import type { appDispatch } from "../store/store"

export const login = ({ email, password } : { email : string, password : string }) => async (dispatch: appDispatch) => {
  try {
    // Limpia cualquier error previo
    dispatch(setLoading(true))

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (!response.ok) {
      return dispatch(setError(data.message))
    }

    dispatch(setUser(data.user))
  } catch (err) {
    const e = err as Error
    dispatch(setError(e.message))
  }
}
