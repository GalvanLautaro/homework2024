import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/componente1.js';
import TarjetaPresentacion from './components/componente2.js';
import Contador from './components/componente3.js';
import './styles.css';
import Formulario from './components/componente5.js'

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
      	</header>
		<body className='App-body'>
			<div className='componente'>
				<HolaMundo />
        	</div>
			<div className='componente'>
				<TarjetaPresentacion />
			</div>
			<div className='componente'>
				<Contador />
			</div>
			<div className='componente'>
				<Formulario />
			</div>
		</body>
    	</div>
  	);
}

export default App;
