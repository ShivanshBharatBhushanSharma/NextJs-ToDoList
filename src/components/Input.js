import { useState } from "react"; 
import React from "react";
import './Input.css'; 

export default () => {
    const [toDoList , setToDoList] = useState([]);
    const [data, setData] = useState('');


    const handler = (event) => {
        setData(event.target.value);
    }
    function addData(){
        setToDoList((toDoList)=>{
            const list = [...toDoList,data];
            setData('');
            return list;
        } )
    }
   
    return (
        <>
        <div id="container">
        <input placeholder="Enter your task" type="text" value={data} onChange={handler} />
        <button onClick={addData}>add Task</button>
        <h3>Your To Do List</h3>
        {toDoList !== [] && toDoList.map((val,i)=>{
            return(
                <>
                <p key={i}>
                <div>{val}</div>
                </p>
                </>
            )
        } )}
        </div>
        
        </>
    )
}