import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LayoutComponent from './components/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemCard from './components/itemCard.component';
import { Weapon } from 'erbs-sdk';
import { WeaponsEnum } from './constants/Weapon';
import PlannerView from './views/planner';

function App() {
	return (
		<div className="App">
			<Router>
				<LayoutComponent>
					<PlannerView />
					{/* <ItemCard item={new Weapon(WeaponsEnum['AK-47'])} /> */}
				</LayoutComponent>
			</Router>
		</div>
	);
}

export default App;
