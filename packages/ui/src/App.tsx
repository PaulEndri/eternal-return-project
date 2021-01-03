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
import { BG_THIRD } from './utilities/bgImages';
import PlayerView from './views/players';

function App() {
	return (
		<div className="App" style={{ backgroundImage: BG_THIRD, minHeight: '100vh' }}>
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
								<Route path="/players">
									<PlayerView />
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
