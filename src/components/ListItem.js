import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone} from "../actions/listAction";

function DoneImg(props) {
  if (props.done) {
    return (<img width={40} alt="done" src="/done.jpg"></img>);
  } else {
    return (<img width={40} alt="undone" src="/undone.png"></img>);
  }
}

export default function ListItem(props) {
  const dispatch = useDispatch();
  return (
    <li className="buttons">
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div >
          <button className="checkButton" onClick={() => { dispatch(changeDone(props.item.id)) }}>
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button className="deleteButton" onClick={() => { dispatch(deleteItem(props.item.id)) }}>
            <img width={15} alt="remove" src="/remove.png"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}
