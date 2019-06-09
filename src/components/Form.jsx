import React from "react";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Button, Textfield } from "react-mdl";

class Form extends React.Component {
  onInputChange(e) {
    this.props.onInputChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <div
        className={"Form"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <html>
          <head>
            <script src="https://code.getmdl.io/1.3.0/material.min.js" />
            <link
              rel="stylesheet"
              href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
          </head>
          <body>
            <div className="col">
              <Textfield
                onChange={this.onInputChange.bind(this)}
                name="city"
                label="Enter the city"
                floatingLabel
                style={{ width: "200px" }}
              />
            </div>

            <div className="col">
              <Textfield
                onChange={this.onInputChange.bind(this)}
                name="country"
                label="Enter the country"
                floatingLabel
                style={{ width: "200px" }}
              />
            </div>
          </body>
        </html>

        <html>
          <Button raised accent ripple onClick={this.props.onSubmit.bind(this)}>
            Check Weather{" "}
          </Button>
        </html>
      </div>
    );
  }
}

export default Form;
