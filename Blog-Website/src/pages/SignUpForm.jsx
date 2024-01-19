import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { addUser, checkUserExistsByEmail } from "../service/ApiUser";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (user.password.trim() !== user.confirmPassword.trim())
      toast.error("Password Didn't Matched");
    else {
      const isUserExists = await checkUserExistsByEmail(user.email);
      console.log(isUserExists.data);
      if (isUserExists.data) {
        toast.error("User with the same email already exists");
      } else {
        await addUser(user);
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
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={onSubmitHandler} className="p-4 border rounded bg-white">
              <h1 className="h3 mb-3 fw-normal text-center">Sign Up</h1>

              <div className="form-floating mb-4">
                <input
                  type="name"
                  name="name"
                  id="name"
                  required={true}
                  value={user.name}
                  onChange={onChangeHandler}
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  className="form-control"
                  onChange={onChangeHandler}
                />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="password"
                  id="password"
                  required={true}
                  name="password"
                  minLength={8}
                  className="form-control"
                  onChange={onChangeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="password"
                  required={true}
                  minLength={8}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  onChange={onChangeHandler}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Sign Up
              </button>

              <button type="reset" className="btn btn-secondary btn-lg btn-block">
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
