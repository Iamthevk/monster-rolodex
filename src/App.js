import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//     console.log("1");
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state.monsters[0]);
//           }
//         )
//       );
//     console.log("3");
//   }

//   render() {
//     console.log("render");

//     return (
//       <div className="App">
//         {this.state.monsters.map((monster, i) => {
//           return <h1 key={i}>{monster.name}</h1>;
//         })}
//         <button>Change Name</button>
//       </div>
//     );
//   }
// }
const App = () => {
  const [monsters, setMonster] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonster(users));
  }, []);
  // console.log(monsters);

  const onSearchChange = (e) => {
    const searchFieldStr = e.target.value.toLocaleLowerCase();
    console.log(searchFieldStr);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
    </div>
  );
};
export default App;
