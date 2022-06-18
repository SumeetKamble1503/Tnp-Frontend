import React from "react";
// import "../CSS/postjobs_bootstrap.min.css";
import "../CSS/loginstyle.css";
export const Login = () => {
  return (
    <>
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
          <link href="../CSS/loginstyle.css" rel="stylesheet" />
          <title>Login Form TNP</title>
        </head>
        <body>
          <div className="main-container1">
            <div className="container1">
              <div className="formcontainer">
                <form className="form1">
                
                    <h1>Login</h1>
                    <br />
                  

                  <div className="input1">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      title="Please enter your Username here"
                    />
                    <label for="username">Username</label>
                  </div>

                  <div className="input1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      title="Please enter your Password here"
                    />
                    <label for="username">Password</label>
                  </div>

                  <input type="submit" value="Login" className="login-btn1" />
                  <a href="#">Forgot Password?</a>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
