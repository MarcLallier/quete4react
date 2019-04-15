import React from "react"
import "./Travels5destination.css"

const trips = [
  {
    destination : "Marseille",
    distance : "500km",
    country : "France",
    photo : "https://cdnfr1.img.sputniknews.com/images/103323/72/1033237246.jpg"
  }
  ,
  {
    destination : "Bruxelles",
    distance : "600km",
    country : "Belgique",
    photo : "http://admin.traxmag.com//uploads/images/croped600x1200/2017/09/bruxelles-1_59b2b4564b8e4.jpg"

  }
  ,
  {
    destination : "Berlin",
    distance : "1500km",
    country : "Allemagne",
    photo : "https://www.edreams.fr/blog/wp-content/uploads/sites/6/2017/07/berlin-cover.jpg"

  }
  ,
  {
    destination : "Londres",
    distance : "800km",
    country : "Angleterre",
    photo : "https://www.nacel.fr/medias/_cache/produits/289/imagePrincipale/1920_1440/ecole-de-langue-londres-tower-bridge.jpg"

  }
  ,
  {
    destination : "Oslo",
    distance : "2000km",
    country : "Norvege",
    photo : "https://www.visitoslo.com/Images/Bilder%20Oslo/Attraksjoner/Astrup-Fearnley-museet-VO03611-4499.jpg?t=ScaleToFill%7C1450x720&ts=ZRb8gVRnBFnsgRbjCGzDNz0o0Rw%3D&pr=2.625"

  }
]



class Travels5destination extends React.Component{
  state ={
    apply : "",
  }

  blinkFunction = () => {
    return this.setState({apply : !this.state.apply})
  }

  render(){
    
    const effect = this.state.apply ? "applyed" : "notApplyed"


    return(
      
      <div className="container">
          
        <div className ="pressButton">
          <button className={effect}  onClick={this.blinkFunction}> Press it for Quest Number 3</button>
        </div>
        
        {trips.map(trip => (
        <div>je vais à {trip.destination} qui est à {trip.distance} en {trip.country}  voyez plutot 
          <img 
            alt={trip.destination}
            className = {effect}
            src={trip.photo}>
          </img>
        </div>)
        )}
        

      </div>
    )  
}
}

export default Travels5destination