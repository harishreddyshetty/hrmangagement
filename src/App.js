import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from './Components/LoginForm';



import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        
        
        <Route exact path="/" Component={LoginForm} />


      </Routes>
    </Router>

  );
}

export default App;
