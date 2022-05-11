import React from "react";
import _map from "lodash/map";
import Button from "../button";
import styles from "./orderedList.module.scss";
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
export default OrderedList;
