import React, {useState} from 'react'; 


export default function Item (props) {
    return (
        <div className="item_wrapper">
            <div className = "item_name">props.name</div>
            <div className = "item_field">props.field</div>
            <div className="item_beginn">props.beginn</div>
            <div className="item_end">props.end</div>
        </div> 
    )
}