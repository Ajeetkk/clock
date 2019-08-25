import React from "react";
// import mny from "manavify";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clock: ""
    };
  }
  componentDidMount() {
    var that = this;
    setInterval(function() {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let date = new Date();
      // console.log("date = " + date);
      let dateDay = date.getDate();
      let month = months[date.getMonth()];
      // console.log("month = " + month);
      let year = date.getFullYear();
      let h = date.getHours();
      let m = date.getMinutes();
      var s = date.getSeconds();
      var ampm = h >= 12 ? "pm" : "am";
      let finallyDate =
        dateDay +
        " " +
        month +
        " " +
        year +
        "  " +
        h +
        ":" +
        m +
        ":" +
        s +
        "  " +
        ampm;

      that.setState({ clock: finallyDate });
    }, 1000);
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}>
        {this.state.clock ? this.state.clock : "no date"}
        <br />
        <a href="/react-clock-app.zip">download</a>
        {/* {mny.alertMsg()} */}
      </div>
    );
  }
}
export default App;
