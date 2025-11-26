import { GoBackBar } from "../../../components/GoBackBar";
import { GenerateTemplate } from "../components/GenerateTemplate";

export function GenerateTemplatePage () {
  return (
    <>
      <GoBackBar back={true} />
      <div className="dashboard-section form-section">
        <GenerateTemplate />
      </div>
    </>
  )
}