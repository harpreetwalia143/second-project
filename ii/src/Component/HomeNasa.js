import React from "react";
import { NavLink } from "react-router-dom";

const HomeNasa = () => {
  return (
    <div className="container">
      <div className="row">
        <img src="/explore-humans-in-space-02.png"></img>
      </div>
      <div className="row padding" style={{ display: "inline" }}>
        <NavLink
          to="/Topics"
          style={{ margin: 20, fontSize: 22, color: "aqua" }}
        >
          Topics
        </NavLink>
        <NavLink
          to="/Mission"
          style={{ margin: 20, fontSize: 22, color: "orange" }}
        >
          Mission
        </NavLink>
        <NavLink
          to="/Galleries"
          style={{ margin: 20, fontSize: 22, color: "lightpink" }}
        >
          Galleries
        </NavLink>
        <NavLink
          to="/NasaTv"
          style={{ margin: 20, fontSize: 22, color: "green" }}
        >
          Nasa Tv
        </NavLink>
        <NavLink
          to="/FollowNasa"
          style={{ margin: 20, fontSize: 22, color: "yellow" }}
        >
          Follow Nasa
        </NavLink>
        <NavLink
          to="/Downloads"
          style={{ margin: 20, fontSize: 22, color: "blue" }}
        >
          Downloads
        </NavLink>
        <NavLink to="/About" style={{ margin: 20, fontSize: 22, color: "red" }}>
          About
        </NavLink>
        <NavLink
          to="/NasaAudiences"
          style={{ margin: 20, fontSize: 22, color: "volte" }}
        >
          Nasa Audiences
        </NavLink>
      </div>
      <div className="padding">
        <div
          className="row"
          style={{ display: "inline", marginRight: "350px" }}
        >
          <NavLink
            to="/Human"
            className="container-fluid "
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Human in Space
          </NavLink>
          <NavLink
            to="/Moon"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Moon to Mars
          </NavLink>
          <NavLink
            to="/Earth"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Earth
          </NavLink>
          <NavLink
            to="/Space"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Space Tech
          </NavLink>
          <NavLink
            to="/Flight"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Flight
          </NavLink>
          <NavLink
            to="/Solar"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Solar System and Beyond
          </NavLink>
          <NavLink
            to="/Steam"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Steam Engagement
          </NavLink>
          <NavLink
            to="/History"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            History
          </NavLink>
          <NavLink
            to="/Benefits"
            className="container-fluid"
            style={{
              padding: "2px",
              margin: "3px",
              fontSize: "15px",
            }}
          >
            Benefits to You
          </NavLink>
        </div>
        <div className="col-md-12">
          <div className="row padding-top image">
            <div className="col-md-5">
              <img
                style={{ height: "97%", width: "100%", margin: "45px" }}
                src="curiosity_selfie.jpg"
                className="img-fluid"
              />
              <h4 className="headLine">
                Track the Webb Telescope and Follow Its Deployment
              </h4>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    style={{ height: "280px", width: "330px", margin: "40px" }}
                    src="seasons_msg_20101221_lrg.jpeg"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    style={{ height: "280px", width: "400px", margin: "40px" }}
                    src="pia24577.jpeg"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div>
                    <img
                      src="12.jpg"
                      className="img-fluid"
                      style={{
                        height: "370px",
                        width: "600px",
                        margin: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row padding-top image">
            <div className="col-md-3">
              <img src="4.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="5.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="6.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="7.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <img src="8.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="9.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="10.jpg" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="11.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <button className="col-md-12 Submit-button" type="button">
        SEE MORE
      </button>
    </div>
  );
};

export default HomeNasa;
