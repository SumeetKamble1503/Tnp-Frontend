import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";
import  { useState } from 'react';
// import {Text} from "react-native";
export const DashboardAdminCard = (props) => {
  const item = props["item"];
  const [value,setvalue] = useState("Start");
  return (
    <>
      <div class="col-sm-6">
        <Card
          style={{
            alignItems: "left",
            width: "100%",
            display: "inline-flex",
            border: "3px solid black",
            borderRadius: "15px 15px 0px 0px",
            margin: "0px",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "green",
              border: "1px solid #198754",
              borderBottom: "none",
              borderRadius: "13px 13px 0px 0px",
              backgroundColor: "#198754",
              fontWeight: "bold",
              fontSize: "120%",
              padding: "10px",
              margin: "0px",
            }}
          >
            <Card.Title
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "120%",
                padding: "5px",
                textAlign: "left",
              }}
            >
              <Container>
                <Container style={{marginBottom:"5px"}}>{item.CompanyName}</Container>

                <button
                  type="button"
                  class=" btn-outline-primary"
                  style={{
                    textDecoration: "none",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    float: "right",
                    border: "1px solid black",
                    borderRadius: "7px",
                    padding: "5px 10px",
                    fontSize: "80%",
                    marginLeft: "10px",
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class=" btn-outline-primary"
                  style={{
                    textDecoration: "none",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    float: "right",
                    border: "1px solid black",
                    borderRadius: "7px",
                    padding: "5px 10px",
                    fontSize: "80%",
                    marginLeft: "10px",
                  }}
                >
                  Print
                </button>
                { value == "Start" ? (
                  <button
                    type="button"
                    class=" btn-outline-primary"
                    style={{
                      textDecoration: "none",
                      top: "10px",
                      right: "10px",
                      display: "flex",
                      float: "right",
                      border: "1px solid black",
                      borderRadius: "7px",
                      padding: "5px 10px",
                      fontSize: "80%",
                    }}
                    onClick={() => setvalue("Stop")}
                  >
                    {value}
                  </button>
                ) : value == "Stop" ? (
                  <button
                    type="button"
                    class=" btn-danger disabled"
                    style={{
                      fontSize: "80%",

                      textDecoration: "none",
                      top: "10px",
                      right: "10px",
                      display: "flex",
                      float: "right",
                      border: "1px solid black",
                      borderRadius: "10px",
                      padding: "5px 10px",
                    }}
                    onClick={() => setvalue("Start")}
                  >
                    Stop
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    style={{
                      fontSize: "100%",
                      top: "10px",
                      textDecoration: "none",
                      right: "10px",
                      display: "flex",
                      float: "right",
                      border: "1px solid black",
                      borderRadius: "0px",
                    }}
                    disabled
                  >
                    Apply
                  </button>
                )}
              </Container>
            </Card.Title>
          </span>
          <Card.Body>
            {/* <Card.Subtitle className="mb-2 text-muted">
                One Stop For all CS subjects
              </Card.Subtitle> */}
            <Card.Text style={{ color: "black", textAlign: "left" }}>
              Role : {item.Role}
              <br />
              {/* Location : {item.Location}
                <br /> */}
              CTC : {item.CTC}
              <br />
              Eligibility : {item.Eligibility}
              <br />
              Type : {item.Type}
              <br />
              Deadline : {item.Deadline}
              {/* {item.Jd} */}
              {/* <Text numberOfLines={1} style={{ width: 100 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to mak
              </Text> */}
            </Card.Text>
            <Card.Link href="https://drive.google.com/file/d/1axyW-LcuX8tf5DLTOFfgkGRT4D8K3TRt/view?usp=sharing">
              {" "}
              For More Details
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
