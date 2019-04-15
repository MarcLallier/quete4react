import React from "react"

class FetchSimpson extends React.Component {
  state ={
    simpsons : "",
    isloaded: false
  }

  getAllINeed = () => {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
    .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({simpsons: data[0]})        
      })
    }

  render(){
    const {image, character, quote } = this.state.simpsons

        return (
          <div>
            {
              <div>
                <img src={image} alt={character}/>
                <h1> Citation des simpson : {quote}</h1>
                <h1> Nom : {character}</h1>
              </div>
            }
            <div className ="pressButton">
              <button  onClick={this.getAllINeed}> Press it for Quest Number 5</button>
            </div>
          </div>
        )
    }
}

export default FetchSimpson 