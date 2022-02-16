import React from "react";
import "./style.css";

export default class FileBase64 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(e) {
    let files = e.target.files;

    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        let fileInfo = {
          base64: reader.result,
        };
        var a = reader.result;
        console.log(a);

        allFiles.push(fileInfo);

        if (allFiles.length == files.length) {
          if (this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }
      };
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
          
          className={"custom-file-input"}
          type="file"
          onChange={this.handleChange.bind(this)}
          multiple={this.props.multiple}
        />
      </React.Fragment>
    );
  }
}

FileBase64.defaultProps = {
  multiple: false,
};
