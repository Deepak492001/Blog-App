import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import geetika from "../assets/geetika.png";
// import { doLogin, doLogout } from "../service/Authentication";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { doLogin, validateUser } from "../service/Authentication";
import { UserContext } from "../context/UserContext";

const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  async function onSubmitHandler(event) {
    event.preventDefault();
    console.log(user);

    const message = await validateUser(user);
    console.log("message", message);

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
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                // src={geetika}
                loading="lazy"
                style={{ width: "400px", height: "500px" }}
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={onSubmitHandler}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="form-control form-control-lg"
                    onChange={onChangeHandler}
                    required={true}
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    onChange={onChangeHandler}
                    required={true}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                {/* <!-- Reset button --> */}
                <button
                  type="reset"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Reset
                </button>

              </form>
            </div>
          </div>
        </div>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
      </section>
    </>
  );
};

export default SignInForm;
