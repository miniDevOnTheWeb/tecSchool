import { useDispatch } from "react-redux"
import { type AppDispatch } from "../../store/store"
import { setUser } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import type { User } from "../../types/interfaces"

export function ProtectedTeacher({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (!token) {
      console.log('invalid token')
      navigate('/login')
      return
    }

    const user: User = {
      name: "diego",
      email: "",
      id: "1343-434343-554545-545454",
      role: "student"
    }

    if (user.role !== 'student') {
      navigate('/login')
      return
    }

    dispatch(setUser(user))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return children
}