import { useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    setFilteredMonsters (monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    }));

  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchStringField = event.target.value.toLocaleLowerCase();
    setSearchString(searchStringField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rollerdex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="seach monster"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
