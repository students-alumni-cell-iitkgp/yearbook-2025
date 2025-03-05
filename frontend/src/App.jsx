import { useEffect, useState } from "react";
import axios from "axios";
import Trending from "./components/trending";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/") // Backend API URL
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Trending></Trending>
    </div>
  );
};

export default App;
