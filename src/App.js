import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from './Components/LoginForm';



import './App.css';
import AllEmployees from "./Components/AllEmployees";

function App() {
  return (
    <Router>
      <Routes>



        <Route exact path="/" Component={LoginForm} />
        <Route exact path="/allemployees" Component={AllEmployees} />



      </Routes>
    </Router>

  );
}

export default App;
