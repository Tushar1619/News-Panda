import Navbar from './components/navbar';
import './App.css';
import News from './components/news';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
   <div>
    <Router>

    <Navbar title={"NewsPanda"}/>
    
      <Routes>
      
      <Route path="/"  element={<News key={"general"} pageSize={6} newsTitle={"Top Headlines"} category={"general"}/>} /> 
      <Route path="/business" element={<News key={"business"}  pageSize={6} newsTitle={"Top Headlines"} category={"business"}/>} /> 
      <Route path="/entertainment" element={<News key={"entertainment"} pageSize={6} newsTitle={"Top Headlines"} category={"entertainment"}/>} /> 
      <Route path="/sports" element={<News key={"sports"} pageSize={6} newsTitle={"Top Headlines"} category={"sports"}/>} /> 
      <Route path="/health" element={<News key={"health"} pageSize={6} newsTitle={"Top Headlines"} category={"health"}/>} /> 
      <Route path="/science" element={<News key={"science"} pageSize={6} newsTitle={"Top Headlines"} category={"science"}/>} /> 
      <Route path="/technology" element={<News key={"technology"} pageSize={6} newsTitle={"Top Headlines"} category={"technology"}/>} /> 

      </Routes>
    </Router>
  
    
   </div>
  );
}

export default App;
