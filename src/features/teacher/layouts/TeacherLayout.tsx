import { TeacherDashboard } from "../components/TeacherDashboard";
import { TeacherSideMenu } from "../components/TeacherSideMenu";

export function TeacherLayout () {
  return (
    <div className="teacher-page">
      <TeacherSideMenu />
      <TeacherDashboard />
    </ div>
  )
}