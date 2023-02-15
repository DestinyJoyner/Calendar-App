import { useState, useEffect } from "react"
import uuid from "react-uuid"
import "./Bonus.css"

function Bonus(props) {
    const [word, setWord] = useState([])
    const randomWord = require('random-words')

    const alphabet = []
    for (let i = 0; i <26; i++){
        alphabet.push(String.fromCharCode(97 + i))
    }

    const clicked = {
        backgroundColor: "black",
        color: "aqua"
    }

    function matchLetter(e) {
        const value = e.target.innerText
        e.target.style.backgroundColor = "black"
        e.target.style.color = "aqua"
    }

    useEffect(() => {
        const convertWord = randomWord({exactly:1})[0].toLowerCase().split('')
        setWord(convertWord)
    }, [])

    return (
        <div className="bonus center">
            <section className="bonus-word">
                {
                    word.map(letter => <p
                        key={uuid()} 
                    className="letter">
                        <span className="toggle">{letter}</span>
                        </p>)
                }
            </section>


            <section className="alphabet">
                {
                    alphabet.map(letter => {
                    return <button
                    onClick={(event) => matchLetter(event)} 
                    key={uuid()}>{letter}</button>
                    })
                }
            </section>
        </div>
    );
}

export default Bonus;