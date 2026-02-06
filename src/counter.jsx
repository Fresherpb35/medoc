
import { useState } from "react"

const inj = () => {

  const [count , setCount] = useState(0)
  
const addHandle = () =>{

  setCount(count => count +1)

    
}
 

const minusHandle = () =>{

  if(count === 0) return
  setCount(count-1)
}


const reset =()=>{
   setCount(count => 0)
}
  return (
    <div>
      
      <h1>Counter app</h1>

      <p>Count:{count}</p>

<div className="flex flex-wrap gap-6 p-6">
        <button onClick={addHandle}>inc++</button>
            <button onClick={minusHandle}>dec++</button>

                        <button onClick={reset}>reset</button>

</div>



    </div>
  )
}

export default inj


