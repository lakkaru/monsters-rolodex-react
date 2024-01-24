import { Component } from "react";

import "./App.css";
import CardList from './components/card-list/card-list-component'

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

  onSearchChange=(event) => {
    // console.log(this.state.monsters);
    const searchString = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return { searchString };
    });
  }

  render() {
const {monsters, searchString}=this.state;
const {onSearchChange}=this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    // console.log('filteredMonsters:  ', filteredMonsters);
    
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
