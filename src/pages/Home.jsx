import { useState } from "react";

const Home = () =>{
    const [inputValue ,setInputValue] = useState("");
    console.log(inputValue);
    const onInputChang = (ev) =>{
        setInputValue(ev.target.value);
    }
    
    return <div>
        <div>{inputValue}</div>
        <button onClick={()=>{
            setInputValue("awiral")
        }}>click me to change</button>
        <input type="text" value={inputValue} onChange={onInputChang} />
        
    </div>
};
export default Home;