import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: '123424d',
          name: "Linda",
        },
        {
          id: '123256d',
          name: "Frank",
        },
        {
          id: '12084d',
          name: "Jacky",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
