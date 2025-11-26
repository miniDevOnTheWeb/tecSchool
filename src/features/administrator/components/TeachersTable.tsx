import { useNavigate } from "react-router-dom";
import type { Teacher } from "../../../types/interfaces";
import { RigthArrowIcon } from "../../../components/Icons";

export function TeachersTable ({ teachers, isLoading }:{ teachers: Teacher[], isLoading : boolean}) {
  const navigate = useNavigate()
  return (
    <>
      <table className="table">
        <thead>
          <tr className="row">
            <th>Nombre</th>
            <th className="small-td">Edad</th>
            <th className="small-td">Aulas</th>
            <th className="small-td small-d-td">Ver</th>
          </tr>
        </thead>
        <tbody>
          {teachers && teachers.map(teacher => (
            <tr key={teacher.id} className="row">
              <td>{ teacher.name }</td>
              <td>{ teacher.age }</td>
              <td>{ teacher.rooms_quantity }</td>
              <td className="small-d-td">
                <button className="global-button" onClick={() => navigate(`/admin-dashboard/teachers/${teacher.id}`)}><RigthArrowIcon width={20} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <p className="message">Cargando Datos...</p>}
      { teachers && !isLoading && teachers?.length === 0 && <p className="message">No hay resultados para mostrar</p>}
    </>
  )
} 