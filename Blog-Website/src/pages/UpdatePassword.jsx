import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { updatePassword } from "../service/ApiUser";
import { ForgotPasswordContext } from "../context/ForgotPasswordContext";
import update_password from "../assets/update_password.svg";
import "../CSS/UpdatePassword.css"; // Import your UpdatePassword.css file

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userEmail, setUserEmail } = useContext(ForgotPasswordContext);

  async function passwordHandler(event) {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        const isUpdated = await updatePassword(userEmail, newPassword);

        if (isUpdated === "Password updated successfully") {
          toast.success("Password updated successfully");
          setUserEmail("");
        } else if (isUpdated === "User not found") {
          toast.error("User not found");
        } else {
          toast.error("Sorry, something went wrong");
        }
      } catch (error) {
        console.error("Error updating password:", error);
        toast.error("Sorry, something went wrong");
      }
    } else {
      toast.error("Passwords do not match");
    }
  }

  return (
    <div className="container">
      <img src={update_password} alt="update_img" loading="lazy" />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="panel">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x"></i>
                </h3>
                <h2 className="text-center">Update Password?</h2>
                <p>You can reset your password here.</p>
                <div className="panel-body">
                  <form
                    onSubmit={passwordHandler}
                    id="register-form"
                    role="form"
                    autoComplete="off"
                    className="form"
                  >
                    <div className="form-group">
                      <input
                        name="password"
                        placeholder="Enter your password"
                        className="form-control"
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        id="email"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className="form-control"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn" >Update Password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
