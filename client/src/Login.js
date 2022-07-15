import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <center><p className="mastHead">Tandm</p></center>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <br />
          <center>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </center>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <br />
          <center>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </center>
        </>
      )}
    </div>
  );
}

export default Login;
