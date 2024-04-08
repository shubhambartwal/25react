//single selection
//multiple selection 
import './style.css'
import { useState } from "react"
import data from "./data"

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    function handleSingleSelection(getCurrentId){
setSelected(getCurrentId===selected?null:getCurrentId)
    }
    return (<div className="wrapper">
        <div className="accordian">
            {data && data.length ? data.map((dataItem) =>
             <div key={dataItem.id} className="item">
                <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                   {selected?null:<span>+</span>} 
                </div>  
                {selected===dataItem.id?<div className="content">
                    <h2>{dataItem.ans}</h2>
                </div>:null}
            </div>)
             : <div>No data found!!</div>}
        </div>
    </div>)
}