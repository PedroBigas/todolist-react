import React from "react";
import {BsAward, BsAwardFill, BsFillTrashFill} from "react-icons/bs";
import Card from "./card";
import { useDispatch } from 'react-redux'
import { changeDone, deleteItem } from '../actions/listAction'

function DoneImg(props){
    if(props.done) {
        return( <BsAwardFill></BsAwardFill>)
    } else {
        return( <BsAward></BsAward>)
    }
}


function ListItem(props) {

    const dispatch = useDispatch()

    return(
            <li>
                <Card className={props.item.done ? "done item" : "item"}>    
                    {props.item.text}
                    <div>
                    <button onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => {dispatch(deleteItem(props.item.id))}}>
                        <BsFillTrashFill/>
                    </button>
                    </div>
                </Card>
            </li>
    )

}
export default ListItem;

// "Icon made by Pixel perfect from www.flaticon.com"