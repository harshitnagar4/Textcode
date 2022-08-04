import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import About from "./Component/About";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
const showAlert = (message,type)=>{ 
  setAlert({
    message: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
} 
const removeBodyClasses =()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
}
  const toggleSwitch = (abc)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+abc);
    
    if(mode == "light") {
      document.body.style.backgroundColor = "#01254b";
      setMode("dark");
      showAlert("yeah:Dark Mode is Enabled","success");
    } else {
      setMode ("light")
      document.body.style.backgroundColor = "white";
      showAlert("yeah:Dark Mode is disabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleSwitch={toggleSwitch} />
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm mode = {mode} showAlert={showAlert} />}/>
        <Route path="about" element={<About mode = {mode} />}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
