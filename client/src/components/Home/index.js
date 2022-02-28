import React, { Component } from "react";
import "./style.css";



import ReactDOM from "react-dom";

import FileBase64 from "./react-file-base64.js";




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
        

        <label className={"Text1"}>UfanetCaptcha</label>
        <div>
          
        <button className={"Log"} type="submit">
          

          <label className={"Text2"}>Log/Reg</label>
        </button>
        
        </div>

        <label className={"Text3"}>Go through the captcha</label>
        <button className={"Send"} type="submit"><label className={"Text2"}>Send</label></button>
        


        <div>
          <form className={"Box1"}>

            <img
                
              src={"data:image/jpeg;base64," + this.state.text}
            />


          </form>
        </div>
        <input
          className={"Encode64"}
          type="text"
          onChange={this.handleChange.bind(this)}
          id="baseStr64text"
          name="baseStr64text"
        ></input>
        <div className={"Backf"}>
          <div>


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
            {this.state.files.length != 0 ? (
              <div>
                <div
                  className={"Code64"}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                >
                  {JSON.stringify(this.state.files[0].base64).slice(1,-1)}
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
