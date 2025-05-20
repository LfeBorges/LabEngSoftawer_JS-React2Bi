import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
// import atv1 from "./atv1";
// import atv2 from "./atv2";

export default function MinhasRotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/semana1" element={<atv1 />}/>
                <Route path="/semana2" element={<atv2 />}/>
                <Route path="/semana3" element={<atv2 />}/>
            </Routes>
        </BrowserRouter>
    );
}