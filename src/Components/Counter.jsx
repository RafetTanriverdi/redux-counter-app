import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { increment,decrement,incrementByAmount } from '../Redux/Counter/CounterSlice';


function Counter() {

    const [amount, setamount] = useState(3);
    const countValue = useSelector(state=>state.counter.value)
    const dispatch =useDispatch();
  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={()=>dispatch(decrement())} >Decrement</button>
        <button  onClick={()=>dispatch(increment())} >Increment</button>

        <br />
        <br />
        <input type="number" value={amount}  onChange={(e)=>setamount(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(amount))} >incrementByAmount</button>
    </div>
  )
}

export default Counter