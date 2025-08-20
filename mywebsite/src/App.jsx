import "./App.css";
import React from 'react';
import ViewMore from "./ViewMore";
import MakeAnAppointment from "./MakeAnAppointment";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./Home";

function App() {

  return (
    <>
       
       <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/viewmore" element={<ViewMore />} />
            <Route path="/makeanappointment" element={<MakeAnAppointment />} />
       </Routes>
    </>
  );
}

export default App;
