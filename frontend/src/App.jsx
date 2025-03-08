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
import LoginPage from "./components/login";
import Home from "./components/home";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/") // Backend API URL
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={LoginPage}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/profile" Component={Body}></Route>
        <Route path="/ViewItchList" Component={ViewItchList}></Route>
        <Route path="/ItchListPage" Component={ItchListPage}></Route>
        <Route path="/Polls" Component={Polls}></Route>
        <Route path="/trending" Component={Trending}></Route>
      </Routes>
      {/* <Login></Login> */}
      {/* <Trending></Trending> */}
      {/* <Polls></Polls> */}
      {/* <ViewItchList></ViewItchList> */}
      {/* <ItchListPage></ItchListPage> */}

    </div>
  );
};

export default App;
