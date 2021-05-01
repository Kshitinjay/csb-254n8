import React from "react";
import "./about.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const notify = () => {
    toast.error("You can't send Private Messages!");
  };
  return (
    <div id="aboutContainer">
      <div id="actualAbout">
        <div id="row_1">
          <div id="aboutImage">
            <img
              src="https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"
              alt=""
            />
          </div>
          <div id="aboutData">
            <h1>
              Minakshi S
              <span>
                <img src="https://img.icons8.com/fluent/35/000000/verified-badge.png" alt="noImage"/>
              </span>
            </h1>
            <h4>Litchijuice</h4>
            <p>Enterpreneur, Business Women, Fitness Vlogger</p>
          </div>
        </div>
        <div id="row_2">
          <button id="msgButton" onClick={() => notify()}>
            Send Private Message
          </button>
        </div>
      </div>
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

export default About;
