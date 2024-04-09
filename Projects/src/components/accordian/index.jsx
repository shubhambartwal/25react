//single selection
//multiple selection 
import './style.css'
import { useState } from "react"
import data from "./data"

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId) {
let cpymultiple=[...multiple]
const findIndexOfCurrentId=cpymultiple.indexOf(getCurrentId)
if(findIndexOfCurrentId==-1){
    cpymultiple.push(getCurrentId)
}else {
    cpymultiple.splice(findIndexOfCurrentId,1)
}
setMultiple(cpymultiple)
console.log(multiple)
    }
    return (<div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} > Enable multi selection</button>
        <div className="accordian">
            {data && data.length ? data.map((dataItem) =>
                <div key={dataItem.id} className="item">
                    <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        {selected ? null : <span>+</span>}
                    </div>
                    {enableMultiSelection?multiple.indexOf(dataItem.id)!==-1 &&
                    (<div className='content'>{dataItem.ans}</div>):
                    selected === dataItem.id &&(<div className='content'>{dataItem.ans}</div>)
                    }
                   
                </div>)
                : <div>No data found!!</div>}
        </div>
    </div>)
}