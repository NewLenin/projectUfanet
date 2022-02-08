import React from "react";
import "./EForm.css";
const EForm = () => {
  return (
    <React.Fragment>
      <form>
        <fieldset>
      
          <div class="form-floating" id= "forma2">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Введите base64 код</label>
          </div><br/>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default EForm;
