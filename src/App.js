import React, { useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import './Todo.css'
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from './components/Item.js'
import Modal from "./components/Modal";

import {createStore} from 'redux'
import { Provider } from "react-redux";

import ListReducer from "./reducers/ListReducer";



const SAVED_ITEMS = 'savedItems'

function persistState(state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if(actualState)
        return JSON.parse(actualState)
    else 
        return []
}

const store = createStore(ListReducer, loadState())

store.subscribe(()=>{
    persistState(store.getState())
})

function App() {

    const [showModal, setShowModal] = useState(false)

    function onHideModal(){
        setShowModal(false)
    }

    return(

        <div className="container">    
        <Provider store={store}>
            <header className="header"><h1>Todo</h1> <button onClick={()=>{setShowModal(true)}} className="addButton"><BsFillPlusCircleFill></BsFillPlusCircleFill></button></header>    
            

            <List ></List>

            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </Provider>
        </div>
    )
}


export default App;