import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App.jsx"


const TOKEN = 'dc627becd123734adc4f2033c38ec414';

function render() {
	ReactDOM.render(<App token={TOKEN}/>, document.getElementById("container"));
}

render();