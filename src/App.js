// import Login from "./login";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import {Route ,Routes} from "react-router-dom"
import GO from "./pages/go";
import MarkSheet from "./pages/marksheet";
import Cheakresult from "./pages/cheakresult";
import Result from "./pages/result";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/> 
      <Route path="Admin" element={<Admin/>}/>  
      <Route path="Go" element={<GO/>}/>   
      <Route path="MarkSheet" element={<MarkSheet/>}/>  
      <Route path="cheakteam" element={<Cheakresult/>}/>  
      <Route path="result" element={<Result/>}  /> 
    </Routes>
    
    </>
  );
}

export default App;
