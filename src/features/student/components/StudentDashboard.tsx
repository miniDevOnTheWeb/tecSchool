import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { StadisticsPage } from "../pages/StadisticsPage";
import { SubjectsPage } from "../pages/SubjectsPage";
import { CalificationsPage } from "../pages/CalificationsPage";
import { StudentProfilePage } from "../pages/ProfilePage";

export function StudentDashboard() {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="subjects" element={<SubjectsPage />} />
        <Route path="califications" element={<CalificationsPage />} />
        <Route path="profile" element={<StudentProfilePage />} />
        <Route path="scores" element={<StadisticsPage />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </div>
  )
}