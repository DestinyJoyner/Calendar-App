import { useState, useEffect, useRef } from "react"
import uuid from "react-uuid"
import "./Bonus.css"

function Bonus(props) {
    const refElement = useRef()
    
    const [word, setWord] = useState([])
    const randomWord = require('random-words')
    // use ref
    
    
    const alphabet = []
    for (let i = 0; i <26; i++){
        alphabet.push(String.fromCharCode(97 + i))
    }

    function matchLetter(e) {
        const value = e.target.innerText
        e.target.style.backgroundColor = "black"
        e.target.style.color = "aqua"
        const letterIndex = []
        word.forEach((letter, index) => {
            if(value === letter){
               letterIndex.push(index)
            }
        })
        console.log(letterIndex)



        // console.log(refElement.current.getElementsByClassName("toggle"))

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
                        <span 
                        ref={refElement}
                        className="toggle">{letter}</span>
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