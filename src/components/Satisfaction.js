import { Children, useState } from "react"

export default function Satifaction({precentage  , onSelect ,  children}){
    
    return(<div className="satsfaction-container">
        <label>{children}</label>
        <select className="select-box" value={precentage || 0} onChange={(e)=>onSelect(Number(e.target.value))}>
            <option value="0">Not Good (%0)</option>
            <option value="5"> it was ok (%5)</option>
            <option value="10">it was Good (%10)</option>
            <option value="20">Absolutely Amazing (%20)</option>
        </select>
    </div>)
}