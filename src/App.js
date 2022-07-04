import 'bootstrap/dist/css/bootstrap.min.css';

import DivInicio from "./Div_inicio";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { Footer } from './footer';



function App() {
  return (
    <>
         <a name="inicio"/>
    
      <BrowserRouter>
  
        <DivInicio />

        <Main />
  <Footer/>
      </BrowserRouter>
 
    </>
  );
}
export default App;