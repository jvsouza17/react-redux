import React, {useState} from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

export default function TodoForm(props){

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItemEvent(event){
        event.preventDefault();
        if(text){
            dispatch(addItem(text));
            setText("");
            props.onHideModal(); 
        }
    }

    return(
        <form>
            <input type="text" value={text} onChange={handleChange}></input>
            <button onClick={addItemEvent}>Add</button>
        </form>
    )
}