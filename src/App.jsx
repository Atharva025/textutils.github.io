import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About_Us from "./components/About_Us";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  }

  return (
    <>
      <Navbar title="Text-Modifiers" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* New Format
        <Routes>
          <Route exact path="/about" element={<About_Us />}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />}> */}
          {/* </Route>
        </Routes> */}
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
