import { useNavigate } from "react-router-dom";
import { RigthArrowIcon } from "../../../components/Icons";
import type { Student } from "../../../types/interfaces";

export function StudentsTable ({ students, isLoading }:{ students: Student[], isLoading : boolean}) {
  const navigate = useNavigate()
  
  return (
    <>
      <table className="table">
        <thead>
          <tr className="row">
            <th className="name-table">Nombre</th>
            <th className="small-td">Edad</th>
            <th className="small-td">Seccion</th>
            <th className="small-td see-button-td">Ver</th>
          </tr>
        </thead>
        <tbody>
          {students && students.map(student => (
            <tr key={student.id} className="row">
              <td>{ student.name }</td>
              <td className="small-td">{ student.age }</td>
              <td className="small-td">{ student.section }</td>
              <td className="see-button-td small-d-td">
                <button className="global-button" onClick={() => navigate(`/admin-dashboard/students/${student.id}`)}><RigthArrowIcon width={20} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <p className="message">Cargando Datos...</p>}
      { students && !isLoading && students?.length === 0 && <p className="message">No hay resultados para mostrar</p>}
    </>
  )
} 