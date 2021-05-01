import React from "react";
import "./App.css";
import About from "./components/About";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Follow from "./components/Follow";
import PostContainer from "./components/PostContainer";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <About />
          <Follow />
          <PostContainer />
        </>
      )}
    </div>
  );
}

export default App;
