import React, { useState } from "react";
import "./UploadStyle.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  function send(e){
    e.preventDefault();
    var file = document.forms.imgForm;
    // var file = document.forms.imgForm.elements.myImage.value;
    // var file = document.forms.imgForm.elements.myImage.value.get[0].files[0];
    //
    //
    //         var newFileName = file.filename + "new";
    //         var formData = new FormData();
    //         formData.append('file', file, newFileName);
    // console.log( document.forms.form.elements.myImage.value);
    
    let XHR = new XMLHttpRequest();
    XHR.open("POST", "/sendImg");
    XHR.send(file);

    console.log(file);
  }

  return (
    <React.Fragment>
      {selectedImage && (
        <div>
          <img
            className="imgForm"
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <button
            className="btn btn-danger Del"
            onClick={() => setSelectedImage()}
          >
            Удалить
          </button>
        </div>
      )}
      <form enctype="multipart/form-data" method="POST" action="" onSubmit={(event)=>send(event)} name="imgForm">
        <input
          type="file"
          name="myImage"
          className="form-control forma"
          onChange={(event) => {
            console.log(event.target.files);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <button type="submit">Send</button>
      </form>

    </React.Fragment>
  );
};

export default UploadAndDisplayImage;
