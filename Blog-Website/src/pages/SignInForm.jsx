import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { doLogin, validateUser } from "../service/Authentication";
import { UserContext } from "../context/UserContext";

const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  async function onSubmitHandler(event) {
    event.preventDefault();

    const message = await validateUser(user);

    if (message.startsWith("Welcome")) {
      setCurrentUser({
        data: user.email,
        loginStatus: true,
      });

      toast.success("Successfully Logged in");
      doLogin(user.email);
      navigate("/user/dashboard");
    } else {
      toast.error(message);
    }
  }

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setUser((user) => {
      return { ...user, [name]: value.trim() };
    });
  }

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-7 col-lg-5">
              <form onSubmit={onSubmitHandler} className="p-4 border rounded bg-white">
                <h1 className="h3 mb-3 fw-normal text-center">Sign In</h1>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="form-control"
                    onChange={onChangeHandler}
                    placeholder="Email address"
                    required={true}
                  />
                  <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={onChangeHandler}
                    placeholder="Password"
                    required={true}
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Link to="/forgot-password">Forgot password?</Link>
                  {/* You can add Forgot Password link or any other link here */}
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Sign in
                </button>

                <button type="reset" className="btn btn-secondary btn-lg">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default SignInForm;
