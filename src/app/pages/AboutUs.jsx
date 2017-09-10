import React from 'react';

export default class AboutUs extends React.Component {
  render() {
    const homeStyle = {
      margin:"0 auto",
      marginTop: "5%",
      padding: "10%",
      fontFamily: "Merriweather, serif",
      fontSize: "large",
      width:"70vw"
    }
    return (
      <div className="container">
        <div className="jumbotron" style={homeStyle}>
          We are company of one, bringing you the most demanded resource in tech
           industry today. Company was found in June, 2016 in greater seattle
           area and ever since then have worked to provide you with our highest
            quality product. If you want to get in contact, email us at
            hsjungcr@gmail.com or visit me at
          <a href="https://www.linkedin.com/in/han-jung-68bb38ab/"> my Linkedin</a>
        </div>
      </div>
    );
  }
}
