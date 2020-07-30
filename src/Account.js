import React from "react";

export class Account extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username : ''
        }
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(event){
        this.setState({username : event.target.value})
        }
        

    clickme(){
        var title = this.state.username;
        console.log('name is : ' + title);
        alert("data saved");
      }
    render(){
    return(
        <div className="home1">
        <p>Name</p>
        <input type="text" onChange={this.updateInput}></input>
        <button type="button" onClick={this.clickme.bind(this)} className="btn">Save</button>
        <hr/>                                                                     
        </div>
       );
 }
}  