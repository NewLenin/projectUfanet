import React, { Component } from "react";
import "./style.css";
import UploadAndDisplayImage from "./UploadImage/UploadImg";
import EForm from "./EncodeForm/EForm";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="back">
          <div class="container">
            <div className="row">
              <div className="col-6 p-3">
                <UploadAndDisplayImage />
              </div>
              <div className="col-6 p-3">
                <EForm />
              </div>
              <div className="align-items-center">

                <div>
              
              </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Home;
