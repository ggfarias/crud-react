import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


{/* 

<div className="main">
  <h2 className="main-header">React Crud Operations</h2>
  <Route path="/" element={<Create />} />
</div> 
      
    
*/}