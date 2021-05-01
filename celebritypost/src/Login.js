import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const style = {
    backgroundColor: "red",
    height: "100px",
    width: "100px",
    border: "none",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "1.5rem",
    letterSpacing: "0.1rem",
    color: "white",
    backgroundColor: "#1fd1f9",
    backgroundImage: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
    cursor:"pointer",
  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => toast.error("Login Failed/Cancelled!"));
  };

  return (
    <div>
      <button style={style} onClick={signIn}>
        SignIn
      </button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
