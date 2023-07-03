//import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import About from './Component/About'
import Registration from './Component/Registration'
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
<NavBar/>
      <Routes>
        
        {/* <Route path ="/" element= {<NavBar/>}/> */}

        <Route path ="/" element= {<Home/>}/>
        <Route path ="/about" element= {<About/>}/>
        <Route path ="/registration" element= {<Registration/>}/>
        <Route path ="/login" element= {<Login/>}/>
      


       
      </Routes>

    </div>
  );
}

export default App;
