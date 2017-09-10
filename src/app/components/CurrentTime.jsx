import React from 'react';

export default class CurrentTime extends React.Component{
  constructor(){
    super();
    const todayDate = new Date();
    const todayMonth = todayDate.getMonth();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]
    this.state = {
      year : todayDate.getFullYear(),
      month : monthNames[todayMonth],
      date : todayDate.getDate(),
      day: dayNames[todayDate.getDay()]
    }

  }

  render() {
    const timeStyle = {
      marginTop:"4%",
      textAlign: "right",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large",
      paddingRight :"10%"
    }
    return (
      <div style = {timeStyle}>
        {this.state.date}{' '}{this.state.month}{' '}{this.state.year}<br/>
      {this.state.day}
        <br/>
      </div>
    );
  }
}
