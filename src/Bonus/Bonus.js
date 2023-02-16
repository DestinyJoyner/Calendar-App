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
        definition: ""
    })
    
    
    
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

    // dictionary https://dictionaryapi.dev/

    useEffect(() => {
        const convertWord = randomWord({exactly:1})[0].toLowerCase()
        console.log(convertWord)
        setWord(convertWord.split(''))
        const newAxios = axios.create()
        delete newAxios.defaults.headers.common['Authorization']
        newAxios.get(`https://dictionaryapi.dev/api/v2/entries/en/${convertWord}`)
        .then(({data}) => setHint({
            length: convertWord.length,
            definition: data.meanings[0].definitions.definition
        }))
    }, [])

    return (
        <div className="bonus center">
            <section className="bonus-hint">
                <span>Letters: {hint.length}</span>
                <span>Meaning: {hint.definition}</span>
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
        </div>
    );
}

export default Bonus;