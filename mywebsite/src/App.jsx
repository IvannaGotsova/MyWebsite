import "./App.css";
import React from 'react';
import ViewMore from "./ViewMore";
import MakeAnAppointment from "./MakeAnAppointment";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Error from "./Error";

function App() {

  return (
    <>
       
       <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/viewmore/:id" element={<ViewMore />} />
            <Route path="/makeanappointment" element={<MakeAnAppointment />} />
            <Route path="*" element={<Error />} />
       </Routes>
    </>
  );
}

export default App;
