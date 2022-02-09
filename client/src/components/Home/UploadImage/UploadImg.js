import React, { useState } from "react";
import "./UploadStyle.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>
      {selectedImage && (
        <div>
          <img
            className="imgForm"
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            className="btn btn-danger Del"
            onClick={() => setSelectedImage()}
          >
            Удалить
          </button>
        </div>
      )}
      <br />
      <input
        type="file"
        name="myImage"
        className="form-control forma"
        onChange={(event) => {
          console.log(event.target.files);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </React.Fragment>
  );
};

export default UploadAndDisplayImage;
