import React from "react"
 

class Form extends React.Component {
  state = {
    nextDestination :"",
    memberCount : "",
  }

handleChange = event =>{ 
   
  //METHODE REGEX // const key = event.target.value.replace(/[*]+/g, "")
    // this.setState ({[event.target.name] : key})
    
    if (event.target.value.includes("*")){
      return false
    }
    else{
      
      this.setState ({[event.target.name] : event.target.value})
    }

}
  
  render () {
    return (
      <div>
        <h1> (Quest number 4)plus tard j'aimerais aller : {this.state.nextDestination}</h1>
        <p>
          <input name = "nextDestination" type="text" onChange = {this.handleChange} value={this.state.nextDestination}/>
        </p>
        
        <h1> (Quest number 4) nous serons : {this.state.memberCount}</h1>
        <p>
          <input name = "memberCount" type="text" onChange = {this.handleChange} value={this.state.memberCount}/>
        </p>
      
      </div>
    )
  }
}

export default Form 