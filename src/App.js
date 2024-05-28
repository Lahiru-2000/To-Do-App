import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import AddUser from './pages/addTodo';
import Addtodo from './pages/addTodo'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route exact path="/addtodo" element={<Addtodo />} />
          <Route exact path="/" element={<Home />} />
       
          <Route exact path="/adduser" element={<AddUser />} />
          {/* <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
