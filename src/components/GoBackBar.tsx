import { useNavigate } from "react-router-dom";
import { BackIcon } from "./Icons";
import type { ReactNode } from "react";

export function GoBackBar ({ back, icon, to }:{ back?: boolean, to?:string ,  icon?:ReactNode }) {
  const navigate = useNavigate()
  return (
    <>
      <nav className="sub-top-bar">
        <ul className="sub-bar-list">
          {!back && <li className="reposition-item"></li>}
          { back && (
            <li>
              <button className="back-button" onClick={() => navigate(-1)}><BackIcon /></button>
            </li>
          )}
          {icon && (
            <li>
              <button title="Crear nueva aula" className="sub-button" onClick={() => navigate(to || '#')}>
                { icon }
              </button>
            </li>
          )}
          {!icon && <li className="reposition-item"></li>}
        </ul>
      </nav>
    </>
  )
}