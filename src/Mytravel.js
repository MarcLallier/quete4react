import React from "react"

class Mytravel extends React.Component {
  render(){
    return(
    <p> je vais a {this.props.destination} en {this.props.country} qui est a {this.props.distance} voyez plutot <img src ={this.props.photo} alt={this.props.destination}></img></p>
    )
  }
}

export default Mytravel