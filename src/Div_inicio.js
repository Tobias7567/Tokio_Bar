
import Navb from "./Navb";
import "./Bar.css"
function DivInicio() {
  return (
    <div className="Container_inicio">
      <Navb />
      <h1>Tokio</h1>
      <h2>Un lugar de momentos</h2>
      <a className="arrow" href="#title"><img src="/flecha.png"></img></a>
    </div>
  );
}
export default DivInicio;