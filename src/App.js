import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import './App.scss';
import Home from "./Componets/Home/Home"
import Header from "./Componets/Header/Header"

function App() {
  return (
    <div className="App" >
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} / >
          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
