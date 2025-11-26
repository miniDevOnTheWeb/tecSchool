import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/login/LoginForm'
import { Protected } from './features/auth/Protected'
import { AdminLayout } from './features/administrator/layouts/AdminLayout'
import { StudentLayout } from './features/student/layouts/StudentLayout'
import { TeacherLayout } from './features/teacher/layouts/TeacherLayout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/admin-dashboard/*' element={<Protected><AdminLayout /></Protected>} />
          <Route path='/student-dashboard/*' element={<Protected><StudentLayout /></Protected>} />
          <Route path='/teacher-dashboard/*' element={<Protected><TeacherLayout /></Protected>} />
          <Route path='*' element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
