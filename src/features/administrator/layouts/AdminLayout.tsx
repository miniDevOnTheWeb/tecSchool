import { AdminDashboard } from "../components/AdminDashboard";
import { AdminSideMenu } from "../components/AdminSideMenu";

export function AdminLayout () {
  return (
    <div className="super-admin-page">
      <AdminSideMenu />
      <AdminDashboard />
    </ div>
  )
}