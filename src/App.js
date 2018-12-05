import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import { DaftarPasien } from './screens/DaftarPasien';
import { DaftarStaff } from './screens/DaftarStaff';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import { UpdatePasien } from './screens/UpdatePasien';
import { HasilPasien } from './screens/HasilPasien';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
						<NavLink to="#" className="navbar-brand">
							<img src="/favicon.ico" alt="#" width="30" height="30"/>
						</NavLink>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className='nav-item'>
									<NavLink to="/" exact className="nav-link" activeClassName="active" >Home</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-pasien" exact className="nav-link" activeClassName="active">Daftar Pasien</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to="/all-staff" exact className="nav-link" activeClassName="active">Daftar Staff</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/all-pasien" exact component={DaftarPasien} />
							<Route path="/all-staff" exact component={DaftarStaff} />
							<Route path="/update-pasien/:id" exact component={UpdatePasien} />
							<Route path="/not-found" exact component={NotFound} />
							<Route path="/hasil-pasien/:id" exact component={HasilPasien} />							
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}