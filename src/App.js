import React, { useState, useEffect } from "react";
import Cards from "./cards";
import _ from "lodash";

// order display rerenderen bij game over OF Winner
// styling toevoegen.
// fin.

const App = () => {

  const [gamePlayed, setGamePlayed] = useState(0)

  const displayedOrders = []

  const StoreDisplayOrder = (recursions) => { 
    let newDisplayOrder = []
    if(displayedOrders.length === recursions){return displayedOrders}

    while(newDisplayOrder.length < 12) {
      let r = Number.parseInt(Math.random() * 12)
      if(newDisplayOrder.indexOf(r) === -1) newDisplayOrder.push(r)
    }

    if(displayedOrders[0] === undefined) {
      displayedOrders.push(newDisplayOrder)
      return StoreDisplayOrder(recursions)
    }
    for(const i in displayedOrders) {
      if( _.isEqual(displayedOrders[i], newDisplayOrder)) {
        return StoreDisplayOrder(recursions)
      } 
      displayedOrders.push(newDisplayOrder)
      return StoreDisplayOrder(recursions) 
      
    }
  }

  StoreDisplayOrder(12)

  useEffect((element) => {
    StoreDisplayOrder(12)
  }, [])

  

  return (
    <div>
      <h1 className="title">Memory Card - Flags Version</h1>
      <div className="description">This is a simple memory card game. Click on a flag to start the game. The cards will shuffle after each game. Can you beat the game by clicking on all 12 flags? </div>
      <Cards displayedOrders={displayedOrders} gamePlayed={gamePlayed} setGamePlayed={setGamePlayed}/>
    </div>
  )
};

export default App;