import { useState } from "react"

export default function FormContainer({payment , setPayment}){
    function handleSubmit(e){
    e.preventDefault();
    setPayment("");
    }
   return( <div className="form-container" onSubmit={handleSubmit}>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" id="input-form" value={payment || ""} onChange={(e)=>setPayment(Number(e.target.value))} />
    </form>
    </div>)
}