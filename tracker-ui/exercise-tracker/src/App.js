import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Exercises from './components/Exercises.component.js';
import CreateExercises from './components/CreateExercises.component.js';
import Navbar from "./components/Navbar.js"
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises />} />
        {/* <Route path="/edit/:id" element={<EditExercises />} /> */}
        <Route path="/create" element={<CreateExercises />} />
        {/* <Route path="/user" element={<CreateUsers />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;