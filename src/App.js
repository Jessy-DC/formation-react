import logo from './logo.svg';
import './App.css';
import {PureComponent, PureComponentProps} from './components/PureComponent'
import {StateComponent} from "./components/StateComponent";
import {ComponentLifeCycle} from "./components/ComponentLifeCycle";
import {useState} from 'react'
import {FilterableGamesTable} from "./components/games/FilterableGamesTable";

function App() {

  const [value, setValue] = useState('Jessy')

  //let labels = ["Jessy", "Mike", "React"]
  const GAMES = []
  GAMES.push({category: 'FPS', price: '10€', stocked: true, name: 'Counter Strike'})
  GAMES.push({category: 'FPS', price: '40€', stocked: false, name: 'Battlefield'})
  GAMES.push({category: 'FPS', price: '20€', stocked: true, name: 'Bioshock'})
  GAMES.push({category: 'Aventure', price: '30€', stocked: true, name: 'Uncharted'})
  GAMES.push({category: 'Aventure', price: '25€', stocked: false, name: 'Zelda'})
  GAMES.push({category: 'Aventure', price: '60€', stocked: true, name: 'Tomb Raider'})

  function onInputChange(val) {
    setValue(val)
  }

  return (
    <div className="App">
      <header className="App-header">

        <FilterableGamesTable games={GAMES} />

        {/*{ labels.map((label) => {*/}
        {/*  return <StateComponent name={label} onInputChange={onInputChange} />*/}
        {/*})}*/}
        {/*<ComponentLifeCycle />*/}
        <StateComponent name={"Jessy"} onInputChange={onInputChange} />
        <PureComponent />
        {value ? <PureComponentProps label={value} age={25} /> : <div>Invalid props</div>}

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
