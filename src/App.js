import React, { Component } from 'react';
import Tree from './Tree';

// const data = [
//   { icon: "myIcon", text: "myText" },
//   { icon: "myIcon", text: "myText" },
//     { icon: "myIcon2", text: "myText2" },
//     { icon: "myIcon2", text: "myText2" },
// ];

const data = [
  { text: "first" },
  {
    text: "second",
    child: {
      text: "third",
      child: {
        text: "fourth"
      },
    }
  },
];

class App extends Component {
  render() {
    return (
      <Tree data={data} />
    );
  }
}

export default App;
