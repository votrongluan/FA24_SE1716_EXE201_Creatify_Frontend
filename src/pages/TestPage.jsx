import { STLLoader } from "three-stdlib";
import model from "../assets/3dobject/7704.stl";
import ModelEditor from "../components/ModelEditor";

export default function TestPage() {
  return <ModelEditor modelUrl={model} fileType={STLLoader} />;
}
