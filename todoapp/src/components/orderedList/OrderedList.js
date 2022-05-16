import React from "react";
import _map from "lodash/map";
import Button from "../button";
import styles from "./orderedList.module.scss";
import PropTypes from 'prop-types';
const OrderedList = (props) => {
  return (
    <ol>
      {_map(props.list, (item, index) => {
        return (
          <li key={item}>
            <span className={styles.spantext}>{props.list[index]}</span>
            {props.completedListFlag ? (
              <Button
                name="deleteCompletedTask"
                className="deletecompletedbtn"
                onClick={() => {
                  props.removeCompletedTask(props.list[index]);
                }}
              />
            ) : (
              <>
                <Button
                  name="Complete"
                  className="completebtn"
                  onClick={() => props.completeTask(props.list[index])}
                />
                <Button
                  name="Delete"
                  className="deletebtn"
                  onClick={() => {
                    props.removeTask(props.list[index]);
                  }}
                />
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
};
OrderedList.propTypes={
  list:PropTypes.array,
  completeTask:PropTypes.func,
  removeTask:PropTypes.func,
  removeCompletedTask:PropTypes.func,
  completedListFlag:PropTypes.bool,
}

export default OrderedList;

