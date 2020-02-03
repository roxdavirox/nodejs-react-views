var React = require("react");

const style = {
  fontSize: "1.5em",
  textAlign: "center",
  color: "white",
  backgroundColor: "red"
};

const HelloWorld = props => {
  return <div style={style}>{props.msg}</div>;
};

module.exports = HelloWorld;
