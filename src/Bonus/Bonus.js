import { useState, useEffect } from "react"
import uuid from "react-uuid"
import "./Bonus.css"

function Bonus(props) {
    const [word, setWord] = useState("")
    const randomWord = require('random-words')

    const alphabet = []
    for (let i = 0; i <26; i++){
        alphabet.push(String.fromCharCode(97 + i))
    }

    useEffect(() => {
        setWord(randomWord({exactly:1})[0].toLowerCase())
    }, [])

    return (
        <div className="bonus center">
            <h1>{word}</h1>


            <section className="alphabet">
                {
                    alphabet.map(letter => {
                    return <div key={uuid()}>{letter}</div>
                    })
                }
            </section>
        </div>
    );
}

export default Bonus;