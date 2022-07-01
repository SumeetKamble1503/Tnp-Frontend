import React from "react";
import "../CSS/postjobs_bootstrap.min.css";
import "../CSS/postjobs_fstyle.css";
import "../CSS/postjobs_style.css";
export const Postjobs = () => {
  // const current = new Date();
  // const date = `${current.getFullYear()}-${current.getDate()}-${current.getMonth()+1}`;
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="../CSS/postjobs_bootstrap.min.css" />

          <link rel="stylesheet" href="../CSS/postjobs_fstyle.css" />

          <link rel="stylesheet" href="../CSS/postjobs_style.css" />

          <title>Post Job</title>
        </head>
        <body>
          <div className="content">
            <div className="container">
              <div className="row align-items-stretch justify-content-center no-gutters">
                <div className="col-md-7">
                  <div className="form h-100 contact-wrap p-5">
                    <h2 className="text-center">Post New Job</h2>
                    <form
                      className="mb-5"
                      method="post"
                      id="jobForm"
                      name="jobForm"
                    >
                      {/* Name of the company  */}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label for="" className="col-form-label-md">
                            Name of the Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Company name"
                            // value="Google"
                            required
                          />
                        </div>
                      </div>

                      {/* Job Role */}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label for="Role" className="col-form-label-md">
                            Job Role
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="SDE"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      {/* CTC */}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label for="CTC" className="col-form-label-md">
                            CTC Offered
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="12"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      {/* Eligibility*/}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label
                            for="Eligibility"
                            className="col-form-label-md"
                          >
                            Eligibility Criteria
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="7 (CGPA)"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      {/* Job Type */}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
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

                      {/* Date and Time*/}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label for="Date" className="col-form-label-2">
                            Deadline
                          </label>
                          <br />
                          <label for="Date" className="col-form-label-sm">
                            Date
                          </label>

                          <input
                            type="date"
                            className="form-control"
                            id="date"
                          />
                          <label for="Time" className="col-form-label-sm">
                            Time
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            id="date"
                            placeholder="10:00PM"
                          />
                        </div>
                      </div>

                      {/* Eligibility*/}
                      <div className="row">
                        <div className="col-md-12 form-group mb-3">
                          <label for="JD" className="col-form-label-md">
                            Job Description or More Details Link (drive)
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Google Drive Link"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-md-5 form-group text-center">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-block btn-primary rounded-0 py-2 px-4"
                          />
                          <span className="submitting"></span>
                        </div>
                      </div>
                    </form>

                    <div id="form-message-warning mt-4"></div>
                    <div id="form-message-success">Job posted.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
