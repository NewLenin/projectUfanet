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
              style={{ height: "400px" }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2">Введите base64 код</label>
          </div><br/>
          <button type="submit" class="btn btn-dark">
            Конвертировать
          </button>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default EForm;
