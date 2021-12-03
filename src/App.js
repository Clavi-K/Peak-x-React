import './App.css';
import Navbar from './components/display/Navbar';
import Landing from './components/display/Landing';
import ItemList from './components/display/ItemList';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <Navbar />
      <Landing greeting='PEAK STREETWEAR' />
      <ItemList />
    </>
  );
}

export default App;

