import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default () => {
  return (
    <AnimationRevealPage>
          <div style={{ marginTop: "20px", marginLeft: "40px" }}>
              <div style={{ position: "relative" }}>
                  <div
                      style={{
                          position: "relative",
                          background: "#0D99FF",
                          padding: "10px",
                          borderRadius: "10px",
                          width: "fit-content",
                      }}
                  >
                      <p style={{ color: "white", fontWeight: "bold", display: "inline" }}>
                          Personal information
                      </p>
                  </div>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                      <div style={{ marginTop: "0px", marginLeft: "20px" }}>
                          <p>Name:</p>
                          <p>Gender:</p>
                          <p>Date of birth:</p>
                          <p>Province/city:</p>
                          <p>District:</p>
                          <p>ID number:</p>
                          <p>Phone number:</p>
                          <p>Email:</p>
                      </div>
                      <div style={{ marginTop: "0px", marginLeft: "60px" }}>
                          <p>Lo Anh Duc</p>
                          <p>Male</p>
                          <p>01/02/1995</p>
                          <p>Hanoi</p>
                          <p>19021243</p>
                          <p>034101007845</p>
                          <p>0328919074</p>
                          <p>ducla@hanoihospital.com</p>
                      </div>
                  </div>

                  <div
                      style={{
                          marginTop: "20px",
                          position: "relative",
                          background: "#0D99FF",
                          padding: "10px",
                          borderRadius: "10px",
                          width: "fit-content",
                      }}
                  >
                      <p
                          style={{ color: "white", fontWeight: "bold", display: "inline" }}
                      >
                          Patient management
                      </p>
                  </div>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                      <div style={{ marginTop: "0px", marginLeft: "20px" }}>
                          <p>Medical history:</p>
                          <p>Drug using history:</p>
                          <p>Family medical history:</p>
                      </div>
                      <div style={{ marginTop: "0px", marginLeft: "60px" }}>
                          <p></p>
                          <p></p>
                          <p></p>
                      </div>
                  </div>
                  <div
                      style={{
                          marginTop: "20px",
                          position: "relative",
                          background: "#0D99FF",
                          padding: "10px",
                          borderRadius: "10px",
                          width: "fit-content",
                      }}
                  >
                      <p
                          style={{ color: "white", fontWeight: "bold", display: "inline" }}
                      >
                          Hospital medical history
                      </p>
                  </div>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                      <div style={{ marginTop: "0px", marginLeft: "20px" }}>
                          <p><strong>No.01</strong></p>
                          <p>Date:</p>
                          <p>Hospital:</p>
                          <p>Doctors:</p>
                          <p>Symptoms:</p>
                          <p>Tests:</p>
                          <p>Diagnose:</p>
                          <p>Drug:</p>
                          <p>Advice:</p>
                          <p>Follow-up appointment:</p>
                      </div>
                      <div style={{ marginTop: "0px", marginLeft: "60px" }}>
                          <p>&nbsp;</p>
                          <p>18/09/2021 </p>
                          <p>Thanh Hoa hospital </p>
                          <p>Ms Nguyen Van A</p>
                          <p>xxx</p>
                          <p>xxx, xxx, xxx</p>
                          <p>xxx </p>
                          <p>Paracetamol xxx</p>
                          <p>xxx</p>
                          <p>xxx</p>
                      </div>
                  </div>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                      <div style={{ marginTop: "0px", marginLeft: "20px" }}>
                          <p><strong>No.02</strong></p>
                          <p>Date:</p>
                          <p>Hospital:</p>
                          <p>Doctors:</p>
                          <p>Symptoms:</p>
                          <p>Tests:</p>
                          <p>Diagnose:</p>
                          <p>Drug:</p>
                          <p>Advice:</p>
                          <p>Follow-up appointment:</p>
                      </div>
                      <div style={{ marginTop: "0px", marginLeft: "60px" }}>
                          <p>&nbsp;</p>
                          <p>21/10/2022 </p>
                          <p>Thanh Hoa hospital </p>
                          <p>Mr Tran Thi B</p>
                          <p>xxx </p>
                          <p>xxx, xxx, xxx</p>
                          <p>xxx </p>
                          <p>Paracetamol xxx</p>
                          <p>xxx</p>
                          <p>xxx</p>
                      </div>
                  </div>
              </div>


          </div>
    </AnimationRevealPage>
  );
};
