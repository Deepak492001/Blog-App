import React, { useContext, useState } from "react";
import {
  getOtp,
  getOtpfromLocalStorage,
  sendOtpMailToUser,
  setOtpOnLocalStorage,
} from "../service/ApiOtp";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordContext } from "../context/ForgotPasswordContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const { setUserEmail, userEmail } = useContext(ForgotPasswordContext);
  const navigate = useNavigate();

  // Handle form submission for email
  async function onSubmitHandler(event) {
    event.preventDefault();
    setUserEmail(email);

    const isOtpSend = await sendOtpMailToUser(userEmail);
    if (isOtpSend !== undefined && isOtpSend.startsWith("OTP")) {
      toast.success(isOtpSend);
      const otpValue = await getOtp();
      setUserOtp(otpValue.data);
      await setOtpOnLocalStorage(otpValue.data);
    } else {
      toast.error(isOtpSend);
    }
  }

  // Handle form submission for OTP verification
  async function otpHandler(event) {
    event.preventDefault();
    const otpValue = await getOtpfromLocalStorage();

    if (otp === String(otpValue)) {
      toast.success("OTP verified!");
      navigate(`/update-password/${email}`);
    } else {
      toast.error("Invalid OTP");
    }
  }

  return (
    <>
      <div className="container">
        {/* ... */}
        <div className="panel-body">
          <div className="text-center">
            {/* ... */}
            <form
              id="email-form"
              role="form"
              autoComplete="off"
              className="form"
              onSubmit={onSubmitHandler}
            >
              <div className="form-group">
                {/* Input for email */}
                <input
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
              </div>
              <div className="form-group">
                <button type="submit">Enter Email</button>
              </div>
            </form>
            {/* OTP Section */}
            {userOtp !== "" && (
              <form
                id="otp-form"
                role="form"
                autoComplete="off"
                className="form"
                onSubmit={otpHandler}
              >
                <div className="form-group">
                  {/* Input for OTP */}
                  <input
                    id="otp"
                    name="otp"
                    placeholder="Enter OTP"
                    className="form-control"
                    value={otp}
                    type="text"
                    onChange={(e) => setOtp(e.target.value.trim())}
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Enter OTP</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
