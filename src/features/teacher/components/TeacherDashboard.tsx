import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { StudentsPage } from "../pages/StudentsPage";
import { StudentPage } from "../pages/SelectedStudentPage";
import { GenerateTemplatePage } from "../pages/GenerateTemplatePage";
import { UploadCalificationPage } from "../pages/UploadCalificationsPage";
import { SelectRoomsPageToGenerate } from "../pages/SelectRoomsToGeneratePage";
import { SelectRoomsPage } from "../pages/SelectRoomsPage";

export function TeacherDashboard() {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="generate/select-room" element={<SelectRoomsPageToGenerate />} />
        <Route path="generate" element={<GenerateTemplatePage />} />
        <Route path="upload" element={<UploadCalificationPage />} />
        <Route path="rooms" element={<h1>Rooms</h1>} />
        <Route path="students/select-room" element={<SelectRoomsPage />} />
        <Route path="profile" element={<h1>Profile</h1>} />
        <Route path="statistics" element={<h1>Profile</h1>} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="students/:id" element={<StudentPage />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </div>
  )
}