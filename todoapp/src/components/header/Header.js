import React from "react";
import styles from "./header.module.scss";
function Header(props) {
  return <h1 className={styles.titleHeading}>{props.name}</h1>;
}
Header.defaultProps={
  name: "headingApp"
}
export default Header;