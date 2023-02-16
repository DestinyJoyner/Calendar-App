import { useState, useEffect, useRef } from "react"
import uuid from "react-uuid"
import axios from "axios"
import "./Bonus.css"

function Bonus() {
    const refElement = useRef()
    const randomWord = require('random-words')

    const [word, setWord] = useState([])
    const [hint, setHint] = useState({
        length: "",
        hint: ""
    })
    const [newGame, setNewGame] = useState(false)
    
    
    
    
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
        // console.log(refElement.current.children[letterIndex[0]])
        if(letterIndex.length){
            letterIndex.forEach(el => {
                refElement.current.children[el].classList.remove('hidden')    
            })
        }
    }

    // https://www.datamuse.com/api/

    useEffect(() => {
        const convertWord = randomWord({exactly:1})[0].toLowerCase()
        console.log(convertWord)
        // setWord(convertWord.split(''))
        const newAxios = axios.create()
        delete newAxios.defaults.headers.common['Authorization']
        newAxios.get(`https://api.datamuse.com/words?ml=${convertWord}&max=3`)
        .then(({data}) => {
            let words =""
            data.forEach((word, index) => 
                words += `${word.word}, `     
            )
            setWord(convertWord.split(''))
            setHint({
                length: convertWord.length,
                hint : words
            })   
        })
        .catch(err => console.log(err))
    }, [newGame])

    return (
        <div className="bonus center">
            <h1>Can You Guess The Word?</h1>
            <section className="bonus-hint">
                <span>Letters: {hint.length}</span>
                <span>Hint: {hint.hint}</span>
            </section>
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

            <button 
            className="bonus-button"
            onClick={() =>setNewGame(!newGame)}>
                New Game
            </button>
        </div>
    );
}

export default Bonus;