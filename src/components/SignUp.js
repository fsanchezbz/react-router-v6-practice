import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
// import useNavigate
import { useNavigate } from "react-router-dom"

export default function SignUp () {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

   // Grab the navigate function
 const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({username: username}));
    // imperatively redirect the user to /profile
    navigate("/profile")
  }

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </label>
      </form>
    </section>
  );
}
