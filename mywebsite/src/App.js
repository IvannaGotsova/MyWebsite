import "./App.css";
import Services from "./Services";
import Header from "./Header";
import Footer from "./Footer";
import ViewMore from "./ViewMore";
import MakeAnAppointment from "./MakeAnAppointment";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/viewmore" component={ViewMore} />
        <Route path="/makeanappointment" component={MakeAnAppointment} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Services />
      <Services />
      <Services />
      <Services />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
