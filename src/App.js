import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="App">
			<h1>HEYYYY</h1>
			<Header />
			<div className="app__body">
				<Sidebar />
			</div>
			{/* REACT ROUTER -> CHAT SCREEN */}
		</div>
	);
}

export default App;
