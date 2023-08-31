import { useState } from "react";
import Satifaction from "./Satisfaction";
import FormContainer from "./form"
import StatusBar from "./StatusBar"
export default function CalculatorContainer(){
    const [payment ,  setPayment] = useState("");
    const [precentage1 , setPrecentage1] = useState(0);
    const [precentage2 , setPrecentage2] = useState(0);
    const total  =  payment * ((precentage1 + precentage2) / 2 /100);
    return(<div className="container">
<FormContainer payment = {payment} setPayment = {setPayment}/>
<Satifaction precentage = {precentage1} onSelect = {setPrecentage1}> how did you like this service ?  </Satifaction>
<Satifaction precentage={precentage2} onSelect={setPrecentage2} > how did your friend like this service? </Satifaction>


<StatusBar payment = {payment} total= {total}/>

    </div>)
}