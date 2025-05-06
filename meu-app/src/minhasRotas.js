import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
// import atv1 from "./atv1";
// import atv2 from "./atv2";

export default function MinhasRotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/atv1" element={<atv1 />}/>
                <Route path="/atv1" element={<atv2 />}/>
            </Routes>
        </BrowserRouter>
    );
}