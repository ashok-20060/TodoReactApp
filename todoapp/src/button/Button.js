import React from "react";
// import './button.css';
import styles from './button.module.scss';
export default class Button extends React.Component{
render(){
    let classNameForButton=this.props.className;
    return(
        <button className={styles[classNameForButton]} onClick={this.props.onClick}>{this.props.children}</button>
    );
}
};