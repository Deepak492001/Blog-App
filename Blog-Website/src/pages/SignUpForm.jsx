import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { addUser, checkUserExistsByEmail } from "../service/ApiUser";
import { Link, useNavigate } from "react-router-dom";
import geetika1 from "../assets/geetika1.png";
import { doLogin } from "../service/Authentication";
const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // check here----------------------------------------------------------------
  async function onSubmitHandler(event) {
    event.preventDefault();
    if (user.password.trim() !== user.confirmPassword.trim())
      toast.error("Password Didn't Matched");
    else {
      const isUserExists = await checkUserExistsByEmail(user.email);
      console.log(isUserExists.data);
      if (isUserExists.data) {
        toast.error("User with same email already exists");
      } else {
        await addUser(user);
        doLogin(user.email);
        toast.success("Account Created Successfully");
        toast("Good Job!", {
          icon: "👏",
        });

        navigate("/user/dashboard");
      }
    }
  }
  function onChangeHandler(event) {
    const { name, value } = event.target;
    setUser((user) => {
      return { ...user, [name]: value.trim() };
    });
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              // src={geetika1}
              style={{ width: "400px", height: "500px" }}
              className="img-fluid"
              loading="lazy"
              alt="image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={onSubmitHandler}>
              {/* <!-- Name input --> */}
              <div className="form-outline mb-4">
                <input
                  type="name"
                  name="name"
                  id="name"
                  required={true}
                  value={user.name}
                  onChange={onChangeHandler}
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="name">
                  Name
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  className="form-control form-control-lg"
                  onChange={onChangeHandler}
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
                  required={true}
                  name="password"
                  minLength={8}
                  className="form-control form-control-lg"
                  onChange={onChangeHandler}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* <!-- Confirm Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    required={true}
                    minLength={8}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    onChange={onChangeHandler}
                  />
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                </div>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign Up
              </button>

              {/* <!-- Reset button --> */}
              <button type="reset" className="btn btn-primary btn-lg btn-block">
                Reset
              </button>

            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SignUpForm;
