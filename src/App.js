import React, { useState } from "react";
import "./Todo.css"
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import Modal from "./components/Modal";

import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";

const SAVED_ITEMS = "savedItems";

export function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

export function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState);
    }
}

const store = createStore(listReducer, loadState())

store.subscribe(() => {
    persistState(store.getState());
})

export default function App(){

    const [showModal, setShowModal] = useState(false);
    
    function onHideModal() {
        setShowModal(false);
    }

    return(
        <div className="container">
            <Provider store={store}>
                <header className="header"><h1>Todo</h1><button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </Provider>
        </div>)
}



