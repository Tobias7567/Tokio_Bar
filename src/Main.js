
import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";




function Main (props)    {
    return (
        <main>
            <Routes>
                    <Route path="/" element={<ItemListContainer  greeting={'Inicio'} />}/>
                    <Route path="/category/:id" element={<ItemListContainer  greeting={'¡Tu busqueda!'} />}/>      
           </Routes>
        

          </main>
      );
 
}
export default Main