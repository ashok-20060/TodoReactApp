import React from "react";
import styles from "./header.module.scss";
import PropTypes from "prop-types";

function Header(props) {
  return <h1 className={styles.titleHeading}>{props.name}</h1>;
}
Header.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};
Header.defaultProps = {
  className: "",
};
export default Header;
