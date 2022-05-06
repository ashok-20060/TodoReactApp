import React from "react";
// import './header.css';
import styles from './header.module.scss';
export default function Header(props) {
        return(
            <h1 className={styles.titleHeading}>{props.children}</h1>
        );
};