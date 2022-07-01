import React from "react";
// import "../CSS/postjobs_bootstrap.min.css";
import "../CSS/loginstyle.css";
export const Register = () => {
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
                  <h1>Register</h1>
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

                  <div className="input1"
                   style={{
                    
                    display:"flex-start",
                    alignSelf: "auto | flex-start | flex-end | center | baseline | stretch",
                  }}>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      title="Please enter your Password here"
                    />
                    <label for="username">Password</label>
                  </div>

                  <div
                    className="input2"
                    style={{
                      // height: "auto",
                      // width: "100%",
                      // alignitems: "center",
                      // justifycontent: "center",
                      // display:"flex-start",
                      // alignSelf: "auto | flex-start | flex-end | center | baseline | stretch",
                    }}
                  >
                    {/* <div
                      className="row"
                      style={{
                        alignitems: "center",
                        justifycontent: "center",
                        height: "auto",
                        width: "260px",
                      }}
                    > */}
                    <div
                      className="form-group"
                      style={{
                        justifyContent: "center",
                        alignitems: "center",
                      }}
                    >
                      <label for="JobType" className="col-form-label-md">
                        Job Type
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault"
                          checked
                        />

                        <label
                          className="col-form-label-md"
                          for="flexRadioDefault"
                        >
                          Full Time
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault"
                        />
                        <label
                          className="col-form-label-md"
                          for="flexRadioDefault"
                        >
                          Intern
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}

                  {/* <label for="type">User Type</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Admin
                    </label>
                  
                  
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Student
                    </label>
                  </div> */}

                  <input
                    type="submit"
                    value="Register"
                    className="login-btn1"
                  />
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
