import { useSelectedStudent } from "../hooks/useSelectedStudent"

export function StudentData({ id = '' }: { id?: string }) {
  const { data: student, isLoading } = useSelectedStudent(id)

  return (
    <>
      {isLoading && <p className="message">Cargando...</p>}
      {student && (
        <div className="student-data">
          <div className="data-piece">
            <span>Nombre</span>
            <p>{student.info.name}</p>
          </div>
          <div className="data-piece">
            <span>Edad</span>
            <p>{student.info.age}</p>
          </div>
          <div className="data-piece">
            <span>Grado</span>
            <p>futura aula</p>
          </div>
          <div className="data-piece">
            <span>Sección</span>
            <p>seccion futtura</p>
          </div>
        </div>
      )}
    </>
  )
}