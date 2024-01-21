import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };
    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) =>
      
        {this.setState(() => {
          return { monsters: users};
        })
        console.log(users)}
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString);
    });
    console.log('filteredMonsters:  ', filteredMonsters);
    
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            // console.log(this.state.monsters);
            const searchString = event.target.value.toLocaleLowerCase();
            
            this.setState(() => {
              return { searchString };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
