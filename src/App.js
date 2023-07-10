import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import Home from './components/Home';



function App() {
 
  return (
    <Router>
  
   <Routes>
     <Route exact  path="/"  element ={<Home/>} />
     <Route path="/:key" element={<UserDetails/> } />
   </Routes>
 
   </Router>
  )
  };

  
      
export default App;
