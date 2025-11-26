import { useParams } from "react-router-dom";
import { GoBackBar } from "../../../components/GoBackBar";
import { TeacherData } from "../components/TeacherData";

export function TeacherPage () {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <GoBackBar back={true} />
      <div className="dashboard-section">
        <TeacherData id={id} />
      </div>
    </>
  )
}