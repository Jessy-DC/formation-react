import logo from './logo.svg';
import './App.css';
import {PureComponent, PureComponentProps} from './components/PureComponent'
import {StateComponent} from "./components/StateComponent";
import {ComponentLifeCycle} from "./components/ComponentLifeCycle";
import {useState} from 'react'

function App() {

  const [value, setValue] = useState('Jessy')

  //let labels = ["Jessy", "Mike", "React"]

  function onInputChange(val) {
    console.log(val)
    setValue(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*{ labels.map((label) => {*/}
        {/*  return <StateComponent name={label} onInputChange={onInputChange} />*/}
        {/*})}*/}
        <ComponentLifeCycle />
        <StateComponent name={"Jessy"} onInputChange={onInputChange} />
        <PureComponent />
        {value ? <PureComponentProps label={value} age={25} /> : <div>Invalid props</div>}

        <img src={logo} className="App-logo" alt="logo" />
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
