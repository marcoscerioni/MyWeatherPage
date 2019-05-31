import React from "react";

class Form extends React.Component{

    render(){
        return(
                <form onSubmit = "hola">
                    <input type="text" name="country" placeholder="Enter your location"/>
                    <button>Check Weather</button>
                </form>
        )
    }
}

export default Form;