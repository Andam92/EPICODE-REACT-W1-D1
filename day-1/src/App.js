import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImgComponent from "./Components/ImageComponent";
import AnotherImg from "./Components/AnotherImageComponent";
import TextComponent from "./Components/TextComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <ButtonComponent text="CLICK HERE!" bgColor="grey" color="white" />
        <ImgComponent src="http://placekitten.com/g/200/300" alt="gattinoh" />
        <AnotherImg
          src="http://placekitten.com/g/400/400"
          alt="ancora gattinih"
        />
        <TextComponent color="white" />
      </header>
    </div>
  );
}

export default App;
