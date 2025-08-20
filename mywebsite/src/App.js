import "./App.css";
import ViewMore from "./ViewMore";
import MakeAnAppointment from "./MakeAnAppointment";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";

function App() {
  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/viewmore" component={ViewMore} />
        <Route path="/makeanappointment" component={MakeAnAppointment} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );

  return (
    <BrowserRouter>
       <Home />
    </BrowserRouter>
  );
}

export default App;
