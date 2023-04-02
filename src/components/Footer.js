import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  // get the navigate function
  const navigate = useNavigate()

  const goBack = () => {
    // imperatively redirect back (-1)
    navigate(-1)
  }

  const goForward = () => {
    // imperatively redirect forward (1)
    navigate(1)
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
