import React, {useState} from 'react'; 


export default function Item ({name, field, begin, end}) {
    return (
        <div className="item_wrapper">
            <div className = "item_name">{name}</div>
            <div className = "item_field">{field}</div>
            <div className="item_beginn">{begin}</div>
            <div className="item_end">{end}</div>
        </div> 
    )
}