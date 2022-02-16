import React, { Component } from "react";
import "./style.css";

import ReactDOM from "react-dom";

import FileBase64 from "./react-file-base64.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className={"navbar"}></div>
        </nav>
        <label className={"Text1"}>UfanetConverter</label>
        <button className={"Log"} type="submit">
          {" "}
          <label className={"Text2"}>Log/Reg</label>
        </button>
        <label className={"Text3"}>Image to Base64</label>
        <div className={"Line"}></div>
        <button className={"But1"}><label className={"Text6"}>Downlowd</label></button>
        <div className={"Backf"}>
          <div>
            <div>
              <div className={"Pr"}>
                <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
              </div>
              <div className="Box">
                {this.state.files.map((file, i) => {
                  return <img key={i} src={file.base64} />;
                })}
              </div>
            </div>

            <input
            className={"Encode64"}
              type="text"
              
              id="baseStr64text"
              name="baseStr64text"
            ></input>

            <div>
              <form className={"Box1"}>
                {this.state.files.map((file, i) => {
                  let baseStr64 = document.getElementById("baseStr64text")
                    .value;
                  return (
                    <img
                      
                      key={i}
                      src={"data:image/jpg;base64," + baseStr64}
                    />
                  ); //реализуйте вывод пж из base64 в картинку
                })}
              </form>
            </div>
            <label className={"Text5"}>Base64 to Image</label>
            <button className={"Copy"} type="submit">
              <label className={"Text4"}>Copy</label>
            </button>
            {this.state.files.length != 0 ? (
              <div>
                <textarea
                  className={"Code64"}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                >
                  {JSON.stringify(this.state.files[0].base64)}
                </textarea>
              </div>
            ) : null}
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Home;
