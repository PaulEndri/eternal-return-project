import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LayoutComponent from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlannerView from './views/planner';
import { ItemModalProvider } from './state/itemModal';
import { ItemModalComponent } from './components/itemModal.component';
import WikiView from './views/wiki';
import { LoadoutProvider } from './state/loadout.tsx';

function App() {
	return (
		<div className="App">
			<ItemModalProvider>
				<LoadoutProvider>
					<Router>
						<LayoutComponent>
							<Switch>
								<Route exact path="/">
									<PlannerView />
								</Route>
								<Route path="/planner">
									<PlannerView />
								</Route>
								<Route path="/wiki">
									<WikiView />
								</Route>
							</Switch>
						</LayoutComponent>
					</Router>
				</LoadoutProvider>
				<ItemModalComponent />
			</ItemModalProvider>
		</div>
	);
}

export default App;
