import { useState, useEffect } from "react";
import Btn from "./Btn";

const Converter = () => {
    const [number, setNumber] = useState(0);
    const [bool, setBool] = useState(false);
    const [text, setText] = useState("Minutes => Hours");

    const change = (e) => {
        setNumber(e.target.value);
    };
    
    const reset = () =>{
        setNumber("");
    }

    const invert = () => {
        setBool(!bool);
        reset();
    }

    useEffect(() => {
        if(bool){
            setText("Hours => Minutes");
        } else{
            setText("Minutes => Hours");
        }
      }, [bool]);

    // Return할 하위 태그를 여러 개 쓰고싶을 때 <></>
    return (
    <>
        <h1>Time Converter</h1>
        <p>Minutes : <input type="number" disabled={bool} placeholder="Minutes" onChange={change} value={bool? (number * 60) : number}/></p>
        <p>Hours : <input type="number" disabled={!bool} placeholder="Hours" value={bool ? number : (Math.floor(number/60))} onChange={change}/></p>
        <Btn click={reset} text="Reset"/>
        <Btn click={invert} text={text}/>
    </>
    );
};

export default Converter;