import type { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  to: string;
  text: string;
  className?: string;
  startsWith: string;
  icon: ReactNode
}

export function NavigateButton({ to, text, className, startsWith, icon }: Props) {
  const location = useLocation()
  return (
    <NavLink
      to={to}
      className={() =>
        `${className} ${location.pathname.startsWith(startsWith) ? "active" : "inactive"}`
      }
      end>
      {icon}
      {text}
    </NavLink>
  );
}
