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
        console.log(refElement.current.children[letterIndex[0]])
        if(letterIndex.length){
            letterIndex.forEach(el => {
                refElement.current.children[el].classList.remove('hidden')
                
            })
        }

    }

    useEffect(() => {
        const convertWord = randomWord({exactly:1})[0].toLowerCase().split('')
        console.log(convertWord)
        setWord(convertWord)
    }, [])

    return (
        <div className="bonus center">
            <section
            ref={refElement} 
            className="bonus-word">
                {
                    word.map(letter => <p
                    key={uuid()} 
                    className="hidden">
                       {letter}
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