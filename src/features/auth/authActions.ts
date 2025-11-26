import { setError, setLoading, setUser } from "../../store/slices/userSlice"
import type { AppDispatch } from "../../store/store"
import type { User } from "../../types/interfaces"

export const login = ({ email, password }: { email: string, password: string }) => async (dispatch: AppDispatch) => {
  try {

    dispatch(setLoading(true))
    setTimeout(() => {
      const user: User = {
        name: "diego",
        email: "",
        id: "1343-434343-554545-545454",
        role: "student"
      }

      dispatch(setUser(user))

      localStorage.setItem('access_token', 'mocked_jwt_token')

      switch (user.role) {
        case 'student':
          window.location.href = "/student-dashboard"
          break
        case 'teacher':
          window.location.href = "/teacher-dashboard"
          break
        case "administrator":
          window.location.href = "/admin-dashboard"
          break
        default:
          window.location.href = "/login"
      }
    }, 3000);
    return

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
