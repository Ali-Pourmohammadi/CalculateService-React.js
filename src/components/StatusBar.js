export default function StatusBar({payment, total}){
  
    return(<div className="status-container">
        {payment >0 ? <p >{`your payment is : ${payment +  total}`}$ ({`${payment}$ + ${total} $`})</p> : ""}
    </div>)
}