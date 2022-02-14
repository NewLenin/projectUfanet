import React, { Component } from "react";
import "./style.css";



import ReactDOM from 'react-dom';

import FileBase64 from './react-file-base64.js';


class Home extends Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  getFiles(files) {
    this.setState({ files: files })
  }

  render() {
    return (


      <React.Fragment>

        <div id="back">
          <div class="container">
            <div >



              <div className="text-center mt-25">
                <p className="text-center"> Выберите файл</p>
                <FileBase64
                  multiple={true}
                  onDone={this.getFiles.bind(this)} />
              </div>
              <div className="text-center">
                {this.state.files.map((file, i) => {
                  return <img key={i} src={file.base64} />
                })}
                <img src="" />
              </div>
         
              <input type="text" id="baseStr64text" name="baseStr64text"></input>
              <div className="text-center">
              <form > 
                 
              
                {this.state.files.map((file, i) => {
                  let baseStr64 = document.getElementById("baseStr64text").value;
                  return <img key={i} src={"data:image/jpg;base64," + baseStr64} />//реализуйте вывод пж из base64 в картинку

                })}
              
                <img src="" />
                </form>
              </div>
              {this.state.files.length != 0 ?
                <div>
                  <h3 className="text-center mt-25">Вывод</h3>
                  <div className="pre-container">
                    <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
                  </div>
                </div>
                : null}

            </div>

            <div className="row" >
              <div className="col-6 p-3">

              </div>
              <div className="col-6 p-3">



              </div>
            </div>
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default Home;
