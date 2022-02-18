import React, { Component } from "react";
import "./style.css";


import ReactDOM from "react-dom";

import FileBase64 from "./react-file-base64.js";
import Logreg from "./Modal.js"



class Home extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      text: "",
    };
  }
  handleChange(event) {

    let value = event.target.value;
    this.setState({ text: value });
    console.log(this.state.text);

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
          

          <label className={"Text2"}>Log/Reg</label>
        </button>
        <label className={"Text3"}>Image to Base64</label>
        <div className={"Line"}></div>
        <button className={"But1"}><label className={"Text6"}>Downlowd</label></button>
<<<<<<< HEAD
=======
        <div>
          <form className={"Box1"}>

            <img
                
              src={"data:image/jpeg;base64," + this.state.text}
            />


          </form>
        </div>
        <textarea
          className={"Encode64"}
          type="text"
          onChange={this.handleChange.bind(this)}
          id="baseStr64text"
          name="baseStr64text"
        ></textarea>
>>>>>>> 327b53fece6cfbd3d56ea31670ca90a801541d94
        <div className={"Backf"}>
          <div>
            <div>
              <div className={"Pr"}>
                <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
              </div>
              <div className="Box">
                {this.state.files.map((file, i) => {
                  return <img key={i} src={this.state.files[0].base64} />;
                })}
              </div>
            </div>

<<<<<<< HEAD
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
=======



>>>>>>> 327b53fece6cfbd3d56ea31670ca90a801541d94
            <label className={"Text5"}>Base64 to Image</label>
            <button className={"Copy"} type="submit">
              <label className={"Text4"}>Copy</label>
            </button>
            {this.state.files.length != 0 ? (
              <div>
                <div
                  className={"Code64"}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                >
<<<<<<< HEAD
                  {JSON.stringify(this.state.files[0].base64)}
=======
                  {JSON.stringify(this.state.files[0].base64).slice(1,-1)}
>>>>>>> 327b53fece6cfbd3d56ea31670ca90a801541d94
                </div>
              </div>
            ) : null}

          </div>
        </div>

      </React.Fragment >
    );
  }
}

export default Home;
