import { useSelectedTeacher } from "../hooks/useSelectedTeacher";

export function TeacherData ({ id = '' }:{ id?: string }) {
  const {data : teacher, isLoading} = useSelectedTeacher(id)
  
  return (
    <>
      { isLoading && <p className="message">Cargando...</p> }
      {teacher && (
        <div className="teacher-data">
          <div className="data-piece">
            <span>Nombre</span>
            <p>{teacher.name}</p>
          </div>
          <div className="data-piece">
            <span>Correo</span>
            <p>{teacher.email}</p>
          </div>
          <div className="data-piece">
            <span>Edad</span>
            <p>{teacher.age}</p>
          </div>
          <div className="data-piece">
            <span>Aulas a evaluar</span>
            <p>{teacher.rooms_quantity}</p>
          </div>
        </div>
    )}
    </>
  )
}