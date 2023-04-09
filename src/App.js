import Navbar from './components/navbar';
import './App.css';
import News from './components/news';
function App() {
  return (
   <div>
    <Navbar title={"Newton News"}/>
    <News pageSize={10}/>
   </div>
  );
}

export default App;
