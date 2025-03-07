import { useEffect, useState } from "react";
import axios from "axios";
import Trending from "./components/trending";
import Navbar from "./components/Navbar";
import Polls from "./components/polls";
import ViewItchList from "./components/viewItchList";
import ItchListPage from "./components/itchList";
import Login from "./components/login";
import Body from "./components/Body"
import { BrowserRouter, Routes, Route ,NavLink  } from "react-router-dom";
import './App.css'

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/") // Backend API URL
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
        
       <Navbar></Navbar> 
      <Routes>
        <Route path="/profile" Component={Body}></Route>
        <Route path="/Login" Component={Login}></Route>
        <Route path="/ViewItchList" Component={ViewItchList}></Route>
        <Route path="/ItchListPage" Component={ItchListPage}></Route>
        <Route path="/Polls" Component={Polls}></Route>
        <Route path="/Trending" Component={Trending}></Route>
      </Routes>
      {/* <Login></Login> */}
      {/* <Trending></Trending> */}
      {/* <Polls></Polls> */}
      {/* <ViewItchList></ViewItchList> */}
      {/* <ItchListPage></ItchListPage> */}
      {/* <Profile></Profile> */}
    </div>
  );
};

export default App;
