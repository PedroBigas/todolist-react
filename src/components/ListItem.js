import React from "react";
import {BsAward, BsAwardFill, BsFillTrashFill} from "react-icons/bs";
import Card from "./card";

function DoneImg(props){
    if(props.done) {
        return( <BsAwardFill></BsAwardFill>)
    } else {
        return( <BsAward></BsAward>)
    }
}


function ListItem(props) {

    return(
            <li>
                <Card className={props.item.done ? "done item" : "item"}>    
                    {props.item.text}
                    <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => {props.onItemDeleted(props.item)}}>
                        <BsFillTrashFill/>
                    </button>
                    </div>
                </Card>
            </li>
    )

}
export default ListItem;

// "Icon made by Pixel perfect from www.flaticon.com"