import React, {useState} from "react"
import "./EightBall.css"
const EightBall = ({answers}) => {
    const randomMessage = () => answers[Math.floor(Math.random() * answers.length)]
    const [message, setMsg] = useState({color:'black', msg:'think of a question'})
    const {msg, color} = message
    const reset = () => {
        setMsg({color: 'black', msg:"think of a question"})
    }

    return (
        <>
        <div className="header">
        <h1>Magic Eight Ball</h1>
        </div>
        <div className="eightball" onClick={() => setMsg(randomMessage())} style={{backgroundColor: color}}>
            <h2 className="message">{msg}</h2>

        </div>
        <button onClick={reset}>Reset the 8 ball</button>
        </>
    )
}

export default EightBall