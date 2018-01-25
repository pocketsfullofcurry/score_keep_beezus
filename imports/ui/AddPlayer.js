import React from 'react';
import {Players} from './../api/players';




export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let playerName = e.target.playername.value;
      if (playerName) {
        e.target.playername.value ='';
        Players.insert({
          name : playerName,
          score : 0
        }); //player.insert
      };//end of if
  };
  render(){
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="test" name="playername" placeholder="ready player one."/>
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}
