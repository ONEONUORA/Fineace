
// import {  Routes, Route } from 'react-router-dom'
// import './App.css'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'

// function App() {
  
//   return (
//     <>

 
//           <Routes>
//              <Navbar/>
//                 <Route path='/' element={<Home/>}/>
//           </Routes>
   
   
       
//     </>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (

      
      <Routes>
        <Route path="/" element={<Navbar /> } >
          <Route index element={<Home/>}/>
        </Route>

      </Routes>

  );
}

export default App;

