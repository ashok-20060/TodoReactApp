import React from "react";
import './Button.css';
export default class Button extends React.Component{
render(){
    return(
        <button className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
    );
}
};