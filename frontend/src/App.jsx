import { useEffect, useState } from "react";
import axios from "axios";
import Trending from "./components/trending";
import Navbar from "./components/Navbar";
import Polls from "./components/polls";
import ViewItchList from "./components/viewItchList";
import ItchListPage from "./components/itchList";
import Login from "./components/login";
// import Profile from "./components/profile";


const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/") // Backend API URL
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      {/* <Trending></Trending> */}
      <Polls></Polls>
      {/* <ViewItchList></ViewItchList> */}
      {/* <ItchListPage></ItchListPage> */}
      {/* <Profile></Profile> */}
    </div>
  );
};

export default App;
