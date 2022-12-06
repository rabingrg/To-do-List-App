import React, { useState } from "react";
import List from "./List";

const App =()=>{

    const [listt,setList] = useState();
    const [listagain,displayList] = useState([]);

    const getInput=(event)=>{
        setList(event.target.value);

    }
    const placeList=()=>{
        displayList((oldItems)=>{
            return [...oldItems,listt];
        });
        setList("");
    }
    const deleteIt=(id)=>{
        
    
    displayList((oldarray)=>{
        return oldarray.filter((arrayElement,index)=>{
            return index !== id; 
        })
    })
}

    return(<>
        <div className="container">
            <h1>To Do List</h1>
            <div className="inputline">
                <input type="text" placeholder="Add an item" onChange={getInput} value={listt} /><br/>
                <button onClick={placeList}>+</button>
            </div>
            <div className="smallcontainer">
                <ul>
                    {listagain.map((itemvalue,index)=>{
                        return <List text={itemvalue} key={index} id={index} onSelect={deleteIt}/>;
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
}
export default App;