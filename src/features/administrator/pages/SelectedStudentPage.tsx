import { useParams } from "react-router-dom";
import { GoBackBar } from "../../../components/GoBackBar";
import { StudentData } from "../../../components/StudentData";

export function StudentPage () {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <GoBackBar back={true} />
      <div className="dashboard-section">
        <StudentData id={id}/>
      </div>
    </>
  )
}