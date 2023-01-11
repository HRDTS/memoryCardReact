import React, { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import Argentina from './img/Argentina.webp'
import Bolivia from './img/Bolivia.webp'
import Brazil from './img/Brazil.webp'
import Chile from './img/Chile.webp'
import Colombia from './img/Colombia.webp'
import Ecuador from './img/Ecuador.webp'
import Guyana from './img/Guyana.webp'
import Paraguay from './img/Paraguay.webp'
import Peru from './img/Peru.webp'
import Suriname from './img/Suriname.webp'
import Uruguay from './img/Uruguay.webp'
import Venezuela from './img/Venezuela.webp'



const Cards = (props) => {

    const displayedOrders = props.displayedOrders
    const game = props.game
    const setGamePlayed = props.setGamePlayed
    const gamePlayed = props.gamePlayed

    const [count, setCount] = useState(0)
    const [bestCount, setBestCount] = useState([0])
    const [clickSequence, setClickSequence] = useState([])
    
    const flagArray = [
        <img src={Argentina} />,
        <img src={Bolivia} />,
        <img src={Brazil} />,
        <img src={Chile} />,
        <img src={Colombia} />,
        <img src={Ecuador} />,
        <img src={Guyana} />,
        <img src={Paraguay} />,
        <img src={Peru} />,
        <img src={Suriname} />,
        <img src={Uruguay} />,
        <img src={Venezuela} />
    ]

    const saveNumber = (divContent) => {
        if(count === 11) {
            alert('Winner')
            let best = bestCount
            best.push(count + 1) 
            setBestCount(best)
            setClickSequence([])
            setCount(0)
            setGamePlayed(gamePlayed + 1)
        } else if(clickSequence.indexOf(divContent) === -1) {
            let sequence = clickSequence
            sequence.push(divContent)
            setClickSequence(sequence)
            setCount(count + 1)
        } else {
            alert('Game Over')
            let best = bestCount
            best.push(count)
            setBestCount(best)
            setClickSequence([])
            setCount(0)
            setGamePlayed(gamePlayed + 1)
        }

    }

    function GenerateCards () {

        let divs = displayedOrders[count].map((element) => {
            return <div key={uniqueId()} className="innerCards" onClick={() => saveNumber(element)}>{flagArray[element]}</div>
        })
        return <div className="cards">{divs}</div>
    }


    return (
        <div >
            <GenerateCards/>
            <div className="gameInformation">
                <div>current score: {count}</div>
                <div>best score: {Math.max(...bestCount)}</div>
                <div>total games played: {gamePlayed}</div>
            </div>

        </div>
    )
}

export default Cards;