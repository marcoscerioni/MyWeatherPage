import React from "react";


class Form extends React.Component{

    onInputChange(e) {
        this.props.onInputChange(e.target.name, e.target.value)
    }

    render(){
        return(
            <div className={"Form"} style={{display: 'flex',justifyContent:'center',
                alignItems: 'center' }}>

                <html>
                <head>
                    <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
                    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </head>
                <body>
                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input onChange={this.onInputChange.bind(this)} name = "city"
                               className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Enter the city</label>
                    </div>
                </form>
                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input onChange={this.onInputChange.bind(this)} name = "country"
                               className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Enter the country</label>
                    </div>
                </form>
                </body>
                </html>

                <html>
                <head>
                    <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
                    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-lightblue.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </head>
                <body>
                <button onClick={this.props.onSubmit.bind(this)}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Check Weather
                </button>
                </body>
                </html>
            </div>
        )
    }
}

export default Form;