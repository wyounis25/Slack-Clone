import React, {useState} from "react"
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [user,setUser] = useState(null)
	return (
		<div className="App">
			{/* REACT ROUTER -> CHAT SCREEN */}
			<Router>
				{!user? (
					<>
					<Login/>
					</>
				):(
					<>
					<Header />
				<div className="app__body">
					<Sidebar />
					<Switch>
						<Route path="/room/:roomId">
							<Chat/>
							{/* <h2>CHAT</h2> */}
						</Route >
						<Route path="/">
							<h2>WELCOME WALID</h2>
						</Route>
					</Switch>
				</div>
				</>
					)}
				
			</Router>
		</div>
	);
}

export default App;
