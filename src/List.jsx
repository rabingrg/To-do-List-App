import React from "react";

const List=(props)=>{
    const deleteIt=()=>{
        console.log("clicked");
    }
    return (<>
        <div >
        {/* <i className="fa fa-times" aria-hidden="true"/> */}
            <li onClick={()=>{ 
                props.onSelect(props.id)
            }}> {props.text}</li>
        </div>
    </>);
}

export default List;