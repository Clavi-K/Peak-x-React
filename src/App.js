import './App.css';
import Landing from './components/display/Landing';
import CartContextProvider from './context/CartContext';

export default function App() {
  
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

      <CartContextProvider>
        <Landing greeting='PEAK STREETWEAR' />
      </CartContextProvider>

    </>
  );
}

