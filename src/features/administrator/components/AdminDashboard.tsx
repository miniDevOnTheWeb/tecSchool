import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { StudentsPage } from "../pages/StudentsPage";
import { TeachersPage } from "../pages/TeachersPage";
import { AdminProfilePage } from "../pages/ProfilePage";
import { SelectRoomsPage } from "../pages/SelectRoomsPage";
import { RoomsPage } from "../pages/Rooms";
import { CreateRoomPage } from "../pages/CreateRoomPage";
import { TeacherPage } from "../pages/SelectedTeacherPage";
import { StudentPage } from "../pages/SelectedStudentPage";
import { CreateTeacherPage } from "../pages/CreateTeacherPage";

export function AdminDashboard () {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="students/select-room" element={<SelectRoomsPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="students/:id" element={<StudentPage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="teachers/:id" element={<TeacherPage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="profile" element={<AdminProfilePage />} />
        <Route path="rooms/create-room" element={<CreateRoomPage />} />
        <Route path="teachers/create-teacher" element={<CreateTeacherPage />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </div>
  )
}