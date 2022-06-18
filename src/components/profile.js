import React from "react";
import "../CSS/profile.css";
import "../IMG/tnplogo.png";
export const Profile = () => {
  return (
    <>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Profile</title>
          <link rel="stylesheet" href="../CSS/profile.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
            crossorigin="anonymous"
          />
        </head>
        <body>
          {/* <div className="navbar">
            <div className="logo">
              <a href="./profile.html">
                <img src="tnplogo.png" alt="NoSource" />
              </a>
            </div>
            <ul>
              <li>
                <a href="#">DashBoard</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">All Jobs</a>
              </li>
              <li>
                <a href="#">Jobs Home</a>
              </li>
              <li className="active">
                <a href="#">My Profile</a>
              </li>
            </ul>
          </div> */}

          <form>
            <h1>Personal Information</h1>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Name </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="pname"
                  required="required"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Personal Email </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="email"
                  name="pmail"
                  required="required"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Phone Number </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="phone"
                  required="required"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Admission Number </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="roll_no"
                  required="required"
                  readonly="readonly"
                  className="input"
                  placeholder="Prefilled while making usernames & Cannot change"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Gender </label>
              <div data-v-10d4b26c="" className="control">
                <p data-v-10d4b26c="">Your Gender:</p>
                <select data-v-10d4b26c="" id="gender" className="form-control">
                  <option data-v-10d4b26c="">MALE</option>
                  <option data-v-10d4b26c="">FEMALE</option>
                </select>
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Category </label>
              <p data-v-10d4b26c="">Your Category:</p>
              <div data-v-10d4b26c="" className="control">
                <select
                  data-v-10d4b26c=""
                  id="category"
                  className="form-control"
                >
                  <option data-v-10d4b26c="">GENERAL</option>
                  <option data-v-10d4b26c="">SC</option>
                  <option data-v-10d4b26c="">ST</option>
                  <option data-v-10d4b26c="">OBC</option>
                  <option data-v-10d4b26c="">OTHERS</option>
                </select>
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Department </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="department"
                  readonly="readonly"
                  className="input"
                  placeholder="Prefilled while making usernames & Cannot change"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Home Town </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="hometown"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Currently Residing </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="curloc"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Date of Birth (dd/mm/yyyy) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="date"
                  required="required"
                  name="dob"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Graduation Year </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="gradyear"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c="">
                Percentage(10th) (Float field, no need to include %) (you can
                use CGPA or multiply it by 9.5 both are fine)
              </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="p_ten"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c="">
                Percentage(12th) (Float field, no need to include %)
              </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="p_twelve"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem1) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="cgpas1"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem2) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="cgpas2"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem3) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="cgpas3"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem4) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="cgpas4"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem5) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="cgpas5"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem6) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="cgpas6"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem7) (Keep 0 if NA) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="cgpas7"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> CGPA (Sem8) (Keep 0 if NA) </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="cgpas8"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Active Backlogs </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="curbacklog"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Total Backlogs </label>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  name="totalbacklogs"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <label data-v-10d4b26c=""> Resume Link </label>
              <p data-v-10d4b26c="">(Don't forget to make the access public)</p>
              <div data-v-10d4b26c="" className="control">
                <input
                  data-v-10d4b26c=""
                  type="text"
                  required="required"
                  name="resume_link"
                  className="input"
                />
              </div>
            </div>
            <div data-v-10d4b26c="" className="field">
              <div data-v-10d4b26c="" className="control">
                <button data-v-10d4b26c="" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </body>
      </html>
    </>
  );
};
