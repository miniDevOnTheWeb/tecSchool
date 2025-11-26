import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function FloatingButton ({ children , to }:{ children : ReactNode, to : string }) {
  const navigate = useNavigate()
  return (
    <button className="floating-button" onClick={() => navigate(to)}>
      { children }
    </button>
  )
}