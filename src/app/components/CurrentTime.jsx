import React from 'react';

export default class CurrentTime extends React.Component{
  constructor(){
    super();
    let today = new Date();
    let hour = this.getCurrentHour();
    let min = this.getMinuteString();
    this.state = {
      year: today.getFullYear(),
      month: today.getUTCMonth() + 1,
      day: today.getDay(),
      hour: hour,
      min: min,
      sec: today.getSeconds()
    };
  }
  getCurrentHour() {
    var hour = new Date().getHours();
    if (hour == 0) hour = 12;
    else if (hour > 12) hour -= 12;
    if (hour < 10) return "0" + hour;
    return hour;
  }
  getMinuteString() {
    var min = new Date().getMinutes();
    if (min < 10) return "0" + min;
    else return min;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(() => {
      let today = new Date();
      let hour = this.getCurrentHour();
      let min = this.getMinuteString();
      _this.setState({
        year: today.getFullYear(),
        month: today.getUTCMonth() + 1,
        day: today.getDay(),
        hour: hour,
        min: min,
        sec: today.getSeconds()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const timeStyle = {
      color:"white",
      textAlign: "right",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large",
      paddingRight :"10%"
    }
    return (
      <div style = {timeStyle}>
        {this.state.year}/{this.state.month}/{this.state.day}<br/>{this.state.hour}:{this.state.min}:{this.state.sec}
        <br />
      </div>
    );
  }
}
