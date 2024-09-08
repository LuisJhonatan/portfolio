import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./sections/global/Global";

const App = () => {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Global />} />
              <Route path="/inicio" element={<Global />} />
              <Route path="/sobremi" element={<Global />} />
              <Route path="/proyectos" element={<Global />} />
              <Route path="/habilidades" element={<Global />} />
              <Route path="/contacto" element={<Global />} />
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App