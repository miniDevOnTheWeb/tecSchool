import { StudentDashboard } from "../components/StudentDashboard";
import { StudentSideMenu } from "../components/StudentSideMenu";

export function StudentLayout () {
  return (
    <div className="student-page">
      <StudentSideMenu />
      <StudentDashboard />
    </ div>
  )
}