import { useUser } from "../../../hooks/useUser"

export function AdminProfilePage () {
  const { user } = useUser()
  return (
    <div>
      <h1>Admin Profile Page { user?.name }</h1>
    </div>
  )
}