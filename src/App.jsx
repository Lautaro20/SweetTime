import './App.css';
import Navbarr from './componentess/Navbarr';
import Inicio from './componentess/Inicio';
import Recetas from './componentess/Recetas';
import Inforecetas from './componentess/Inforecetas';
import Crearusuario from "./componentess/Crearusuario"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './componentess/Login';

function App() {
  return (
    
      <BrowserRouter>

        <Navbarr/>

        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path='/Recetas' element={<Recetas/>}></Route>
          <Route path='/Inforecetas/:id' element={<Inforecetas/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Crearusuario' element={<Crearusuario/>}></Route>
        </Routes>
        
        
        

      </BrowserRouter>
    
  );
}

export default App;
